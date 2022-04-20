import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import { FirebaseDatabaseMutation } from '@react-firebase/database'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class OnBoardingPlace extends Component {
    constructor(props) {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            schoolName: '',
            gradeLevel: 12,
            zipCode: '',
            shouldRedirectToAccountPage: false
        }
        this.recordInfo = this.recordInfo.bind(this)
    }
    render() {
        return (
            <div>
                {this.state.shouldRedirectToAccountPage && <Redirect to="/account" />}
                <IfFirebaseAuthed>
                    <FirebaseAuthConsumer>
                        {({ isSignedIn, user }) => {
                            return <form>
                                <h2>Alright. Let's continue creating your user.</h2>
                                <input type="email" disabled value={user.email } />
                                <input type="text" value={this.state.firstName} onChange={this.recordInfo} name="firstName" placeholder="first name" />
                                <input type="text" value={this.state.lastName} onChange={this.recordInfo} name="lastName" placeholder="last name" />
                                <input type="text" value={this.state.zipCode} onChange={this.recordInfo} name="zipCode" placeholder="ZIP code" />
                                <input type="text" value={this.state.schoolName} onChange={this.recordInfo} name="schoolName" placeholder="School Name" />
                                <input type="text" value={this.state.gradeLevel} onChange={this.recordInfo} name="gradeLevel" placeholder="Current Grade" />
                                <FirebaseDatabaseMutation path={`/user_data/${user.uid}`} type="set">
                                    {({runMutation}) =>
                                    <input type="submit" onClick={async (e) => {
                                        e.preventDefault()
                                        let obj = {
                                            email: user.email,
                                            firstName: this.state.firstName,
                                            lastName: this.state.lastName,
                                            schoolName: this.state.schoolName,
                                            gradeLevel: this.state.gradeLevel,
                                            zipCode: this.state.zipCode
                                        }
                                        await runMutation(obj)
                                        this.setState({shouldRedirectToAccountPage: true})
                                    }} />
                                }</FirebaseDatabaseMutation>
                            </form>
                        }}
                    </FirebaseAuthConsumer>
                </IfFirebaseAuthed>
                <IfFirebaseUnAuthed>
                    <Link to="/signIn">Sign In Here</Link>
                </IfFirebaseUnAuthed>
            </div>
        )
    }
    recordInfo(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

}
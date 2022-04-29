import React, { useState } from 'react'
import firebase from '../firebase'
import matchComments from '../../components/matchComments';



export default function LikeData (props) {
    const [likes, setLikes] = useState([]);
    const [likesLoaded, setLikesLoaded] = useState(false)
    const getLikes = () => {
        firebase.database().ref('match/' + props.id + '/user').on('userId', snap => {
            let Likes = []
            if (snap.val()) {
                for (let keys in snap.val()) {
                    firebase
                        .database()
                        .ref("users/" + keys)
                        .once("value", (s) => {
                            if (s.val()) {
                                let user = {
                                    player1epicName: s.val().player1epicName,
                                    player2epicName: s.val().player1epicName,
                                    player3epicName: s.val().player1epicName,
                                    player4epicName: s.val().player1epicName,
                                    matchedOn:      s.val().matchedOn,
                                    avatar: s.val().photoURL,
                                     date: snap.val()[keys],

                                };
                                Likes.push({ ...user, date: snap.val()[keys] });
                                Likes.sort((a, b) => {
                                    return b.date - a.date;
                                });
                                setLikesLoaded(true)
                                setLikes(Likes.reverse())
                            }
                        });
                }
            } else {
                setLikes(Likes)
            }
        })
    }
    React.useEffect(() => {
        getLikes();

    }, [props.id])

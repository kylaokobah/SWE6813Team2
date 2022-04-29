import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import forest from "../assets/images/forest.jpg"


export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="not-found">
             <source src={forest}> </source>
                <Helmet><title>{this.props.title}</title></Helmet>
                <span>404</span>
                <span>Page Not Found.</span>

                <Link to="*">Back to homepage</Link>
            </div>
        );
    }
}

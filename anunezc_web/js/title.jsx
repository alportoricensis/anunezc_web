import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";


export default function Title() {
    return (
        <section id="title">
            <div className="titleWrapper">
                <h1 className="titleTitle">
                    print("Hello World!") 
                    <br></br>
                    I'm Alex; nice to meet you!
                </h1>
                <img className="aboutMePicture" src="/static/images/Headshot.jpeg" alt="AboutMe">
                </img>
            </div>
        </section>
    )
}
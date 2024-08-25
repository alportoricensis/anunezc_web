import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";


export default function Skills() {
    return (
        <section id="Skills">
            <div className="aboutMeContainer">
                <h2>
                    Skills
                </h2>
                    <h3>
                        Programming Languages
                    </h3>
                    <div className="skillsContainer">
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/C++_logo.png" alt="C/C++">
                            </img>
                            <h4>C/C++</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/pythonlogo.png" alt="Python">
                            </img>
                            <h4>Python</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/javalogo.png" alt="Java">
                            </img>
                            <h4>Java</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/jslogo.png" alt="JavaScript">
                            </img>
                            <h4>JavaScript</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/matlablogo.png" alt="MATLAB">
                            </img>
                            <h4>MATLAB</h4>
                        </div>
                    </div>
                    <h3>
                        Tools & Frameworks
                    </h3>
                    <div className="skillsContainer">
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/html5logo.png" alt="HTML">
                            </img>
                            <h4>HTML</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/csslogo.png" alt="CSS">
                            </img>
                            <h4>CSS</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/reactlogo.png" alt="React">
                            </img>
                            <h4>React</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/giticon.png" alt="Git">
                            </img>
                            <h4>Git</h4>
                        </div>
                        <div className="skill">
                            <img className="logoPicture" src="/static/images/sqllogo.png" alt="SQL">
                            </img>
                            <h4>SQL</h4>
                        </div>                        
                    </div>
            </div>
        </section>
    )
}
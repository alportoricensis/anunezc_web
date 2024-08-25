import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";


export default function Experience() {
    return (
    <section id="Experience">
        <div className="aboutMeContainer">
            <h2>
                Experience
            </h2>
            <div className="academics">
                <dl className="courseList">
                    <dt>Motor Vehicle Operator | University of Michigan | FA23-Present</dt>
                    <dd>
                        <ul className="courseList">
                            <li>Provided reliable, safe, and efficient transportation for hundreds of student and faculty using the SafeRide service</li>
                            <li>Worked in tandem with dispatch to reduce wait and transit times by finding alternate, more efficient routes</li>
                            <li>Maintained a log of SafeRide users, vehicle mileage, and gas consumption on a nightly basis</li>
                        </ul>
                    </dd>
                    <br></br>
                    <dt>Customer Service Representative | CVS Pharmacy | FA22-FA23</dt>
                    <dd>
                        <ul className="courseList">
                            <li>Provided friendly customer service in the highest performing store in the district</li>
                            <li>Utilized store inventory management system to ensure accurate stock counts, compliance with sell by dates, and process customer orders</li>
                        </ul>
                    </dd>
                    <br></br>
                    <dt>Research Intern | University of Michigan | SU21</dt>
                    <dd>
                        <ul className="courseList">
                            <li>Designed several millimeter scale auxetic polymer scaffolds for seeing artificial heart tissue</li>
                            <li>Fabricated polymer scaffolds using a novel RegenHu Bioprinter</li>
                            <li>Characterized scaffold geometry using MATLAB's image processing toolbox and scaffold mechanical properties in response to stimuli</li>
                        </ul>
                    </dd>
                    <br></br>
                </dl>
            </div>
        </div>
    </section>
    )
}
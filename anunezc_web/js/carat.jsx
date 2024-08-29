import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";


export default function Carat({courseID}) {
    const mounted = useRef(false);
    const [caratIcon, setCaratIcon] = useState('+');

    useEffect(() => {
        mounted.current = true;
        if ((courseID === "eecs388" || courseID === "math561" || courseID === "acc300")) {
            setCaratIcon('-');
        }

        return () => {
            mounted.current = false;
        };
    }, []);

    const loadDetails = (courseID) => {
        var index;

        setCaratIcon(caratIcon === '+' ? '-' : '+');
    
        if (caratIcon === '+') {
            document.getElementById(courseID).style.display = "block";
        } else {
            document.getElementById(courseID).style.display = "none";
        }
    }

    return (
        <button className="courseIDCarat" onClick={() => loadDetails(courseID)}>{caratIcon}</button>
    );
}
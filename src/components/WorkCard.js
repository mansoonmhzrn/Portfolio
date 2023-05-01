import "./WorkCardStyles.css"
import w1 from "../assets/w1.png"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
            <div className="project-card">
                <img src={ w1 } alt="image"/>
                <h2 className="project-title">
                    Project Title
                </h2>
                <div className="pro-details">
                    <p>
                        This is text.
                    </p>
                    <div className="pro-btns">
                        <NavLink to="www.google.com" className="btn">View

                        </NavLink>
                        <NavLink to="www.google.com" className="btn">Source

                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
import * as React from 'react'
import { Link } from 'react-router-dom'
import '../style/intro.css';

const Intro = () => (
    <div className="container">
        <div className="title">
            <h1>
                <ul>
                    <li className="letters">H</li>
                    <li className="letters">E</li>
                    <li className="letters">L</li>
                    <li className="letters">M</li>
                </ul>
            </h1>
        </div>
        <div className="content">
            <div className="button">
                <Link to="/landing/" className="enter">ENTER</Link>
            </div>
        </div>
        <div className="overlay">
            <video autoPlay muted loop id="myVideo">
                <source src="./assets/larry.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
)

export default Intro
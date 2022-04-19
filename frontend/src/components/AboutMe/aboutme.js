import React from "react";
import { NavLink } from "react-router-dom";
import Omnia1 from '../../images/Omnia1.png'
import {DiJavascript1, DiPython, DiReact, DiPostgresql} from 'react-icons/di'
import {SiFlask, SiAboutdotme} from 'react-icons/si'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function AboutMe() {
    return (
    <div className="mainIndivSpot">
        <div className="spotTitleLocBox">
            <div className="spotTitle">Sai Byri</div>
            <div className="online-icons">
                <a
                    href="https://www.linkedin.com/in/sai-byri-2230015/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/sbyri97"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
                <a
                    href="https://www.saibyri.dev/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SiAboutdotme />
                </a>
            </div>
            <div className="spotLoc">San Francisco, CA, United States</div>
        </div>
        <div className="spotImgBox">
            <div className='ImgInnerDiv'>
                <img className='spotImg' src={Omnia1} />
            </div>
        </div>
        <div className="spotInfoBox">
            <div className="spotDetailsBox">
                <div className="spotDetails-property">SustainaBnb built by Me</div>
                <div className="spotDetails-description">
                <p>
                    I graduated from San Jose State University with a degree in Biology and an upcoming graduate from App Academy, where I studied full-stack software engineering.
                    As a previous researcher and now a software engineer, I am passionate about both problem solving logically and creatively which make an impact on the lives of many.
                    I am amazed by the reach a software product can have and the role it plays in our lives.
                </p>
                Professionally, I am trained in Python, Javascript, React, Flask, Express, Nodejs, PostgreSQL.
                Personally, I enjoy the outdoors doing things such as running, hiking, skiing, basketball, cricket.
                I also enjoy traveling and exploring/learning about cultures around the world. Feel free to reach out to me about programming or even my hobbies!
                </div>
                <div className="spotDetails-placeinfo">
                    <div className='spotDetails-offer'>Some skills of mine</div>
                        <div className='spotDetails-guest'>
                            <DiJavascript1 />
                            Javascript
                        </div>
                        <div className='spotDetails-guest'>
                            <DiPython />
                            Python
                        </div>
                        <div className='spotDetails-guest'>
                            <DiReact />
                            React + Redux
                        </div>
                        <div className='spotDetails-guest'>
                            <DiPostgresql />
                            PostgreSQL, SQLAlchemy, Sequelize
                        </div>
                        <div className='spotDetails-guest'>
                            <SiFlask />
                            Flask, Express
                        </div>
                </div>
            </div>
            <div className="spotPriceBox">
                  <div className='spotPrice'>
                    $ xxxxxx / year
                  </div>
                  {/* <div className="spotBooking-outerBox">
                          <Bookings spotId={spot?.id} spotUserId={spot?.userId} spotPrice={spot?.price}/>
                  </div> */}
            </div>
        </div>
        {/* <div className="spotReviewBox">
            <Reviews review={review} setReview={setReview} spotId={spotId} spotUserId={spot?.userId} reviewsArr={reviewsArr}/>
        </div> */}
    </div>
    )
}

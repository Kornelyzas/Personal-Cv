import React from 'react'
import './cv.css'

function Cv() {
    return (
        <div className="cv">
            <div className="cv-header">
                <div className="cv-name">
                    <h2 className="h2-div">Kornelijus Gaižiūnas</h2>
                </div>
                <div className="cv-header-end">
                    <h4 className="h4-div">Curriculum Vitae</h4>
                </div>
            </div>
            <div className="cv-main">
                <div className="left-side">
                    <div className="photo"></div>
                        <div className="lang-skills">
                            <h3>Language Skills</h3>
                            <p className="p-div">
                                <b className="p-box">English</b> B2
                                <b className="p-box">Russian</b> A2
                                <b className="p-box">Dutch</b> A1
                            </p>
                        </div>
                    </div>
                <div className="middle-side">
                    <div className="work-xp">
                        <h3 className="xp-div">Work Experience</h3>
                    </div>
                    <div className="work-xp-div">
                        <div className="work-xp-box-1 work-box">
                            <p>
                                <b>UAB Baltic Furniture Components</b><br></br>
                                2016-2021<br></br>
                                Cutting Machine Operator<br></br>
                                Kaunas, Lithuania
                            </p>
                        </div>
                    </div >
                    <div className="work-xp-div">
                        <div className="work-xp-box-3">
                            <p>
                                    <b>IKEA Industry</b><br></br>
                                    2016<br></br>
                                    Automatic Grilling Machine Operator<br></br>
                                    Forklift Operator<br></br>
                                    Kazlu Ruda, Lithuania
                            </p>
                        </div>
                    </div>
                    <div className="work-xp-div">
                        <div className="work-xp-div-5">
                            <p>
                                    <b>Gressingham Foods</b><br></br>
                                    2015<br></br>
                                    Water Plant Operator<br></br>
                                    Forklift Operator<br></br>
                                    Redgrave, Suffolk, United Kingdom
                            </p>
                        </div>
                    </div>
                    <div className="work-xp-div">
                        <div className="work-xp-div-7">
                            <p>
                                    <b>Thorn Bakeron</b><br></br>
                                    2015<br></br>
                                    Warehouse Operative<br></br>
                                    Nottingham, East Midlands, United Kingdom
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                <div className="work-xp">
                        <h3 className="xp-div">Education</h3>
                    </div>
                    <div className="work-xp-div">
                        <div className="work-xp-div-7">
                            <p>
                                    <b>Kaunas Information technology School</b><br></br>
                                    2020-2021<br></br>
                                    Full-Stack Web Development<br></br>
                                    Kaunas, Lithuania
                            </p>
                        </div>
                    </div>
                    <div className="work-xp-div">
                        <div className="work-xp-div-7">
                            <p>
                                    <b>Kaunas University of Applied Sciences</b><br></br>
                                    2016-2017<br></br>
                                    Logistics Management<br></br>
                                    Kaunas, Lithuania<br></br>
                                    (Not graduated)
                            </p>
                        </div>
                    </div>
                    <div className="work-xp-div">
                        <div className="work-xp-div-7">
                            <p>
                                    <b>Kazlu Ruda Kazys Grinius gymnasium</b><br></br>
                                    2011-2015<br></br>
                                    Middle school diploma<br></br>
                                    Kazlu Ruda, Lithuania<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cv

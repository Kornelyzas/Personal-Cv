import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/Spinner'
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="top">
                <div className="photo">

                </div>
                <div className="greeting-box">
                    <h2 className="para hi">I'm Kornelijus</h2>
                    <p className="para hii">WEB DEVELOPER</p>
                </div>
            </div>
            <div className="middle">
                <div className="intro">
                    <div className="about">
                        <div className="intro-me-head">
                            <h2>ABOUT</h2>
                        </div>
                        <div className="services">
                            <div className="serv1">
                                <div className="web-dev">
                                    <h4 className="sr-c">
                                    <Spinner animation="grow" variant="light" /> Web Development
                                    </h4>
                                    <h4 className="sr-c">
                                    <Spinner animation="grow" variant="light" /> Web Design
                                    </h4>
                                    <h4 className="sr-c">
                                    <Spinner animation="grow" variant="light" /> Back-End Programing
                                    </h4>
                                    <h4 className="sr-c">
                                    <Spinner animation="grow" variant="light" /> Database Creation
                                    </h4>
                                </div>
                            </div>
                            <div className="serv2">
                                <div className="my-pic">

                                </div>
                                <p className="intro-text">
                                    "Hi! My name is Kornelijus. Just a simple guy from province
                                    who loves nature and traveling. I'm studying Full-Stack
                                    Web Development course at Kaunas Information Technology School.
                                    A couple of year I have a strong wish to change my carrer,
                                    and seek more opportunities in life, so I choosed programing!
                                    This path is full of challenges and hard, but most important interesting."
                                </p>
                                <div className="icons">
                                    <div className="ic1">
                                    <a href="http://www.linkedin.com/in/kornelijus-gaižiūnas-148681201" target="_blank">   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                        </svg>
                                    </a> 
                                    </div>
                                    <div className="ic1">
                                    <a href="https://www.facebook.com/kornelijus.gaiziunas" target="_blank">   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook mx-3" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                    </a> 
                                    </div>
                                    <div className="ic1">
                                    <a href="mailto:kornelgaiz@gmail.com" target="_blank">   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                                        </svg>
                                    </a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contacts">

                        </div>
                    </div>
                    <div className="skills">
                        <div className="skill-head">
                            <h2>SKILLS</h2>
                        </div>
                        <div className="skill-main">
                            <h4>HTML</h4>
                            <ProgressBar variant="warning" now={90}/>
                            <h4>CSS</h4>
                            <ProgressBar variant="warning" now={80}/>
                            <h4>JS</h4>
                            <ProgressBar variant="warning" now={50}/>
                            <h4>JAVA</h4>
                            <ProgressBar variant="warning" now={30}/>
                            <h4>PHP</h4>
                            <ProgressBar variant="warning" now={5}/>
                            <h4>PYTHON</h4>
                            <ProgressBar variant="warning" now={2}/>
                            <h4>REACT</h4>
                            <ProgressBar variant="warning" now={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

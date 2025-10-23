import React, { Fragment } from "react";
import "./hero.css";
import my_ph from "../images/prof_3.jpg";
import ReactDOM from 'react-dom'
import p1 from "../images/picture ,icons/git_light.png";
import p2 from "../images/picture ,icons/linked_icon_active.png";
import p3 from "../images/picture ,icons/face_icon.png";
import logo from "../images/logo.png"
import back from "../images/back.png"
// import developer from "../../animation/developer3.json"
import Cards from "../3-main/card";
import Lottie from "react-lottie";
// import Lottie from "react-lottie";
import devo from "../../animation/developer.png";
import cv from "./Kariem_cv_13.2.pdf"


function DownloadButton({ filePath, fileName, buttonText }) {
    return (
      <a href={cv} download={cv}>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {buttonText}
        </button>
      </a>
    );
  }
const Hero = () =>{
    return(
        <Fragment>
            <div className="row hero_sec">
                <div className="col-sm-12 col-md-6">
                    <img src={my_ph} className="img_pro"/>
                    <h2>
                    kariem ibrahiem 
                    </h2>
                    <small>full-stack</small>
                    <p className="text">
                        front-end (React) and back-end (Laravel) developer , 
                        with more than 1.5 years of experience in building web applications and
                        websites . passionate about learning new technologies and
                        improving my skills . looking forward to working on exciting projects
                        and collaborating with talented teams.
                        work in two companies full and part time as a full-stack(laravel , Blade) developer.
                    </p>
                    {/* <button className="cv_bt"><a  href="./resume_10_3.pdf" download className="cv"> take a look at cv</a></button> */}
                    {/* <a href="./resume_10_3.pdf" Download PDF download="resume_10_3.pdf" class="download-btn">
                        download cv
                    </a> */}

<DownloadButton
        filePath="./resume_10.6.pdf.pdf.pdf"
        fileName="cv.pdf"
        buttonText="Download PDF"
      />
                    <br />
                    <br />
                    <div className="connection">
                        <a target="_blank" href="https://github.com/kariemibrahiem"><img src={p1} className="icon"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/kariem-ibrahiem-903a0b2a7/"> <img src={p2} className="icon"/></a>
                        <a target="_blank" href="https://www.facebook.com/kemo.ibrahem.98/"> <img src={p3} className="icon"/></a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 logo_div">
                    {/* <Lottie animationData={developer}/> */}
                    <img src={devo} className="send" alt="" />
                    <img src="../../animation/dev.json" alt="" />
                </div>
            </div>
        </Fragment>
    );
}

export default Hero;

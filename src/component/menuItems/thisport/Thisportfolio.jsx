import React from "react";
import { linkProjects } from "../../myprojects/data";
import xBtn from "../../myprojects/slides/images/x.png";
import gitIcon from "../../myprojects/slides/images/gitIcon.png";
import eyeIcon from "../../myprojects/slides/images/eye.png";
import "./thisportfolio.css";

function Thisportfolio({ setNotBuildPage }) {
  const projectId = 4;

  const handleBuildPage = () => {
    setNotBuildPage(false);
  };
  return (
    <div className="thisPortfolio">
      <div className="thisOne">
        <div className="closeBtnT">
          <img onClick={handleBuildPage} src={xBtn} alt="" />
        </div>

        <div className="oneLeft">
          <div className="imgdiv">
            <div className="Onetitle">
              <p> {linkProjects[projectId].projectTile} </p>
              <div className="oneIcons">
                <a href={linkProjects[projectId].github}>
                  <img
                    src={gitIcon}
                    style={{ width: "60px", height: "60px" }}
                    title="Visiit the code"
                    alt=""
                  />
                  View code
                </a>
                <a href={linkProjects[projectId].onlineLink}>
                  <img
                    src={eyeIcon}
                    style={{ width: "70px", height: "70px" }}
                    title="visit the website"
                    alt=""
                  />{" "}
                  View Project
                </a>
              </div>
            </div>
            <img src={linkProjects[projectId].poster} alt="" />
          </div>
        </div>
        <div className="oneRight">
          <div className="oneRightBody">
            <div className="desc">
              <p>About the project</p>
              <div className="descText">
                {" "}
                {linkProjects[projectId].description}{" "}
              </div>
            </div>
            <div className="languages">
              <p>Technologies employed in the build</p>
              <div className="buildTechnologie">
                <div className="technologies">
                  <p> {linkProjects[projectId].language[0].name} </p>
                  <img src={linkProjects[projectId].language[0].icon} alt="" />
                </div>
                <div className="technologies">
                  <p> {linkProjects[projectId].language[1].name}</p>
                  <img src={linkProjects[projectId].language[1].icon} alt="" />
                </div>
                <div className="technologies">
                  <p> {linkProjects[projectId].language[2].name} </p>
                  <img src={linkProjects[projectId].language[2].icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thisportfolio;

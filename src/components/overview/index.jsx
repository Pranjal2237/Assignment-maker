import React from "react";
import "./overview.css";
import agenda from "../../assets/images/agenda.png";
import group from "../../assets/images/group.png";
import portal from "../../assets/images/portal.png";
import link from "../../assets/images/link.png";
import useMobile from "../../customHooks/useMobile";

const Overview = () => {
  const isMobile=useMobile();
  return (
    <div className="overview-box">
      <div className="description-box" style={{flexBasis:isMobile>675?"15%":"50%" }}>
        <h3>Total Assessment</h3>
        <div className="flex">
          <div className="img-box">
            <img src={agenda} alt="agenda" width="15px" />
          </div>
          <h1>34</h1>
        </div>
      </div>
      {isMobile<=675 && (
        <div className="description-box" style={{ flexBasis:isMobile>675?"15%":"50%" }}>
        <h3>Total Purpose</h3>
        <div className="flex">
          <div className="img-box" style={{backgroundColor:"#E5F1FC"}}>
            <img src={link} alt="link" width="20px" height="15px" />
          </div>
          <h1>11</h1>
        </div>
      </div>
      )}
      <div className="description-box" style={{ flexBasis:isMobile>675?"30%":"100%" }}>
        <h3>Candidates</h3>
        <div className="flex">
          <div className="img-box">
            <img src={group} alt="" />
          </div>
          <div className="candidate-box">
            <div className="flex">
              <h1>11,145</h1>
              <p className="green-para">+89</p>
            </div>
            <p>Total Candidate</p>
          </div>
          <div className="candidate-box">
            <div className="flex">
              <h1>1,14</h1>
              <p className="green-para">+89</p>
            </div>
            <p>Who Attamped</p>
          </div>
        </div>
      </div>
      <div className="description-box" style={{ flexBasis:isMobile>675?"40%":"100%" }}>
        <h3>Candidates Source</h3>
        <div className="flex">
          <div className="img-box" style={{backgroundColor:"#FCE8EF"}}>
            <img src={portal} alt="portal" width="15px" />
          </div>
          <div className="candidate-box">
            <div className="flex">
              <h1>11,000</h1>
              <p className="green-para">+89</p>
            </div>
            <p>E-mail</p>
          </div>
          <div className="candidate-box">
            <div className="flex">
              <h1>145</h1>
              <p className="green-para">+89</p>
            </div>
            <p>Social Share</p>
          </div>
          <div className="candidate-box">
            <div className="flex">
              <h1>145</h1>
              <p className="green-para">+89</p>
            </div>
            <p>Unique Link</p>
          </div>
        </div>
      </div>
      {isMobile>675 && (
        <div className="description-box" style={{ flexBasis:isMobile>675?"15%":"50%" }}>
        <h3>Total Purpose</h3>
        <div className="flex">
          <div className="img-box" style={{backgroundColor:"#E5F1FC"}}>
            <img src={link} alt="link" width="20px" height="15px" />
          </div>
          <h1>11</h1>
        </div>
      </div>
      )}
    </div>
  );
};

export default Overview;

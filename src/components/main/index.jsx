import React, { useState } from "react";
import "./main.css";
import useMobile from "../../customHooks/useMobile";
import toggle from "../../assets/images/segment.png";
import search from "../../assets/images/search.png";
import filter from "../../assets/images/filter.png";
import chart from "../../assets/images/chart.png";
import add from "../../assets/images/add.png";
import AssesmentInfo from "../assesmentInfo";
import Overview from "../overview";

const Main = ({ handleOpen, assesData, setIsForm }) => {
  const [open, setOpen] = useState("My Assessments");
  const[isOpenOverview,setIsOpenOverview]=useState(false);
  const isMobile = useMobile();
  let navOption1 = `My Assessments`;
  let navOption2 = `Unstop Assessments`;
  if (isMobile <= 675) {
    navOption1 = `Assessment`;
    navOption2 = `My Assessments`;
  }
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {isMobile <= 675 && (
        <div className="flex mob-nav">
          <button
            onClick={() => {
              handleOpen();
            }}
            className="btn"
          >
            <img src={toggle} alt="" />
          </button>
          <h1 className="nav-options">Assessment</h1>
        </div>
      )}
      <div className={isMobile<=675?"flex-between":"nav-box"} style={{borderBottom:isMobile<=675 && '1px solid #DADCE0'}}>
        <h1
          className={
                open === navOption1
              ? "nav-options nav-option-clicked"
              : "nav-options"
          }
          onClick={() => {
            setOpen(navOption1);
          }}
        >
          {navOption1}
        </h1>
        <h1
          className={
            open === navOption2
              ? "nav-options nav-option-clicked"
              : "nav-options"
          }
          onClick={() => {
            setOpen(navOption2);
          }}
        >
          {navOption2}
        </h1>
      </div>
      <main className="main-box">
        {isMobile > 675 && <h2>Assessments Overview</h2>}
        {isMobile>675?(<Overview />):isOpenOverview && (<Overview />)}
        <div className="flex-between" style={{ marginTop: "2rem" }}>
          <h2>My Assessment</h2>
          {isMobile <= 675 && (
            <div className="flex">
              <button className="btn">
                <img src={search} alt="" />
              </button>
              <button className="btn">
                <img src={filter} alt="" />
              </button>
              <button className={isOpenOverview?"mob-prop-btn":"btn"} onClick={()=>{setIsOpenOverview(!isOpenOverview)}}>
                <img src={chart} alt="" />
              </button>
            </div>
          )}
        </div>
        <div className={isMobile > 675 && "flex"} style={{ gap: "1.5rem" }}>
          <div className="input-box">
            <button
              className="input-btn"
              onClick={() => {
                setIsForm(true);
              }}
            >
              <img src={add} alt="plus" />
            </button>
            <h2>New Assessment</h2>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
          <AssesmentInfo assesData={assesData} isMobile={isMobile} />
        </div>
      </main>
    </div>
  );
};

export default Main;

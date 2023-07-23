import React from "react";
import './assesmentInfo.css'
import useMobile from "../../customHooks/useMobile";
import bag from "../../assets/images/bag.png";
import dot from "../../assets/images/3 dot.png";
import share from "../../assets/images/share.png";
import schedule from "../../assets/images/schedule.png";
import fram1 from "../../assets/images/Frame1.png";
import fram2 from "../../assets/images/Frame2.png";
import fram3 from "../../assets/images/Frame3.png";
import calender from "../../assets/images/calendar.png";

const AssesmentInfo = ({assesData}) => {
  const isMobile=useMobile();
  let data = [...assesData];
  if (isMobile>675) {
    data = assesData.slice(0, 2);
  }
  return (
    <>
      {data.map(({ assesment,index }) => (
        <div className="asses-box">
          <div className="flex-between asses-descrip-box">
            <div className={isMobile<=675 && `flex`}>
              <div className="bag-box">
                <img src={bag} alt="bag" />
              </div>
              <div style={{marginTop:isMobile>675 && "0.5rem"}}>
                <h2>{assesment}</h2>
                <div className="flex">
                  <h3>Job</h3>
                  <div className="flex">
                    {isMobile<=675 ? (
                      <img src={schedule} alt="schedule" />
                    ) : (
                      <img src={calender} alt="calender" />
                    )}
                    <p className="asses-date">20 Apr 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={dot} alt="dots" />
          </div>
          <div className="flex-between asses-share-box">
            <div className="flex">
                <div>
                    <h3>00</h3>
                    <p>Duration</p>
                </div>
                <div>
                    <h3>00</h3>
                    <p>Questions</p>
                </div>
            </div>
            <div className="flex-between">
                <button className="button flex share-btn" style={{position:"relative",left:"18%"}}>
                    <img src={share} alt="share" />
                    <h3>Share</h3>
                </button>
                <div className="flex" style={{position:"relative"}}>
                    <img src={fram1} alt="frame" style={{position:"relative",left:"45%"}} />
                    {index!==0 && (
                        <>
                        <img src={fram2} alt="frame" style={{position:"relative",left:"22%"}} />
                        <img src={fram3} alt="frame" style={{position:"relative"}} />
                        </>
                    )}
                </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AssesmentInfo;

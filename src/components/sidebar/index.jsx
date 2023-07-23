import React, { useState } from "react";
import "./sidebar.css";
import { sidebarData } from "../../data/assesmentData";
import useMobile from "../../customHooks/useMobile";
import close from "../../assets/images/close.png";
import admin from "../../assets/images/admin_meds.png";

const SideBar = ({ handleOpen, isOpen}) => {
  const [menu, setMenu] = useState("Assesment");
  const isMobile=useMobile();
  return (
    <div
      className={
        isMobile<=675
          ? isOpen
            ? "sidebar-box mob-sidebar-prop mob-sidebar-open"
            : "sidebar-box mob-sidebar-prop"
          : "sidebar-box"
      }
    >
      <div className="menu-box">
        {isMobile<=675 && (
          <div className="flex-between">
            <p>Menu</p>
            <button
              onClick={() => {
                handleOpen();
              }}
              className="btn"
            >
              <img src={close} alt="close" />
            </button>
          </div>
        )}
        {sidebarData.map(({ image, title }) => (
          <div
            className={
              menu === title
                ? isMobile<=675
                  ? `flex menu-options menu-option-clicked`
                  : `big-responsive menu-options menu-option-clicked`
                : isMobile<=675
                ? `flex menu-options`
                : `big-responsive menu-options`
            }
            onClick={() => {
              setMenu(title);
            }}
          >
            <img src={image} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div
        className={
          isMobile<=675 ? "flex-between menu-options" : "flex-column menu-options"
        }
        style={{borderTop:"1px dashed #BACBD5",marginTop:"0.5rem",paddingTop:"1.5rem"}}
      >
        <div className={isMobile<=675 ? "flex" : "big-responsive"}>
          <img src={admin} alt="close" />
          <p>Round Status</p>
        </div>
        <button className="button btn-clr">Admin</button>
      </div>
    </div>
  );
};

export default SideBar;

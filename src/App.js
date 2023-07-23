import "./App.css";
import SideBar from "./components/sidebar";
import Main from "./components/main";
import { useState } from "react";
import useMobile from "./customHooks/useMobile";
import { assesmentData } from "./data/assesmentData";
import FormData from "./components/form";
import close from "./assets/images/close.png";

function App() {
  const [assesData, setAssesData] = useState(assesmentData);
  const [isOpen, setIsOpen] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const isMobile = useMobile();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        display: isMobile <= 675 ? "block" : "flex",
        gap: "1rem",
        position: "relative",
        maxHeight: (isOpen || isForm) && "100dvh",
        overflow: (isOpen)&&"hidden",
      }}
    >
      {isMobile <= 675 && isOpen && (
        <div
          style={{
            minHeight: "100dvh",
            position: "absolute",
            top: "0",
            width: "100%",
            backgroundColor: "#DADCE0",
          }}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
      {isMobile <= 675 ? (
        isOpen && (
          <SideBar
            handleOpen={handleOpen}
            isOpen={isOpen}
            isMobile={isMobile}
          ></SideBar>
        )
      ) : (
        <SideBar></SideBar>
      )}
      <Main
        handleOpen={handleOpen}
        assesData={assesData}
        setIsForm={setIsForm}
        isMobile={isMobile}
      />
      {isForm && (
        <div
          style={{
            minHeight: "100dvh",
            position: "absolute",
            top: "0",
            width: "100%",
          }}
          onClick={() => {
            setIsForm(false);
          }}
        ></div>
      )}
      {isForm && (
        <>
          <div
            style={{
              minHeight: "100dvh",
              position: "absolute",
              top: "0",
              width: "100%",
              backgroundColor: "#DADCE0",
              opacity: "0.6",
            }}
            onClick={() => {
              setIsForm(false);
            }}
          ></div>
          <div className="inputform-box">
            <div className="flex-between inputform-heading" style={{position:"",zIndex:"10"}} >
              <h1>
                {isMobile <= 675
                  ? "Sub-Section Details"
                  : "Create new assessment"}
              </h1>
              <button
                className={isMobile <= 675 ? "form-close-btn" : "btn"}
                onClick={() => {
                  setIsForm(false);
                }}
              >
                <img src={close} alt="close" />
              </button>
            </div>
            <FormData
              setAssesData={setAssesData}
              assesData={assesData}
              setIsForm={setIsForm}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

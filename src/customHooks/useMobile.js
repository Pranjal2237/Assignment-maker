import { useState,useEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState({width:window.innerWidth});
  console.log("mobile",isMobile.width);
  useEffect(()=>{
    const handleResize=() => {
      setIsMobile({width:window.innerWidth});
    }
    window.addEventListener("resize",handleResize);
    return ()=>{ window.removeEventListener('resize',handleResize);}
  },[]);
  return isMobile.width;
};

export default useMobile;

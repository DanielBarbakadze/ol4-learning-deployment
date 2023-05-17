import React, { useEffect, useRef, useState } from "react";
import "./LearningRefs.scss";

const PopUp = ({ handleClose }) => {
  const popupRefWrapper = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current && popupRefWrapper.current) {
        if (
          popupRefWrapper.current.contains(e.target) &&
          !popupRef.current.contains(e.target)
        ) {
          handleClose();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="popup_wrapper" ref={popupRefWrapper}>
      <div className="popup" ref={popupRef}>
        <h1>PopUp</h1>

        <p>bla bla bladaskojfmqde lefm as </p>

        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

const LearningRefs = () => {
  const myRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (myRef) {
      myRef.current.style = "color: red;";
    }
  }, [myRef]);

  return (
    <div>
      {isOpen && <PopUp handleClose={() => setIsOpen(false)} />}

      <h1 ref={myRef}>LearningRefs</h1>

      <p>bla bla bla </p>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open popup
      </button>
    </div>
  );
};

export default LearningRefs;

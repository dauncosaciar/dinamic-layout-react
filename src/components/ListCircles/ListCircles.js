import React, { useState, useEffect } from "react";

import "./ListCircles.scss";

export default function ListCircles() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [classColumns, setClassColumns] = useState("");

  useEffect(() => {
    const handleWindowResize = () => {
      setViewportWidth(window.innerWidth);
    };
    // setClassToList(viewportWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportWidth]);

  // const setClassToList = (viewportWidth) => {
  //   // if (viewportWidth >= 768 && viewportWidth < 992) {
  //   //   if (document.getElementsByClassName("item").length === 3) {
  //   //     setClassColumns("equal-cols-tablet");
  //   //   } else if (document.getElementsByClassName("item").length > 3) {
  //   //     if (document.getElementsByClassName("item").length === 3 + 1) {
  //   //       setClassColumns("not-equal-cols-tablet one-down-element");
  //   //     } else {
  //   //       setClassColumns("not-equal-cols-tablet");
  //   //     }
  //   //   }
  //   // }

  //   if (viewportWidth >= 768 && viewportWidth < 992) {
  //     if (document.getElementsByClassName("item").length % 3 === 0) {
  //       setClassColumns("three-cols-tablet");
  //     } else {
  //       if (document.getElementsByClassName("item").length % 3 === 1) {
  //         setClassColumns("not-three-cols-tablet");
  //       } else if (document.getElementsByClassName("item").length % 3 === 2) {
  //         setClassColumns("three-cols-tablet");
  //       }
  //     }
  //   }
  // };

  return (
    <div className={`list-circles ${classColumns}`}>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
      <div className="item">7</div>
    </div>
  );
}

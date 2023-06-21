import React, { useEffect } from "react";

export const Frame = ({ frameRef, getFrameSize, children }) => {
  // Update 'width' and 'height' when the window resizes
  // useEffect(() => {
  //   window.addEventListener("resize", getFrameSize);
  //
  //   return () => {
  //     window.removeEventListener("resize");
  //   };
  // }, []);

  return (
    <div
      id={"frame"}
      ref={frameRef}
      display={"flex"}
      style={{
        height: "calc(100% - 20px)",
        border: "1px solid black",
        margin: 20,
        overflow: "scroll",
      }}
    >
      {children}
    </div>
  );
};

import React from "react";

function Container({ children, direction = "row", justify = "start" }) {
  const containerStyle = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: "center",
  };

  return (
    <div className='center pa1 flex w-100 w-60-ns' style={containerStyle}>
      {children}
    </div>
  );
}

export default Container;

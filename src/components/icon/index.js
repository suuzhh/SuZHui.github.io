import React from "react";
import style from "./icon.module.scss";

function Icon({ name = "", size = 22, color = "" }) {
  const iconStyle = {
    fontSize: size,
    color,
  };

  return <i className={name} style={iconStyle}></i>;
}

export default Icon;

export const ICON_SEARCH = `${style.icon} ${style.search}`;

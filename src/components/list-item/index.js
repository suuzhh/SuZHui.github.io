import React from "react";
import { Link } from "gatsby";

const ListItem = ({ title = "", date = "", path = "", excerpt = "" }) => {
  return (
    <Link
      className='db link silver w-100 mb2 pv2 bb b--black-20'
      to={path}
    >
      <div className='flex-ns justify-between items-center mb2'>
        <h4 className='orange f5'>{title}</h4>
        <span className='f7'>{date}</span>
      </div>
      <p className='f7'>{excerpt}</p>
    </Link>
  );
};

export default ListItem;

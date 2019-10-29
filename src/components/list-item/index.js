import React from "react";
import { Link } from "gatsby";

const ListItem = ({ title = "", date = "", path = "", excerpt = "" }) => {
  return (
    <Link className='db link silver w-100 pt2 pb2 bb b--black-20' to={path}>
      <div className='flex-ns justify-between items-center mb1'>
        <h4 className='mid-gray f7'>{title}</h4>
        <span className='f8'>{date}</span>
      </div>
      <p className='f8'>{excerpt}</p>
    </Link>
  );
};

export default ListItem;

import React from "react";

export const Card = ({ children, bg }) => {
  return <div className={` ${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

import React from "react";
import { useLocation } from "react-router";

const PageNotFound = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <h1>Path: {pathname} not found</h1>
    </div>
  );
};

export default PageNotFound;

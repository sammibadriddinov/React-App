import React from "react";
import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>SAMAR</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
  );
};
export default AppHeader;

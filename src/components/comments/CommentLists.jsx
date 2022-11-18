import React from "react";

const CommentLists = (props) => {
  return (
    <>
      <li className="todolist_style">
        <span id="text">{props.text}</span>
      </li>
    </>
  );
};

export default CommentLists;

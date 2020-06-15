import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post_area}>
      <div className={s.avatar}>
        <img src="https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg" />
        <p>{props.name}</p>
      </div>
      <div className={s.post_text}>
        {props.message}
        <div>
          <button className="likeButton">Like {props.like}</button>
        </div>
      </div>
    </div>
  );
};

export default Post;

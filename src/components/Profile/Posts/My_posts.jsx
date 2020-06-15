import React from "react";
import s from "./My_posts.module.css";
import Post from "./../Posts/My_posts/Post";
import PostAreaContainer from "./My_posts/PostArea/PostAreaContainer";
import store from "../../../Redux/redux-store";

const My_posts = (props) => {
  let postsElements = props.state.profilePage.postsData.map((el) => {
    return <Post name={el.name} message={el.message} like={el.like} />;
  });
  return (
    <div className={s.posts}>
      My Post
      <div>
        <p>New Post</p>
        {postsElements}
      </div>
      <PostAreaContainer dispatch={props.store.dispatch} />
    </div>
  );
};

export default My_posts;

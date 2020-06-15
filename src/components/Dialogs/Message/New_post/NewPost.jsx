import React from "react";
import s from "./NewPost.module.css";
import News from "../../../News/News";
import {
  addNewPostActionCreater,
  changePostActionCreater,
} from "../../../../Redux/dialogsReducer";

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    newPostElement.current.value = "";
  };

  let onChangePost = () => {
    let new_post = newPostElement.current.value;
    props.changePost(new_post);
  };

  return (
    <div>
      <textarea
        className={s.post_area}
        ref={newPostElement}
        onChange={onChangePost}
      />
      <div>
        <button className={s.post_button} onClick={onAddPost}>
          Add new post
        </button>
      </div>
    </div>
  );
};

export default NewPost;

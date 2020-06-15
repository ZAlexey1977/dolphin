import React from "react";
import {
  addNewPostActionCreater,
  changePostActionCreater,
} from "../../../../Redux/dialogsReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addNewPostActionCreater());
  };

  let onChangePost = (new_post) => {
    props.store.dispatch(changePostActionCreater(new_post));
  };

  return <NewPost addPost={addPost} changePost={onChangePost} />;
};

export default NewPostContainer;

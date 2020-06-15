import React from "react";
import {
  sendNewMessageTextCreater,
  changeNewMessageTextCreater,
} from "../../../../../Redux/profileReducer";
import PostArea from "./PostArea";

const PostAreaContainer = (props) => {
  let changeNewMessageText = (text) => {
    props.dispatch(changeNewMessageTextCreater(text));
  };

  let sendNewMessageText = () => {
    props.dispatch(sendNewMessageTextCreater());
  };
  return (
    <PostArea
      store={props.store}
      changeNewMessage={changeNewMessageText}
      sendNewMessage={sendNewMessageText}
    />
  );
};

export default PostAreaContainer;

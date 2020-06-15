import React from "react";
import s from "./PostArea.module.css";

const PostArea = (props) => {
  //let state = props.store.getState();
  let newMessageElement = React.createRef();

  let onChangeNewMessageText = (event) => {
    let text = event.target.value;
    props.changeNewMessage(text);
  };

  let onSendNewMessageText = () => {
    props.sendNewMessage();
    newMessageElement.current.value = "";
  };

  return (
    <div>
      <div>
        <textarea
          className={s.post_area}
          onChange={onChangeNewMessageText}
          ref={newMessageElement}
        ></textarea>
      </div>
      <div>
        <button className={s.post_button} onClick={onSendNewMessageText}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default PostArea;

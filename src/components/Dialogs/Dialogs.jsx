import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { NavLink } from "react-router-dom";
import NewPostContainer from "./Message/New_post/NewPostContainer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsPage.dialogsData.map((el) => {
    return <Dialog name={el.name} id={el.id} image={el.image} />;
  });

  let messagesElements = props.state.dialogsPage.messagesData.map((el) => {
    return <Message message={el.message} store={props.store} />;
  });

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <NewPostContainer store={props.store} />
    </div>
  );
};

export default Dialogs;

// newPost={props.newPost} dispatch={props.dispatch}

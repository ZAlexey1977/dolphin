import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
  let friendsName = props.state.dialogsPage.dialogsData.map((el) => {
    return (
      <div className={s.myFriends}>
        <div className={s.friedItem}>
          <div className={s.circle}></div>
          {el.name}
        </div>
      </div>
    );
  });

  return (
    <div className={s.mainBlock}>
      <div>Friends</div>
      {friendsName}
    </div>
  );
};

export default Friends;

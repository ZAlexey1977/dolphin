const sendNewMessageText = 'SEND-NEW-MESSAGE-TEXT';
const changeNewMessageText = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
  postsData: [
    { name: "Olha", message: "Hi, how are you?", like: "24" },
    { name: "Daria", message: "I fine thanks, and you?", like: "15" }
  ],
  newMessageText: ""

};

const profileReducer = (state = initialState, action) => {
  if (action.type === sendNewMessageText) {
    let newMessage = { name: "Alionka", message: state.newMessageText, like: 32 };
    state.postsData.push(newMessage);
    state.newMessageText = "";
  }
  else if (action.type === changeNewMessageText) {
    state.newMessageText = action.newMessage;
  }
  return state;
}

export const sendNewMessageTextCreater = () => {
  return { type: sendNewMessageText };
};

export const changeNewMessageTextCreater = (text) => {
  return { type: changeNewMessageText, newMessage: text };
};


export default profileReducer;
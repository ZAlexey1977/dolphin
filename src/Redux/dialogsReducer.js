const addPost = 'ADD-POST';
const updatePost = 'UPDATE-POST';

let initialState = {


  dialogsData: [
    { id: 1, name: "Alexey" },
    { id: 2, name: "Olha" },
    { id: 3, name: "Daria" },
    { id: 4, name: "Alionka" },
    { id: 5, name: "Nastya" }
  ],

  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Ok" },
    { id: 4, message: "I am fine" },
    { id: 5, message: "I want many toys" }
  ],

  newTextPost: ""

};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === addPost) {
    let post = { id: 6, message: state.newTextPost };
    state.messagesData.push(post);
    state.newTextPost = "";
  }
  else if (action.type === updatePost) {
    state.newTextPost = action.newText;
  }
  return state;
}

export const addNewPostActionCreater = () => {
  return { type: addPost };
};

export const changePostActionCreater = (new_post) => {
  return { type: updatePost, newText: new_post };
};

export default dialogsReducer;

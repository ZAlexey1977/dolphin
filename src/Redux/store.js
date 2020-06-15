// import profileReducer from './profileReducer';
// import dialogsReducer from './dialogsReducer';
// import navbarReducer from './navbarReducer';

// let store = {

//   _state: {

//     profilePage: {

//       postsData: [
//         { name: "Olha", message: "Hi, how are you?", like: "24" },
//         { name: "Daria", message: "I fine thanks, and you?", like: "15" }
//       ],

//       newMessageText: ""
//     },

//     dialogsPage: {

//       dialogsData: [
//         { id: 1, name: "Alexey" },
//         { id: 2, name: "Olha" },
//         { id: 3, name: "Daria" },
//         { id: 4, name: "Alionka" },
//         { id: 5, name: "Nastya" }
//       ],

//       messagesData: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "How are you?" },
//         { id: 3, message: "Ok" },
//         { id: 4, message: "I am fine" },
//         { id: 5, message: "I want many toys" }
//       ],

//       newTextPost: ""
//     },

//     navbarPage: {

//       siteBarItem: [
//         { item: "Profile", path: "profile" },
//         { item: "Messagese", path: "message" },
//         { item: "News", path: "news" },
//         { item: "Music", path: "music" },
//         { item: "Settings", path: "setting" }
//       ]
//     }

//   },
//   _rerender() { // метод для перерисовки страницы во избежание циклической зависимости принимает параметр observer
//     //console.log('www');
//   },
//   getState() { // метод для обращения к приватному  массиву данных
//     return this._state;
//   },
//   subscribe(observer) { // метод с параметрами (updateSite с файла App.js) для вызова метода перерисовки страницы 
//     this._rerender = observer;
//   },

//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

//     this._rerender(this._state);

//   }
// }

// window.store = store;
// export default store;
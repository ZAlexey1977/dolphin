

let initialState = {

  siteBarItem: [
    { item: "Profile", path: "profile" },
    { item: "Messagese", path: "message" },
    { item: "News", path: "news" },
    { item: "Music", path: "music" },
    { item: "Settings", path: "setting" }
  ]

};

const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer;
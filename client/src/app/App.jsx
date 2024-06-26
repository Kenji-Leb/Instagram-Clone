import "../common/styles/index.css";
import "../common/styles/utilities.css";
import "../common/styles/colors.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";
import userSlice from "../features/users/userSlice";
import postsSlice from "../features/posts/postsSlice";
import Login from "../pages/Login";
import ProfileInfo from "../pages/ProfilePage/components/ProfileInfo";
import EditProfile from "../pages/ProfilePage/components/EditProfile";
import Home from "../pages/Home";

const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/ProfilePage"
            element={<ProfilePage children={<ProfileInfo />} />}
          />
          <Route
            path="/ProfilePage/EditProfile"
            element={<ProfilePage children={<EditProfile />} />}
          />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

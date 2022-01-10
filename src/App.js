import React from "react";
// import { Routes, Route } from "react-router-dom";
import { authOperations, authSelectors } from "./redux/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import HelloPage from "./views/HelloPage/HelloPage";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isLogin);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && <>{!isLogin ? <RegisterView /> : <HelloPage />}</>
  );
}

export default App;

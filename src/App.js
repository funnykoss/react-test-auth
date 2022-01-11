import React from "react";
import { authOperations, authSelectors } from "./redux/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

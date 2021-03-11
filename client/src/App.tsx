import React from "react";
import { useDispatch } from 'react-redux'
import { loadUser } from "./Actions/authActions";
import Router from './Router/index'

function App() {
  const dispatch = useDispatch();
  dispatch(loadUser())

  return (
      <Router />
  );
}

export default App;
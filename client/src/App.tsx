import React from "react";
import { useDispatch } from 'react-redux'
import { loadUser } from "./Actions/authActions";
import Router from './Router/index'
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL

function App() {
  const dispatch = useDispatch();
  dispatch(loadUser())

  return (
      <Router />
  );
}

export default App;
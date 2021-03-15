import React from "react";
import { useDispatch } from 'react-redux'
import { loadUser } from "./module/actions/authActions";
import Router from './router/index'
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
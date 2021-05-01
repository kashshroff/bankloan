import React from "react";
import { useDispatch } from 'react-redux'
import { loadUser } from "./module/actions/authActions";
import Router from './router/index'
import axios from 'axios';

// Ionic
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL

function App() {
  const dispatch = useDispatch();
  dispatch(loadUser())

  return (
      <Router />
  );
}

export default App;
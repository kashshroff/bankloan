import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from '../component/header'
import { useSelector } from 'react-redux'
import { User } from "../constant/Interfaces";

function Home() {

  let user: User = useSelector((state: any) => state.auth.user)

  return (
    <IonPage>
      <Header title="Bankloan Homepage" />
      <IonContent>
        Hello {user ? user.name : ''}
      </IonContent>
    </IonPage>
  );
}

export default Home;

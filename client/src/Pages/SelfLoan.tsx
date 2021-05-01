import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from '../component/header'
import { useSelector } from 'react-redux'
import { User } from "../constant/Interfaces";

export default function SelfLoan() {
    return (
        <IonPage>
            <Header title="SelfLoan" />
            <IonContent>
                Self
            </IonContent>
        </IonPage>
    )
}

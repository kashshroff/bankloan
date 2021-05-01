import React from 'react'
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";
import { personCircleOutline, search } from 'ionicons/icons'

export default function Header({ title }) {

    const history = useHistory();
    console.log(history.location.pathname)

    return (
        <IonHeader className="ion-no-border">
            <IonToolbar>
                {history.location.pathname !== '/' &&
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                }
                <IonButtons slot="secondary">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircleOutline} />
                    </IonButton>
                    <IonButton>
                        <IonIcon slot="icon-only" icon={search} />
                    </IonButton>
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

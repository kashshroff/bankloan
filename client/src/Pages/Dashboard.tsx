import { IonContent, IonItem, IonList, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../component/header'
import { useSelector } from 'react-redux'
import { User } from "../constant/Interfaces";
import { Footer } from '../component/footer';
import { Link } from 'react-router-dom';
import { SELFLOAN, REFER } from '../routes'

export default function Dashboard() {

    // let user: User = useSelector((state: any) => state.auth.user)

    return (
        <IonPage>
            <Header title="Bankloan Dashboard" />
            <IonContent>
                <IonList>
                    <IonItem>
                        <Link to={SELFLOAN}>Self Loan</Link>
                    </IonItem>
                    <IonItem>
                        <Link to={REFER}>Refer a friend</Link>
                    </IonItem>
                </IonList>
            </IonContent>
            <Footer />
        </IonPage>
    )
}

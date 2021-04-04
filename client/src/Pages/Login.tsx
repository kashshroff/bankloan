import { IonContent, IonPage } from '@ionic/react'
import React, { FormEvent, useState } from 'react'
import Header from '../component/header'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router";
import { Loading } from '../component/loading';
import { TextInput } from '../component/input';
import { SubmitButton } from '../component/button';
import { loginUser } from '../module/actions/authActions';
import { DASHBOARD } from '../routes';

export default function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    let isLoading: boolean = useSelector((state: any) => state.auth.isLoading)
    let isAuthenticated: boolean = useSelector((state: any) => state.auth.isAuthenticated)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(loginUser({email, password}))
        
    }

    if(isAuthenticated){
        history.replace({
            pathname: DASHBOARD
        })
    }


    if(isLoading){
        return <Loading />
    }

    return (
        <IonPage>
            <Header title="Bankloan login" />
            <IonContent>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextInput label="Email" text={email} ionChange={(value: string) => setEmail(value)} required type="email" />
                    <TextInput label="Password" text={password} ionChange={(value: string) => setPassword(value)} required type="password" />
                    <SubmitButton label="Submit" type="submit" />
                </form>
            </IonContent>
        </IonPage>
    )
}

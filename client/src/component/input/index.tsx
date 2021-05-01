import { IonInput, IonItem, IonLabel } from "@ionic/react"

interface InputText { 
    label: string 
    text: string | undefined
    ionChange: Function
    type?: any
    required?: boolean
    inputMode?: any
}

export const TextInput = (props: InputText) => {
    let { label, text, ionChange, type, required, inputMode } = props
    return (
        <IonItem>
            <IonLabel position="floating">{label}</IonLabel>
            <IonInput 
                value={text} 
                onIonChange={e => ionChange(e.detail.value)}
                type={type ? type : "text"}
                required={required ? required : false}
                inputmode={inputMode ? inputMode : 'text'}
            ></IonInput>
        </IonItem>
    )
}
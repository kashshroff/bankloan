import { IonButton } from "@ionic/react"

interface ButtonProps {
    label: string
    onClick?: Function
    type?: any
}

export const SubmitButton = (props: ButtonProps) => {
    let { label, onClick, type } = props
    return (
        <IonButton 
            color="primary"
            onClick={() => onClick ? onClick() : null}
            type={type ? type : "button"}
        >{label}</IonButton>
    )
}
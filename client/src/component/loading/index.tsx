import React from 'react';
import { IonLoading, IonContent } from '@ionic/react';

export const Loading: React.FC = () => {

  return (
    <IonContent>
      <IonLoading
        isOpen={true}
        message={'Please wait...'}
      />
    </IonContent>
  );
};
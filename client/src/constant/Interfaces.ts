declare global {
    interface Window {
        REDUX_INITIAL_DATA: any
        devToolsExtension: any
        location: Location
    }
}

export interface payload {
    id: string
}

export interface User {
    id: number
    name: string
    email: string
    phone: string
    status: boolean
}

// export interface ActionObject {
//     type: string
//     payload: payload
// }

// export interface ActionWithPayload {
//     type: string
//     payload: any
// }

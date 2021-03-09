import { USERS } from '../Tables'
import {escape} from 'mysql' 

export const registerUser = (name: string, email: string, password: string, phone: string) => {
    return `
        INSERT INTO ${USERS} (name, email, password, phone) VALUES (${escape(name)}, ${escape(email)}, ${escape(password)}, ${escape(phone)})
    `;
}

export const getActiveUserByEmail = (email: string) => {
    return `
        SELECT * FROM ${USERS} WHERE email = ${escape(email)} and status = 1
    `;
}

export const getActiveUserById = (id: any) => {
    return `
        SELECT * FROM ${USERS} WHERE id = ${escape(id)} and status = 1
    `;
}
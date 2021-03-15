import jwt from 'jsonwebtoken'

export const createToken = (id: any) => {
    let jwt_secret: string | undefined = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'asdasd'
    let token = jwt.sign({ id: id }, jwt_secret);
    return token
}

export const verifyToken = (token: string) => {
    let jwt_secret: string | undefined = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'asdasd'
    try{
        let data = jwt.verify(token, jwt_secret);
        return {
            error: false,
            data
        }
    } catch (err){
        return {
            error: true,
            data: err
        }
    }
}
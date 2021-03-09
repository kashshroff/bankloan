import { verifyToken } from '../utils/jwt'
import { getActiveUserById } from '../Database/User'
import Database from '../Database/Database'
let db = new Database()


export const auth = async(req: any, res: any, next: Function) => {
    const token = req.header('x-auth-token')
    console.log("REQ HEADER", token)
    if(!token){
        res.status(401).send({
            error: true,
            message: "Not Authorized"
        })
        return
    }

    let verification = verifyToken(token)
    if(verification.error){
        res.status(404).send({
            error: true,
            message: "Invalid Token"
        })
        return
    }

    let user_id = verification.data.id

    // DB Call to verify user
    try {
        let result: any = await db.execute(getActiveUserById(user_id))
        if(result.rowCount){
            req.user = result.rows[0]
            delete req.user.password
            next()
        }else {
            res.status(404).send({
                error: true,
                message: "Invalid User"
            })
            return
        }
    } catch (err) {
        res.status(404).send({
            error: true,
            message: "Invalid User. Server Error"
        })
        return
    }

}
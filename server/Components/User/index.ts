import Database from '../../Database/Database'
import { registerUser, getActiveUserByEmail } from '../../Database/User'
import { createHash, verifyHash } from '../../utils/passwordHash'
import { createToken } from '../../utils/jwt'

let db = new Database()

export const login = async(req: any, res: any) => {
    let {email, password} = req.body

    try{
        let result: any = await db.execute(getActiveUserByEmail(email))
        console.log(result)
        if(result.rowCount){

            let hash_password = result.rows[0].password
            let password_check = verifyHash(password, hash_password)
            console.log("password_check", password_check)
            if(password_check){

                let token = createToken(result.rows[0].id)

                res.send({
                    error: false,
                    data: result.rows[0],
                    token,
                    message: "User fetched successfully"
                })
            }else {
                res.status(400).send({
                    error: true,
                    message: "Incorrect password"
                })
            }


        }else {
            res.status(404).send({
                error: true,
                message: "No user found"
            })
        }
    }catch(err){
        res.status(500).send({
            error: true,
            message: "Internal Server Error"
        })
    }
}


export const createUser = async(req:any, res:any) => {
    let {name, password, email, phone } = req.body

    let temp_pass: string = await createHash(password)
    if(temp_pass)
        password = temp_pass
    else
        res.status(400).send({
            error: true,
            message: "Password cannot be hashed"
        })

    // Directly store in db
    try{

        let result: any = await db.execute(registerUser(name, email, password, phone))
        console.log(result)
        if(result.rowCount){
            // Create a token for that user and send
            let token = createToken(result.rows.insertId)
            res.send({
                error: false,
                insert_id: result.rows.insertId,
                token,
                message: "User added successfully"
            })
        }else {
            res.status(400).send({
                error: true,
                message: "Duplicate Entry"
            })
        }

    }catch(err){
        res.status(400).send({
            error: true,
            message: err
        })
    }


}

export const verifyUser = async(req: any, res: any) => {
    res.send({
        error: false,
        data: req.user
    })
}
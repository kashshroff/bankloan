import bcrypt from 'bcryptjs'

export const createHash = async (password: string) => {
    let salt = await bcrypt.genSalt(10)
    let hash = bcrypt.hashSync(password, salt);
    return hash
}

export const verifyHash = (password: string, hash: string) => {
    let check = bcrypt.compareSync(password, hash);
    return check
}
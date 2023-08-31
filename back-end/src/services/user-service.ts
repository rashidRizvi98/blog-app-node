import { User } from "../database/models/user";
import { IUser } from "../models/user";
import bCrypt from 'bcryptjs'

const registerUser = async (payload: IUser)=> {
   return User.findOrCreate({
        where: { email: payload.email },
        defaults: {
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            password: bCrypt.hashSync(payload.password, 8)
        }
    });
}

const findUser = async (email: string)=> {
    return User.findOne({
         where: { email }       
     });
 }


export default { registerUser,
                 findUser
                }
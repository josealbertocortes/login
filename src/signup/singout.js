import { Auth } from 'aws-amplify';
export const  signOut = async ()=> {
    try {
       const a =  await Auth.signOut();
       console.log(a)
        return true
    } catch (error) {
       return false
    }
}
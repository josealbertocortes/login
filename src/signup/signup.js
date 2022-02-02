import { Auth } from 'aws-amplify';

export async function signIn(username,password) {
    try {
        const user = await Auth.signIn(username, password);
        return user 
    } catch (error) {
       return false
    }
}
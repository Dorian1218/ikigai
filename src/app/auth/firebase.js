import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default async function createUser(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
            console.log(e.code)
    }
}

// export default function googleAccount() {

// }
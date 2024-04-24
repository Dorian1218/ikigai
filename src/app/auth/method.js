import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/app/firebase/config";

export const addUser = async (name, email) => {
    await setDoc(doc(db, "user", "LA"), {
        name: name,
        email: email,
      });
}
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from "@/app/firebase/config";

export const addUser = async (name, email, id) => {
    await setDoc(doc(db, "user", id), {
        name: name,
        email: email,
      });
}

export const showUser = (data) => {
  return data
}

export const getUser = async (id) => {
  const docRef = doc(db, "user", id)
  const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      showUser(docSnap.data())
    }
}
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db, imageDB } from "@/app/firebase/config";
import { v4 } from "uuid";
import { ref, uploadBytes } from "firebase/storage";

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
  await getDoc(docRef).then((doc) => {
    showUser(doc.data())
  })
}

export const uploadArticle = async (title, image, body, email) => {
  const id = v4()
  await setDoc(doc(db, "articles", id), {
    title: title,
    image: image,
    body: body,
    uploader: email
  }).then(() => {
    const imageRef = ref(imageDB, `image/${id}`)
    uploadBytes(imageRef, image)
  })
}
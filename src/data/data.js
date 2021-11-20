import { db, storage } from "../firebase";
import {
  doc,
  addDoc,
  orderBy,
  query,
  deleteDoc,
  collection,
  getDocs
} from "firebase/firestore/lite";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const questionCOllectionRef = collection(db, "questions");
const newsCOllectionRef = collection(db, "news");

export const fetchQuestions = async () => {
  let questions = [];
  try {
    const data = await getDocs(questionCOllectionRef);
    data.forEach((doc) => {
      questions.push({
        id: doc.id,
        level: doc.data().level,
        question: doc.data().question,
        option1: doc.data().option1,
        option2: doc.data().option2,
        image: doc.data().image,
        option3: doc.data().option3,
        option4: doc.data().option4,
        answer: doc.data().answer
      });
    });

    return questions;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addQuestion = async (news) => {
  let { question, option1, option2, option3, option4, answer, level, image } =
    news;
  let imageUrl = null;
  if (image && image !== null) {
    imageUrl = await uploadImage(image);
  }

  try {
    const newDoc = {
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      level,
      image: imageUrl
    };

    await addDoc(questionCOllectionRef, newDoc);
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const uploadImage = async (image) => {
  let downloadURL = null;
  if (image) {
    const storageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progr = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progr + "% done");
      },
      (err) => {
        console.log(err);
        return null;
      }
    );

    try {
      await uploadTask;

      downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      return downloadURL;
    } catch (e) {
      console.log(e);
      return null;
    }
  } else {
    return null;
  }
};

export const deleteItem = async (id) => {
  try {
    await deleteDoc(doc(questionCOllectionRef, id));
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// add news
export const addNews = async (news) => {
  let { title, description, image, type } = news;
  let imageUrl = null;
  if (image && image !== null) {
    imageUrl = await uploadImage(image);
  }

  try {
    const newDoc = {
      title,
      description,
      type,
      image: imageUrl,
      createdAt: new Date().toISOString()
    };

    await addDoc(newsCOllectionRef, newDoc);
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};
//  get News
export const fetchNews = async () => {
  let news = [];
  try {
    const q = query(newsCOllectionRef, orderBy("createdAt", "desc"));
    const data = await getDocs(q);
    data.forEach((doc) => {
      news.push({
        id: doc.id,
        description: doc.data().description,
        title: doc.data().title,
        image: doc.data().image,
        type: doc.data().type,
        createdAt: new Date().toISOString()
      });
    });

    console.log(news);

    return news;
  } catch (error) {
    console.log(error);
    return [];
  }
};
// delete news
export const deleteNew = async (id) => {
  try {
    await deleteDoc(doc(newsCOllectionRef, id));
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

const adminMails = [
  { email: "sreekanth.duggineni10@gmail.com" },
  { email: "srikanth22sd@gmail.com" },
  { email: "cricket1adm@gmail.com" },
  { email: "crickets@gmail.com" }
];

export const isAdmin = (email) => {
  for (const admin of adminMails) {
    if (admin.email === email) return true;
  }
  return false;
};

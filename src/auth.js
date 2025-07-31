import {
  auth,
  db,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  signInWithEmailAndPassword
} from "./firebase.js";

export async function signupUser(name, email, password) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", userCred.user.uid), {
    profile: { name, email }
  });
}

export async function loginUser(email, password) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user.uid;
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});

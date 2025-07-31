import { db, collection, addDoc, getDocs } from "./firebase.js";

export async function addExpense(userId, expense) {
  await addDoc(collection(db, "users", userId, "expenses"), expense);
}

export async function getExpenses(userId) {
  const snapshot = await getDocs(collection(db, "users", userId, "expenses"));
  return snapshot.docs.map((doc) => doc.data());
}

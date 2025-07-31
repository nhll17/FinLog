import { db, doc, setDoc, collection, getDocs } from "./firebase.js";

export async function setBudget(userId, category, amount) {
  await setDoc(doc(db, "users", userId, "budgets", category), { amount });
}

export async function getBudgets(userId) {
  const snapshot = await getDocs(collection(db, "users", userId, "budgets"));
  return snapshot.docs.map((doc) => ({ category: doc.id, ...doc.data() }));
}

// Import Firebase modules (Modular SDK)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzv6OiVIoE-088je9pSFKjUwlSQaWp3hQ",
  authDomain: "massanger-a2479.firebaseapp.com",
  projectId: "massanger-a2479",
  storageBucket: "massanger-a2479.appspot.com",
  messagingSenderId: "140554568529",
  appId: "1:140554568529:web:f11de10d3e905e7cf30970",
  measurementId: "G-NMFKL8ZMV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Save text to Firebase
function saveText() {
    const text = document.getElementById("inputText").value;
    set(ref(db, "storedText"), text)
        .then(() => {
            console.log("Text saved successfully!");
        })
        .catch((error) => {
            console.error("Error saving text: ", error);
        });
}

// Retrieve text from Firebase
const storedTextRef = ref(db, "storedText");
onValue(storedTextRef, (snapshot) => {
    const text = snapshot.val();
    document.getElementById("output").innerText = text || "No text stored yet.";
});
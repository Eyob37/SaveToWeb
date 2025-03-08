// Your Firebase configuration (replace with your own)
const firebaseConfig = {
  apiKey: "AIzaSyCzv6OiVIoE-088je9pSFKjUwlSQaWp3hQ",
  authDomain: "massanger-a2479.firebaseapp.com",
  projectId: "massanger-a2479",
  storageBucket: "massanger-a2479.firebasestorage.app",
  messagingSenderId: "140554568529",
  appId: "1:140554568529:web:f11de10d3e905e7cf30970",
  measurementId: "G-NMFKL8ZMV5"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Save text to Firebase
function saveText() {
    const text = document.getElementById("inputText").value;
    db.ref("storedText").set(text)
        .then(() => {
            console.log("Text saved successfully!");
        })
        .catch((error) => {
            console.error("Error saving text: ", error);
        });
}

// Retrieve text from Firebase
db.ref("storedText").on("value", (snapshot) => {
    const text = snapshot.val();
    document.getElementById("output").innerText = text || "No text stored yet.";
});
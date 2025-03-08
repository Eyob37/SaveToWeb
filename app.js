// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzv6OiVIoE-088je9pSFKjUwlSQaWp3hQ",
  authDomain: "massanger-a2479.firebaseapp.com",
  databaseURL: "https://massanger-a2479-default-rtdb.firebaseio.com",  // ✅ Add this
  projectId: "massanger-a2479",
  storageBucket: "massanger-a2479.appspot.com",
  messagingSenderId: "140554568529",
  appId: "1:140554568529:web:f11de10d3e905e7cf30970",
  measurementId: "G-NMFKL8ZMV5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Save text to Firebase
function saveText() {
    const text = document.getElementById("inputText").value;
    firebase.database().ref("storedText").set(text)
        .then(() => {
            console.log("Text saved successfully!");
        })
        .catch((error) => {
            console.error("Error saving text: ", error);
        });
}

// Retrieve text from Firebase
firebase.database().ref("storedText").on("value", (snapshot) => {
    const text = snapshot.val();
    document.getElementById("output").innerText = text || "No text stored yet.";
});
// Your Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
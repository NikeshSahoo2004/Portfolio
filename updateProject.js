// Script to update the first project in Firebase with Allen Solly's Sales Dashboard data
// Run this script in the browser console or as a Node.js script

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANCCNyKetukDK9u_E0eYeSJKXxRARwhUo",
  authDomain: "myportfolio-f0f8d.firebaseapp.com",
  projectId: "myportfolio-f0f8d",
  storageBucket: "myportfolio-f0f8d.firebasestorage.app",
  messagingSenderId: "653888532666",
  appId: "1:653888532666:web:0a3b490d35181f4732d283",
  measurementId: "G-MZCJR5B7H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Updated project data
const updatedProjectData = {
  Title: "Allen Solly's Sales Dashboard",
  Description: "Analyse Allen Solly's 2022 sales performance through an interactive Excel dashboard. Developed an interactive Excel dashboard visualising annual sales trends, top-performing categories, and regional performance.",
  Link: "https://www.linkedin.com/posts/nikeshsahoo_fashionforward-allensollysales-activity-7185311843907710976-WhE7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD25XDAByNVwemyca2VFy3ZX9siE_wMw2Co",
  Github: "https://www.linkedin.com/posts/nikeshsahoo_fashionforward-allensollysales-activity-7185311843907710976-WhE7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD25XDAByNVwemyca2VFy3ZX9siE_wMw2Co",
  TechStack: ["Microsoft Excel", "PivotTables", "Charts", "Dashboards"],
  Features: [
    "Interactive Excel dashboard for sales analysis",
    "Annual sales trends visualization",
    "Top-performing categories analysis",
    "Regional performance insights",
    "PivotTables for data manipulation",
    "Charts and graphs for data visualization"
  ]
};

// Function to update the first project
async function updateFirstProject() {
  try {
    console.log("Starting project update...");

    const projectCollection = collection(db, "projects");
    const projectSnapshot = await getDocs(projectCollection);

    if (!projectSnapshot.empty) {
      const firstProjectDoc = projectSnapshot.docs[0];
      const projectRef = doc(db, "projects", firstProjectDoc.id);

      console.log("Updating project with ID:", firstProjectDoc.id);
      console.log("Current project title:", firstProjectDoc.data().Title);

      await updateDoc(projectRef, updatedProjectData);

      console.log("✅ Project updated successfully!");
      console.log("New project title:", updatedProjectData.Title);
      return true;
    } else {
      console.log("❌ No projects found in Firebase");
      return false;
    }
  } catch (error) {
    console.error("❌ Error updating project:", error);
    return false;
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.updateFirstProject = updateFirstProject;
  window.updatedProjectData = updatedProjectData;
  console.log("Update functions available. Run updateFirstProject() to update the project.");
}

// Run the update if this script is executed directly
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  updateFirstProject();
} 
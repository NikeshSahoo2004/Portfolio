# Project Update: Allen Solly's Sales Dashboard

## Overview
This update replaces the first project "Aritmatika Solver" with "Allen Solly's Sales Dashboard" in your portfolio.

## Changes Made

### 1. Updated Project Information
- **Title**: "Allen Solly's Sales Dashboard"
- **Description**: "Analyse Allen Solly's 2022 sales performance through an interactive Excel dashboard. Developed an interactive Excel dashboard visualising annual sales trends, top-performing categories, and regional performance."
- **Tech Stack**: Microsoft Excel (PivotTables, Charts, Dashboards)
- **Project Link**: LinkedIn post with project details
- **Github URL**: Same as project link (LinkedIn post)

### 2. Key Features Added
- Interactive Excel dashboard for sales analysis
- Annual sales trends visualization
- Top-performing categories analysis
- Regional performance insights
- PivotTables for data manipulation
- Charts and graphs for data visualization

## Files Created/Modified

### New Files:
1. `src/data/projects.js` - Local project data
2. `src/utils/projectUpdater.js` - Utility functions for updating projects
3. `updateProject.js` - Standalone script to update Firebase
4. `PROJECT_UPDATE_README.md` - This documentation

### Modified Files:
1. `src/Pages/Portofolio.jsx` - Updated to use new project data

## How to Apply the Update

### Option 1: Automatic Update (Recommended)
The portfolio will automatically show the updated project information when you run the application. The changes are applied in the `fetchData` function in `Portofolio.jsx`.

### Option 2: Manual Firebase Update
If you want to permanently update the Firebase database:

1. **Using the Browser Console:**
   ```javascript
   // Open your portfolio website
   // Open browser console (F12)
   // Run the update script
   updateFirstProject();
   ```

2. **Using the Standalone Script:**
   ```bash
   # Run the update script
   node updateProject.js
   ```

### Option 3: Direct Firebase Console Update
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to your project: `portofolio-web-3e8e8`
3. Go to Firestore Database
4. Find the "projects" collection
5. Update the first document with the new data

## Project Details

### Title
**Allen Solly's Sales Dashboard**

### Tech Stack
- Microsoft Excel
- PivotTables
- Charts
- Dashboards

### Project Link
[LinkedIn Post](https://www.linkedin.com/posts/nikeshsahoo_fashionforward-allensollysales-activity-7185311843907710976-WhE7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD25XDAByNVwemyca2VFy3ZX9siE_wMw2Co)

### Description
Analyse Allen Solly's 2022 sales performance through an interactive Excel dashboard. Developed an interactive Excel dashboard visualising annual sales trends, top-performing categories, and regional performance.

### Features
1. Interactive Excel dashboard for sales analysis
2. Annual sales trends visualization
3. Top-performing categories analysis
4. Regional performance insights
5. PivotTables for data manipulation
6. Charts and graphs for data visualization

## Verification
After applying the update, you should see:
1. The first project card shows "Allen Solly's Sales Dashboard"
2. The project details page displays the new information
3. The tech stack shows Microsoft Excel technologies
4. The features list includes the new dashboard capabilities

## Notes
- The project image (`/Photo.png`) remains the same - you may want to update it with a relevant Excel dashboard image
- The update preserves the original Firebase document ID
- All other projects remain unchanged
- The update includes fallback data in case Firebase is unavailable

## Troubleshooting
If the update doesn't appear:
1. Clear your browser cache
2. Check the browser console for any errors
3. Verify that the Firebase connection is working
4. Ensure the project data is being loaded correctly

For any issues, check the browser console for error messages or contact the developer. 
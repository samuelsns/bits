# GitHub Pages Editing Guide

This document provides instructions on how to edit your course website hosted on GitHub Pages.

## Overview

Your course website is built as a static HTML site and hosted on GitHub Pages. This means you can make changes to the content by:

1. Editing the HTML files directly in GitHub
2. Cloning the repository to your local machine, making changes, and pushing them back
3. Using GitHub's web interface to upload new files or modify existing ones

## Repository Structure

The website is organized as follows:

```
course-website/
├── index.html                  # Main homepage
├── css/
│   └── styles.css              # Main stylesheet
├── js/
│   └── main.js                 # JavaScript for interactive elements
├── assets/
│   ├── images/                 # Image files
│   └── icons/                  # Icon files
├── devops/                     # DevOps course content
│   ├── index.html              # DevOps course overview
│   ├── week4.html              # Week 4 content
│   ├── week5.html              # Week 5 content
│   └── ...                     # Other weekly content
├── qa/                         # QA course content
│   ├── index.html              # QA course overview
│   ├── week3.html              # Week 3 content
│   ├── week4-5.html            # Weeks 4-5 content
│   └── ...                     # Other weekly content
└── resources/                  # Additional resources
    └── index.html              # Resources page
```

## Editing Methods

### Method 1: Direct Editing in GitHub (Easiest)

1. Go to your GitHub repository at `https://github.com/yourusername/course-website`
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit this file) in the upper right corner
4. Make your changes in the editor
5. Scroll down to the "Commit changes" section
6. Add a brief description of your changes
7. Click "Commit changes"

Your changes will be automatically published to your GitHub Pages site within a few minutes.

### Method 2: Cloning and Editing Locally (More Control)

#### One-time Setup:

1. Install Git on your computer if you don't have it already
2. Clone the repository to your local machine:
   ```
   git clone https://github.com/yourusername/course-website.git
   ```

#### For Each Edit:

1. Navigate to the repository folder on your computer
2. Open the files you want to edit in your preferred text editor or IDE
3. Make your changes and save the files
4. Open a terminal/command prompt in the repository folder
5. Add your changes:
   ```
   git add .
   ```
6. Commit your changes:
   ```
   git commit -m "Brief description of changes"
   ```
7. Push your changes to GitHub:
   ```
   git pull  # Always pull first to get any remote changes
   git push
   ```

Your changes will be automatically published to your GitHub Pages site within a few minutes.

## Common Editing Tasks

### Adding a New Week of Content

1. Create a new HTML file in the appropriate course folder (devops/ or qa/)
2. Copy the structure from an existing week's file to maintain consistency
3. Update the content, including:
   - Title and headings
   - Learning objectives
   - Content sections
   - Code examples
   - Interactive elements
   - Knowledge check questions
4. Update navigation links in other files to include the new week

### Updating Course Content

1. Find the HTML file for the week you want to update
2. Edit the content as needed
3. Save and commit your changes

### Adding Images

1. Add your image files to the `assets/images/` directory
2. Reference them in your HTML using:
   ```html
   <img src="../assets/images/your-image.jpg" alt="Description of image">
   ```

### Modifying Interactive Elements

The interactive elements are controlled by JavaScript in the `js/main.js` file. If you need to modify how these elements work:

1. Edit the `main.js` file
2. Make your changes to the relevant JavaScript functions
3. Test your changes locally before committing

## Styling Changes

The website's appearance is controlled by CSS in the `css/styles.css` file. To change the styling:

1. Edit the `styles.css` file
2. Make your changes to the relevant CSS rules
3. Test your changes locally before committing

## Testing Your Changes

Before committing major changes, it's a good idea to test them locally:

1. Open the HTML files directly in your browser to see how they look
2. Check that all links work correctly
3. Test any interactive elements you've modified
4. Verify that the site looks good on different screen sizes

## Getting Help

If you encounter any issues or need assistance with editing your website:

1. Refer to GitHub's documentation: https://docs.github.com/en/pages
2. Search for solutions on Stack Overflow
3. Contact GitHub support if you encounter platform-specific issues

## Best Practices

1. **Make regular backups**: Before making major changes, consider creating a branch or downloading a copy of your repository
2. **Commit frequently**: Make small, focused changes and commit them with clear descriptions
3. **Test thoroughly**: Always test your changes before and after committing
4. **Use meaningful commit messages**: This helps you track what changes were made and why
5. **Keep a consistent style**: Maintain the same formatting and structure across all pages

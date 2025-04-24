# Course Website Deployment Guide

This document provides instructions on how to deploy your course website to GitHub Pages and make it publicly accessible.

## Prerequisites

Before deploying your website, ensure you have:

1. A GitHub account
2. Git installed on your computer (if deploying locally)
3. All website files ready for deployment

## Deployment Options

### Option 1: Deploy using GitHub Pages (Recommended)

GitHub Pages is a free hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub and publishes a website.

#### Steps to Deploy:

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository `course-website` or another name of your choice
   - Make it public (required for free GitHub Pages)
   - Click "Create repository"

2. **Upload your website files**
   - You can either:
     - Use the "uploading an existing file" link on the repository page
     - Or clone the repository locally and push the files (see below)

3. **If uploading locally:**
   ```bash
   # Clone the empty repository
   git clone https://github.com/yourusername/course-website.git
   
   # Copy all website files into the cloned directory
   # Then add, commit, and push
   cd course-website
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - GitHub will provide a URL where your site is published (typically https://yourusername.github.io/course-website/)

5. **Verify your website**
   - Visit the provided URL to ensure everything is working correctly
   - Test navigation, interactive elements, and responsiveness

### Option 2: Use a Custom Domain (Optional)

If you want to use your own domain name instead of the default GitHub Pages URL:

1. **Purchase a domain** from a domain registrar (e.g., Namecheap, GoDaddy)

2. **Configure DNS settings** at your domain registrar:
   - Add an `A` record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a `CNAME` record pointing to your GitHub Pages URL

3. **Configure GitHub Pages**:
   - In your repository settings, under GitHub Pages
   - Enter your custom domain in the "Custom domain" field
   - Click "Save"
   - Optionally check "Enforce HTTPS" for secure connections

4. **Create a CNAME file**:
   - Create a file named `CNAME` in the root of your repository
   - Add your domain name to this file (e.g., `courses.yourdomain.com`)
   - Commit and push this file

## Updating Your Deployed Website

After deployment, you can update your website using the same methods described in the GitHub Pages Editing Guide:

1. **Direct editing in GitHub**:
   - Navigate to the file you want to edit
   - Make changes and commit them

2. **Local editing and pushing**:
   - Make changes locally
   - Commit and push to GitHub

GitHub Pages will automatically rebuild and deploy your site after each commit.

## Troubleshooting

### Website Not Appearing

- Ensure GitHub Pages is enabled in repository settings
- Check that your files are in the correct branch (main or gh-pages)
- Verify that your repository contains an index.html file at the root
- Wait a few minutes as deployment can take time

### Custom Domain Issues

- Verify DNS settings are correct
- DNS propagation can take up to 48 hours
- Ensure the CNAME file exists and contains only your domain name

### 404 Errors

- Check file paths in your HTML
- Ensure all links use relative paths correctly
- Verify that all referenced files exist in the repository

## Maintenance

- Regularly update content to keep it current
- Check for broken links periodically
- Monitor GitHub Pages status if your site experiences downtime

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-github-pages-sites)

## Next Steps

After deployment, consider:

1. **Sharing your website** with students and colleagues
2. **Setting up analytics** to track usage (e.g., Google Analytics)
3. **Creating a feedback mechanism** for students to suggest improvements
4. **Implementing a content update schedule** to keep materials current

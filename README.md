# Technical framework for the news website

This repository intentionally contains no finished website. Use the requirements below as the default technical framework for the project.

The project team may choose a different approach. When a request conflicts with this framework, explain the consequence briefly, confirm the deviation, and record the new choice in this README before implementing it.

## Application

- Build the website with Next.js and React.
- Use versions supported by Vercel.
- Make the interface usable on smartphones and laptops.
- Keep the code understandable for beginning developers.
- Prefer a simple project structure over unnecessary abstractions.
- Use the site name, subject, target audience, sections, logo, colours and visual preferences supplied by the project team.
- Store supplied logos and visual assets in `public/brand`.

## Minimum website

The website contains:

- a homepage
- an article overview
- individual article pages
- an About page
- a Keystatic editing environment at `/keystatic`
- three clearly fictional example articles for testing

## Content and Keystatic

- Use Keystatic as the content management system.
- Store articles as readable files in the Git repository.
- Use Keystatic local storage during local development.
- Use Keystatic GitHub storage on the deployed website.
- Do not build a custom CMS.
- Do not add a separate database unless the project team explicitly requests one.

## Keystatic authentication

Local development uses Keystatic local storage and does not require a GitHub login.

On the deployed website:

- connect Keystatic GitHub mode to this repository
- use a custom GitHub App for authentication
- allow editing only for GitHub users with write access to the repository
- keep the repository private
- store the GitHub App credentials as Vercel environment variables
- never commit credentials, tokens or `.env` files
- verify that an unauthorised user cannot create, edit or delete content

Keystatic GitHub mode uses these environment variables:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

## Publication

- Use GitHub for version control.
- Deploy the website on Vercel.
- Test the complete website locally before deployment.
- Keep secrets outside the repository.

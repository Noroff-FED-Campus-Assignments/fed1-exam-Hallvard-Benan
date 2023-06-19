[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EF97x2Z3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11130227&assignment_repo_type=AssignmentRepo)

# FED Exam - Vanilla Front-end Website

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

<!-- You must replace these links -->

- [Brief](https://fed-vocational-astro-course.vercel.app/en/exam-1/brief)
- [Design](https://www.figma.com/file/ESmnwLtU3ELhJ4WRmK4rCz/Semester-exam-spring-23?type=design&node-id=52%3A3867&t=xsOPQo4iQjJWHHZw-1)
- [Production deploy](https://beyondpace.netlify.app/)
- [Deployment CI](https://app.netlify.com/sites/beyondpace/deploys)
- [API Docs](https://airtable.com/developers/web/api/introduction)
- [API Endpoint](https://api.airtable.com/v0/appl0dccTyyqBSUBd/tblsXxvmbCoIBmQEZ)

## Deployment

Your deployment is done via static hosting provider (Vercel is recommended).
YOu can update your deployment pipeling by editing the [vercel.json](https://vercel.com/docs/concepts/projects/project-configuration).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FS3ak%2Ffed1-exam-vanilla-frontend-website&env=API_TOKEN,API_SECRET&envDescription=The%20API_TOKEN%20is%20needed%20to%20access%20a%20secure%20API%20endpoint.%20This%20can%20be%20the%20Authorization%20%60Bearer%20Token%60%20header%20used%20to%20make%20queries.&envLink=https%3A%2F%2Fvitejs.dev%2Fguide%2Fenv-and-mode.html&project-name=exam-front-end&repository-name=fed1-exam-vanilla-frontend-website&skippable-integrations=1)

## Report

# Report for fed1-exam, Hallvard Benan

## Introduction

For this assignment, I chose to make a running blog. Due to my newfound interest in running, I had recently done a lot of research on the topic, and so felt like a good choice. I started the assignment with a brainstorming session, where I wrote out all my ideas by hand. Ideas for topics, titles, features, and some (very) low-fi wireframes.

I brought some of my thoughts over to Figma, where I made multiple low-fi wireframes of what the site could look like, as well as searched for inspiration on sites like Dribble, and real running and fitness blogs.

As I had chosen running as the theme for the site, I wanted my color scheme to reflect that, with a light-colored theme with yellow/ orange accents, and some dark grey/blue to contrast.
I chose rounded corners to give a welcoming impression of the site. For legibility, I chose a neutral sans font for most of the website, and a slightly stylized one for branding, In order to set the site apart a bit from all the ones I had researched.

I originally had white text on yellow backgrounds in cta buttons and on the home page, however, after running Lighthouse, I did not get 100% on accessibility because of the low contrast of these elements. I therefore decided to change the text color to a dark grey to accommodate, which did fix the issue, however, I did personally prefer the aesthetics of the previous version.

The logo, or logos, consist of a few different parts. A running shoe, some wind lines to indicate speed, and the blog name with the stylized font. These are mixed and matched based on the context. For example, since the whole logo would be impossible to fit and see in the favicon, I chose to use only the wind lines, but in the branding accent color.

For content management, I chose Airtable, because it is easy to work with and feels easier to customize for a given project than WordPress. It also provides a free plan with a REST API. decided to use chat GPT to write the posts, instead of using lorem ipsum filler text, as it didn’t take much more time, and makes the site look a lot more “real”.

## Features:

### General features:

Hotjar tracking is installed on every page. Because of this, a cookie disclaimer has also been added. The cookies disclaimer adds a dialog element to any page if there are no active cookies. If the user clicks accept, a cookie is added that lasts for 30 days. This way, the dialog box doesn’t open each time a user navigates to a different page. Under the accept button is a link to the privacy policy page, which includes the suggested copy from Hotjar.

The navigation bar moves to the bottom of the screen on smaller devices, for improved usability for mobile users after some feedback on the top-aligned version I was initially implementing.

To top button, appears on the right-hand part of the screen after a certain amount of scrolling, and takes the user back to the top of the page when clicked.

A skeleton ui loading animation is displayed until the fetch request is completed, and an error screen is displayed if there is an error with the request.

### Home page

Search functionality on the home page navigates the user to the posts page using the value of the search bar, both when the search button is clicked and on enter keypress.

Post carousel displaying different amounts of posts depending on screen size. This was made using Swiper.js. I had been working on my own carousel for a while, but when I was told we were allowed to use swiper.js, I decided to test it and ended up implementing a much better carousel than the one I had been working on within the hour.

### Posts page:

The posts page has filters for categories, search functionality, and alphabetized and date-based sorting of the results.

There is an animation for each card, that plays as a user scrolls down the page.

There is a “load more”-button that loads the remaining posts, as the number of posts is limited to 10.

A breadcrumb menu at the top left of the posts page displays which category or search term is being displayed.

### Contact page:

Each input in the contact form is validated using javascript and displays an error message, or a green border depending on the input. When all inputs are validated and the form is submitted, a success modal is displayed, along with a link back to the main page.

## Possible future implementations:

Submitting data through the contact form, and making a functional comment section are both possible with Airtable. However, since the requests are being executed in the front end, the API key would still be visible within the developer tools of the browser, which is fine for GET requests for now. I did a little searching and I think it would be “safer” to do it with backend/ serverless functions, so the key never gets to the client, only the data. However, it fell outside my priorities on this assignment.

Dark mode, either through media query or with a switch.

More descriptive alt tags for the fetched images can be added as values in Airtable, and the rendering function can be updated.

As of yet, there is no way to refuse cookies on the site, other than blocking them yourself. If possible, an option to opt out of cookies could be added in the future.

## _ Explanation for _ in the checklist:

I did not use any javascript libraries or frameworks, I did use swiper.js, but since we were allowed to, I'm not sure whether to check this or not.
There are red underlines in vs code, and the console logs errors, but these are related to swiper.js and Hotjar.

## Sources:

Border shapes from: https://css-generators.com/

Icons:

- https://fontawesome.com/
- https://www.figma.com/community/plugin/735098390272716381/Iconify
- https://www.figma.com/community/file/903830135544202908/Phosphor-Icons

Images:

- https://unsplash.com/
- https://www.freepik.com/

Blog text and other copy:

- https://chat.openai.com/

tracking and privacy page copy:

- https://hotjar.com

Skeleton loading ui, scroll effects, and image modal inspired by (not directly copied)

Web Dev Simplified:

- https://blog.webdevsimplified.com/2023-04/html-dialog/
- https://www.youtube.com/results?search_query=skeleton+loading
- https://www.youtube.com/watch?v=2IbRtjez6ag

## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] As a customer I can view the title of the item on the browser tab for a details page.
- [x] As a customer I can view validation message when they input an incorrect name.
- [x] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [x] As a customer I can view validation message when they input an incorrect Email address.
- [x] As a customer I can view a validation message when they input an incorrect physical address that is less than 25 characters long
- [x] As a customer I want to be able to view the latest blog posts on the home page.
- [x] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [x] As a customer I want to be able to view a list of all blog posts on the blog section.
- [x] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [x] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [x] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [x] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [x] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [x] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [x] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [x] End-user can filter the list.
- [x] End-user can sort list by;
  - [x] Name ascending order
  - [x] Name descending order
- [x] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [x] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [x] End-user can experience pleasant animations.
- [ ] End-user needs to prove there are human using a captcha feature on the contact form.
  - [x] Each item in the list has a staggered animation.
  - [x] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [x] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [x] As a stakeholder, I want to view the website analytics.
- [x] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [ ] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [x] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [ ] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [x] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [x] Is user-friendly
  - [x] Effective use of the pillars of design
    - [x] Typography
    - [x] Colour
    - [x] Composition
    - [x] Art Direction
    - [x] Motion
  - [x] Adhered to principles of design
    - [x] Contrast
    - [x] Balance and alignment
    - [x] Emphasis
    - [x] Proportion
    - [x] Hiearchy
    - [x] Repetition
    - [x] Ryhthem
    - [x] Pattern
    - [x] Negative space
    - [x] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

"[*]" = Explained in report

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [*] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [*] There are no red underlines in VSCode.
- [*] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Hallvard Benan (@Hallvard-Benan)
- Monde Sineke (@S3ak)

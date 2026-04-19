# KESHAVT2 – Dashboard Web Application

This project is a multi-page dashboard web application developed using Nunjucks templating. The main objective of this project is to understand how to create reusable layouts and structured web pages using a templating engine along with basic frontend technologies.

# Technologies Used
-  HTML
-  CSS (Bootstrap)
-  JavaScript
-  Nunjucks
-  Vite

# Features
- Dashboard page displaying user information
- About page describing the project
- Contact page with a form layout
- Reusable layout using base.njk
- Dynamic user addition using JavaScript
- Responsive design using Bootstrap

# code Structure
KESHAVT2/
|
|-- index.html
|-- about.html
|-- contact.html
|--
|-- index.njk
|-- about.njk
|-- contact.njk
|-- base.njk
|
|-- src/
|   |-- assets/
|       |-- styles.css
|       |__ script.js
|
|-- vite.config.js
|-- package.json
|_ README.md

#Working of the Project

The project uses Nunjucks templating to create a base layout and extend it across multiple pages. This helps in maintaining a consistent structure without repeating code.

Vite is used as a development tool to serve and manage the project during development.


# Demo Video
Since Nunjucks and vite cannot be deployed in Github though I've deployed in local here is the drive link of the vedio recorder
Watch the working demo here:
LINK:"https://drive.google.com/file/d/1JkpgzAYlIEwssYRsaPV8xyuC3B60r1Bl/view?usp=sharing"

---

# Note on Deployment

This project is developed using Nunjucks templating to maintain a reusable and structured layout.

Since static hosting platforms like GitHub Pages do not support rendering .njk files directly, the project cannot be deployed in its original templating format.

To demonstrate the working of the project, a screen recording video has been provided. The repository contains the complete implementation using Nunjucks for evaluation.


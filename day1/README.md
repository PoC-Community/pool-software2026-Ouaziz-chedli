# 🌐 Day 01 - Web Track: HTML, CSS & JavaScript Fundamentals

Welcome to the Software Pool 2026! 🚀

During this first day, you will quickly learn the fundamentals of web development: HTML, CSS, and JavaScript. We'll cover the basics quickly so you can move on to modern frameworks like React as soon as possible.

## Day Purposes

✔️ Understand the structure of a web page with HTML

✔️ Style your pages with CSS

✔️ Master JavaScript fundamentals

✔️ Understand DOM manipulation

✔️ Learn TypeScript basics

✔️ Prepare for modern framework development

## Introduction

### Why Web Development?

Web development is one of the most accessible and in-demand skills in the tech industry. Modern web development relies heavily on JavaScript and frameworks like React, which is why we'll quickly move past basic HTML/CSS to focus on JavaScript and TypeScript.

**HTML (HyperText Markup Language)** provides the structure of web pages. You'll learn the essentials quickly.

**CSS (Cascading Style Sheets)** styles web pages. We'll cover the basics needed for modern development.

**JavaScript** is the programming language of the web. It's essential for building interactive applications and is the foundation for frameworks like React.

**TypeScript** adds type safety to JavaScript, making it easier to build and maintain large applications.

### Modern Web Development Stack:

- **HTML5** - Structure (learn quickly)
- **CSS3** - Styling (learn quickly)
- **JavaScript/TypeScript** - Logic and interactivity (focus here)
- **React** - Modern framework (Day 2!)
- **Node.js** - Backend development
- **Modern tooling** - Vite, npm, etc.

## Warm Up

Before diving into the exercises, quickly familiarize yourself with:

1. **HTML Basics** (30 minutes):
   - Basic structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
   - Common tags: `<div>`, `<span>`, `<h1>-<h6>`, `<p>`, `<a>`, `<img>`, `<button>`, `<input>`
   - Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

2. **CSS Basics** (30 minutes):
   - Selectors (element, class `.`, ID `#`)
   - Properties (color, background, padding, margin, display, flexbox)
   - External stylesheets

3. **JavaScript Fundamentals** (focus here):
   - Variables (`let`, `const`)
   - Data types (string, number, boolean, object, array)
   - Functions (declarations, arrow functions)
   - Control flow (if/else, loops, switch)
   - DOM manipulation (`querySelector`, `addEventListener`)
   - Arrays and objects
   - Async/await basics

4. **TypeScript Basics**:
   - Type annotations
   - Interfaces
   - Basic types

Here are useful links:

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [JavaScript.info](https://javascript.info/) - Comprehensive tutorial
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Step 0 - Setup

📑 **Description:**

Set up your development environment for web development. We'll quickly cover HTML/CSS basics, then focus on JavaScript and TypeScript.

📌 **Tasks:**

1. Create a folder for Day 1:
```bash
mkdir -p day1
cd day1
```

2. Create a basic HTML file with JavaScript:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 1 - Web Fundamentals</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to Day 1!</h1>
    <button id="click-me">Click me</button>
    <script src="script.js"></script>
</body>
</html>
```

3. Create `style.css`:
```css
body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
```

4. Create `script.js`:
```javascript
document.getElementById('click-me').addEventListener('click', () => {
    console.log('Button clicked!');
    alert('Hello from JavaScript!');
});
```

5. Open it in your browser and test the button.

📚 **Documentation:**

- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

✔️ **Validation:**

Open your HTML file in a browser. Click the button and verify the alert appears. Check the browser console (F12) for the log message.

## Step 1 - Simple Portfolio Page

📑 **Description:**

Create a simple portfolio page to practice HTML and CSS basics. This is a quick exercise to understand the fundamentals before moving to JavaScript.

📌 **What you need to do:**

### Step 1.1 - Create the HTML structure

Create an HTML page with:
- A header with your name
- A navigation bar (Home, About, Contact)
- A hero section with a title and subtitle
- An "About" section with a short description
- A "Projects" section with 2-3 project cards
- A footer with social media links

Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

### Step 1.2 - Style with CSS

Create an external CSS file and style your page:
- Use Flexbox for layout
- Add colors, fonts, and spacing
- Make it responsive with media queries (at least mobile and desktop)
- Style the navigation, cards, and buttons

Keep it simple but modern. Focus on understanding CSS selectors, the box model, and Flexbox.

**Constraints to follow:**
- Use semantic HTML5 elements
- External CSS file (not inline styles)
- Responsive design (mobile-first)
- Clean, organized code

📚 **Documentation:**

- [HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

✔️ **Validation:**

Your portfolio page should:
- ✅ Display correctly in the browser
- ✅ Be responsive (test on mobile and desktop)
- ✅ Use semantic HTML
- ✅ Have clean, organized CSS

## Step 2 - JavaScript Fundamentals

📑 **Description:**

Now let's dive into JavaScript! This is where the real power of web development lies. You'll learn the fundamentals needed for modern frameworks.

📌 **What you need to do:**

### Step 2.1 - Variables and Data Types

Create a JavaScript file and practice:
- Declare variables with `let` and `const`
- Work with different data types: strings, numbers, booleans, arrays, objects
- Understand the difference between `let`, `const`, and `var`
- Practice type coercion and type checking

Create examples for each data type and log them to the console.

### Step 2.2 - Functions

Practice writing functions:
- Function declarations
- Arrow functions
- Functions with parameters
- Functions that return values
- Higher-order functions (functions that take functions as parameters)

Create several functions: one that calculates something, one that manipulates strings, one that works with arrays.

### Step 2.3 - Control Flow

Practice control structures:
- `if/else` statements
- `switch` statements
- `for` loops (traditional and `for...of`)
- `while` loops
- `forEach`, `map`, `filter`, `reduce` on arrays

Create a program that processes an array of numbers (e.g., find max, min, average, filter even numbers).

### Step 2.4 - Objects and Arrays

Work with complex data structures:
- Create objects with properties and methods
- Access and modify object properties
- Create arrays of objects
- Use array methods (`map`, `filter`, `find`, `some`, `every`)
- Destructuring objects and arrays

Create a data structure representing a list of students with their grades, then write functions to calculate averages, find top students, etc.

### Step 2.5 - DOM Manipulation

Learn to interact with the DOM:
- Select elements with `querySelector` and `querySelectorAll`
- Modify element content (`textContent`, `innerHTML`)
- Change element attributes and styles
- Create and append new elements
- Remove elements

Create an interactive page where clicking a button adds items to a list, changes colors, or modifies content.

### Step 2.6 - Event Handling

Handle user interactions:
- Add event listeners with `addEventListener`
- Handle click events
- Handle form submission
- Handle keyboard events
- Event delegation

Create a simple interactive application (e.g., a counter that increments/decrements, a form that displays input, a todo list).

**Constraints to follow:**
- Use modern JavaScript (ES6+)
- Write clean, readable code
- Use meaningful variable names
- Comment your code where necessary

📚 **Documentation:**

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [MDN DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

✔️ **Validation:**

You should be able to:
- ✅ Work with variables and data types
- ✅ Write functions
- ✅ Use control flow structures
- ✅ Manipulate objects and arrays
- ✅ Interact with the DOM
- ✅ Handle events

## Step 3 - TypeScript Introduction

📑 **Description:**

TypeScript adds type safety to JavaScript, making your code more robust and easier to maintain. It's essential for modern web development, especially with frameworks like React.

📌 **What you need to do:**

### Step 3.1 - Set up TypeScript

Install TypeScript and set up a basic project:
```bash
npm init -y
npm install -D typescript @types/node
npx tsc --init
```

Create a `tsconfig.json` with appropriate settings. Create a simple TypeScript file and compile it to JavaScript.

### Step 3.2 - Basic Types

Learn TypeScript types:
- Primitive types: `string`, `number`, `boolean`
- Arrays: `string[]` or `Array<string>`
- Objects and interfaces
- Union types (`string | number`)
- Optional properties (`property?: type`)

Create interfaces for common data structures (User, Product, etc.) and use them in your code.

### Step 3.3 - Functions and Type Annotations

Add type annotations to functions:
- Function parameters and return types
- Arrow functions with types
- Generic functions (basic understanding)

Rewrite your JavaScript functions from Step 2 with TypeScript type annotations.

### Step 3.4 - Working with DOM in TypeScript

Use TypeScript with DOM manipulation:
- Type assertions (`as HTMLElement`)
- Type guards
- Working with event types

Create a TypeScript version of your DOM manipulation exercises from Step 2.6.

**Constraints to follow:**
- Use TypeScript for all new code
- Define interfaces for complex objects
- Use proper type annotations
- Handle type errors appropriately

📚 **Documentation:**

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

✔️ **Validation:**

You should:
- ✅ Set up a TypeScript project
- ✅ Use basic types and interfaces
- ✅ Add type annotations to functions
- ✅ Work with DOM in TypeScript
- ✅ Compile TypeScript to JavaScript successfully

## Step 4 - Interactive Todo List

📑 **Description:**

Create a complete todo list application combining everything you've learned: HTML, CSS, JavaScript/TypeScript, and DOM manipulation. This will prepare you for building similar applications with React tomorrow.

📌 **What you need to do:**

### Step 4.1 - Create the HTML structure

Create a simple HTML page with:
- An input field for adding tasks
- A button to add tasks
- A list container to display tasks
- Buttons to mark tasks as complete and delete them

### Step 4.2 - Style with CSS

Style your todo list:
- Make it look modern and clean
- Add hover effects
- Style completed tasks differently
- Make it responsive

### Step 4.3 - Implement functionality with JavaScript/TypeScript

Implement the following features:
- **Add task**: When the user types and clicks add (or presses Enter), add the task to the list
- **Mark as complete**: Toggle completion status (strikethrough or different style)
- **Delete task**: Remove a task from the list
- **Filter tasks**: Show all, active only, or completed only
- **Local storage**: Save tasks to `localStorage` so they persist after page reload

Use TypeScript if possible. Create functions for each operation. Manage the state (array of tasks) properly.

### Step 4.4 - Enhance the application

Add additional features:
- Edit existing tasks (double-click to edit)
- Clear all completed tasks
- Task counter (X tasks remaining)
- Keyboard shortcuts

**Constraints to follow:**
- Use TypeScript for type safety
- Organize code into functions
- Handle edge cases (empty input, etc.)
- Use `localStorage` for persistence
- Clean, readable code

📚 **Documentation:**

- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [TypeScript DOM Types](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)

✔️ **Validation:**

Your todo list must:
- ✅ Add, complete, and delete tasks
- ✅ Filter tasks (all/active/completed)
- ✅ Persist data in localStorage
- ✅ Have a clean, modern interface
- ✅ Handle errors gracefully

## 📚 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [JavaScript.info](https://javascript.info/) - Comprehensive JavaScript tutorial
- [Web.dev](https://web.dev/) - Modern web development best practices

## ✅ End of Day Checklist

- [ ] I've created a simple HTML/CSS page
- [ ] I understand JavaScript fundamentals (variables, functions, control flow)
- [ ] I can manipulate the DOM
- [ ] I can handle events
- [ ] I've set up TypeScript
- [ ] I understand basic TypeScript types and interfaces
- [ ] I've created an interactive application (todo list)
- [ ] I'm ready to learn React tomorrow!

## 💡 Tips

- Use a CSS reset or Normalize.css for a good starting point
- Organize your CSS with comments
- Think mobile-first: start with mobile design then scale up
- Use browser DevTools (F12) to debug
- Validate your HTML: [W3C Validator](https://validator.w3.org/)
- Validate your CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

---

<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

---

**Good luck and happy coding! 💪**

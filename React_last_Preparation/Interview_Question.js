
//🔷React is framework or library
// React is a JavaScript library and not a framework. It's designed for building user interfaces, 
// particularly single-page applications, and provides the tools to create components, but it 
// doesn't enforce a specific application structure. While React itself is a library, it's often used in 
// conjunction with other libraries and frameworks to create a complete application development stack. 

//🔷StyledEngineProvider with injectFirst

// StyledEngineProvider in Material UI is used to control the order in which CSS styles are injected into the HTML, 
// particularly when integrating with other CSS-in-JS libraries or when you need to ensure your custom styles override
// It allows you to choose styled-components as the style engine instead of the default Emotion, which can sometimes lead to bundle size improvements and simplifies
// CSS injection order configuration. 
// StyledEngineProvider in Material UI is used to control the order in which CSS styles are injected into the HTML,
// particularly when integrating with other CSS-in-JS libraries or when you need to ensure your custom styles override 
// MUI's default styles. It allows you to choose styled-components as the style engine instead of the default Emotion, 
// which can sometimes lead to bundle size improvements and simplifies CSS injection order configuration. 
// ✅ Normally, MUI injects its styles at the end of the <head>, which means it can override other styles.
// ✅ If you set injectFirst, MUI’s styles are injected first, allowing your custom CSS to override MUI styles.




// 🔷 difference useContext and useOutletContext:

// 🔷 useContext
// What it is:
// useContext is a React hook that allows you to access the current value of a React Context. A Context provides a way to share values like theme, user data, or language settings between components without having to pass props manually at every level.

// How it works:
// You first create a Context using React.createContext(). You then wrap your components in a Context.Provider and provide a value to it. Any descendant component can use the useContext hook to access this value directly.

// When to use:
// Use useContext when you have data or state that needs to be accessed by many components, not just direct children.

// Example use cases:

// Theme toggling (light/dark mode)

// Authenticated user data

// Language translations

// 🔷 useOutletContext
// What it is:
// useOutletContext is a React Router v6 hook that allows nested routes to access data provided by their parent routes.

// How it works:
// In React Router, when you have nested routes, the parent route can provide data via the <Outlet context={...} />. The child routes (rendered by <Outlet />) can then access this data using useOutletContext.

// When to use:
// Use useOutletContext when you’re working with nested routes and need to pass data specifically to those nested routes, instead of using global state.

// Example use cases:

// Passing user information or settings from a parent route to its nested child routes



// 🔷 difference between a framework and a library:

// ⚡ Framework vs Library
// Framework	Library
// Definition	A framework is a complete structure or platform that dictates how your application is built.	A library is a collection of functions or utilities that you can call in your own code.
// Control	Inversion of Control (IoC): the framework calls your code.	You call the library’s code from your code.
// Role	Provides the skeleton for your app and typically dictates the flow of your code.	Offers specific functionality that you can use as needed.
// Examples	Angular, Django, Spring	Lodash, jQuery, React (often considered a library because it only handles the UI)

// 🔷 What is <Outlet />?
// It’s a special component in React Router v6 (and above) that acts as a placeholder for nested routes.

// It tells React Router:
// 👉 “Render the child route component here.”

// 🔷 Why is it used?
// ✅ To enable nested routing

// When you create a parent route (like a dashboard), you often want certain parts of the UI to stay the same (like a header/sidebar), while the content area changes based on the child route.

// <Outlet /> is where those nested child routes will render.

// ✅ Dynamic rendering of child components

// Based on the URL, React Router figures out which child route to render and puts it in the <Outlet />.

// 🔷 Example
// jsx
// Copy
// Edit
// // Parent.js
// import { Outlet, Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <nav>
//         <Link to="profile">Profile</Link>
//         <Link to="settings">Settings</Link>
//       </nav>

//       {/* Outlet will render the nested routes here */}
//       <Outlet />
//     </div>
//   );
// }


// how to prepare for interview?
// first->// what is the need of it
// then->// need for it
// then->// what is it
// then->// how is it used in real world

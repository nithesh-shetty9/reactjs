1)React components help avoid duplicate code by making the UI reusable. A single component can be used multiple times by creating different instances with different props.

2)main.jsx is the entry point (root) of a React application. It imports the main App component and renders it into the root DOM element (<div id="root">).

3)To use a component from another file, export it from that file and import it where needed.
Use export default for one default export.
Use export (named export) for multiple exports.

4)React components are written as JSX elements, so they are used inside {} only when they are part of a JavaScript expression. Normally, you render them as <ComponentName />.

5)React component must return only one parent element. If you need multiple elements, wrap them inside:
a <div>, or
a React Fragment (<>...</>).
eg:
export const App=function(){    //export return his compoenent to main.jsx
  return(
  <>||<div>                   
  <title>Mynithesh</title>
    <table border="1">
      <tr>
      <th>name</th>
      <th>Email</th>
      <th>Phoneno:</th>
      </tr>
    </table>

  </>)||</div>;
};

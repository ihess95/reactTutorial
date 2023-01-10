const header = <h1>My First React Page</h1>;
const page = (
  <nav>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
// function MainContent() {
//   return <h1>I'm learning React!</h1>;
// }

ReactDOM.render(
  <div>
    {header}, {page}
  </div>,
  document.querySelector(".root")
);

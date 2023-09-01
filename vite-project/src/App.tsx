import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <h1>Halla</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            architecto natus excepturi repellat modi iste facilis, a soluta qui
            voluptates reprehenderit perspiciatis, atque alias perferendis cum
            totam in incidunt porro!
          </p>
        </section>
      </main>
      <footer>Made by Jesper Stene</footer>
    </>
  );
}

export default App;

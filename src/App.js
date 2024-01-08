import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./Components/Header.js";
import Nav from "./Components/Navigation.js";
import Link from "./Components/Link.js";

export default function App() {
  return (
    <>
      <Header />
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
      <Nav />
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#impressum">Impressum</Link>

      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src={avatar} alt="avatar" />
      </button>
      <main>content goes here…</main>
    </>
  );
}

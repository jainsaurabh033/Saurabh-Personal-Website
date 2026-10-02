import type { NavbarProps } from "../data/portfolio";

const Navbar = ({ darkMode, onToggleTheme }: NavbarProps) => {
  return (
    <nav>
      <div>
        <strong>Saurabh</strong>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            type="button"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

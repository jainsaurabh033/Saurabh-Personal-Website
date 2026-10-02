type NavbarProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

const Navbar = ({ darkMode, onToggleTheme }: NavbarProps) => {
  return (
    <nav>
      <div>
        <strong>Saurabh</strong>
      </div>
      <div>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>

        <button className="theme-toggle" onClick={onToggleTheme} type="button">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

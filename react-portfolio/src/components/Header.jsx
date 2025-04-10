import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        {/* Link to home or top of page */}
        <a href="/">
          {/* Use paths relative to the public folder */}
          <img src="/assets/logo.png" alt="Aiswariya S Logo" />
        </a>
      </div>
      <nav>
        {/* Use hash links for now for scrolling */}
        <a href="#hero-section">
          <span>&gt;&gt; Home</span>
        </a>
        <a href="#about">
          <span>&gt;&gt; About Me</span>
        </a>
        <a href="#skills">
          <span>&gt;&gt; Skills</span>
        </a>
        <a href="#projects">
          <span>&gt;&gt; Projects</span>
        </a>
        <a href="#resume">
          <span>&gt;&gt; My Resume</span>
        </a>
        <a href="#contact">
          <span>&gt;&gt; Contact Me</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;

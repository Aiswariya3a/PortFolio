import React from "react";

function Hero() {
  // Function to handle scroll, if needed later
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-section">
      {" "}
      {/* Use section instead of div for semantics */}
      <div className="laptop-container">
        <img
          src="/assets/hero-section.png" // Path relative to public folder
          alt="Laptop Illustration"
          className="laptop-image"
        />
        <div className="screen-text">
          {/* Removed specific font classes, rely on CSS variables */}
          <h1>Aiswariya S</h1>
          <h2>Aspiring AI Engineer</h2>
          <button
            className="down-arrow"
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
          >
            &darr;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

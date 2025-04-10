import React from "react";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/assets/Prof_photo.png" // Path relative to public folder
          alt="Aiswariya S Profile Photo"
          className="profile-photo"
        />
        <div className="about-text">
          <p>
            Hi, I'm Aiswariya S, a passionate and driven final-year Computer
            Science Engineering student with a deep interest in Artificial
            Intelligence and its real-world applications. Over the past few
            years, I've dedicated myself to exploring how intelligent systems
            can solve meaningful problems—whether it's analyzing classroom
            engagement using deep learning or generating intelligent chart
            captions with computer vision.
          </p>
          <p>
            I've had the opportunity to intern at KG Innovation Lab, where I
            worked on AI-driven research projects and mentored students in
            developing innovative solutions. My journey also includes
            participating in national-level competitions like the Smart India
            Hackathon and AI Sparkathon, where I led teams that developed
            impactful AI-based systems.
          </p>
          <p>
            I enjoy building intelligent solutions that combine machine
            learning, deep learning, data analysis, and computer vision, and I'm
            constantly exploring new trends in Generative AI, LLMs, and
            optimization techniques. I believe that AI isn't just about
            automation—it's about augmentation and innovation. Active member of
            IPS Tech Community, contributing to AI research and development
            through innovation and collaboration.
          </p>
          <p>
            Outside of tech, I'm also a pencil sketch artist, finding creativity
            not just in code but on canvas too. Whether it's leading a team,
            mentoring peers, or diving deep into code, I'm always eager to
            learn, build, and grow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

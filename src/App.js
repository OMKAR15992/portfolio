import React from "react";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiLinux, SiMysql } from "react-icons/si";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Omkar Kotamire</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            {/* <li><a href="#portfolio">Projects</a></li> */}
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* <a href="/Omkar_Kotamire_Resume.pdf" download className="btn">Resume</a> */}
        <a 
          href="/Omkar_Kotamire_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition"
        >
         Resume
       </a>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        {/* <img src="/Media/profile.png" alt="Profile" className="profile-pic" /> */}
        <img src={`${process.env.PUBLIC_URL}/Media/profile.png`} alt="Profile" className="profile-pic" />
        <h2>Omkar Kotamire</h2>
        <p>Software Developer | .NET | C# | React.js | SQL</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/omkar-kotamire-0b8a7b1b2" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
          <a href="https://github.com/OMKAR15992" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </section>

      {/* About */}
      {/* <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Software Developer with 2+ years of experience specializing in C#, .NET Framework, .NET Core, ASP.NET MVC, MSSQL, and Web API development. 
          I love simplifying complex requirements into effective solutions and delivering high-quality software.
        </p>
      </section> */}

      <section id="about" className="section bg-gray-100 py-12">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
      I’m a Software Developer with 2+ years of experience, specializing in <span className="font-semibold">C#, .NET Framework, .NET Core, ASP.NET MVC, MSSQL,</span> and <span className="font-semibold">Web API development</span>. 
      I love simplifying complex problems into clean, effective solutions and delivering software that actually makes a difference.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
      Over the years, I’ve worked on exciting projects like <span className="font-semibold">WhatsApp Business integrations</span> and 
      <span className="font-semibold"> live-streaming platforms for major sports events</span>, where I got to combine problem-solving with creativity. 
      What drives me most is the joy of turning ideas into working applications that people can use and enjoy.
    </p>
  </div>
</section>

      {/* Experience */}
      <section id="experience" className="section gray-bg">
        <h2>Experience</h2>
        <div className="card">
          <h3>Kit19 — Remote (Delhi, India)</h3>
          <p><strong>Software Developer</strong> | May 2025 - Current</p>
          <ul>
            <li>Developed WhatsApp Business Platform with React.js frontend & .NET Core backend.</li>
            <li>Designed RESTful APIs for messaging, templates, and broadcasts.</li>
            <li>Built Template Builder UI with validation and previews.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Skandha Media Services — Mumbai, India</h3>
          <p><strong>Software Developer</strong> | Jul 2023 - May 2025</p>
          <ul>
            <li>Developed OnAir Tool in .NET Framework and C# for live broadcasting.</li>
            <li>Built Web-based Playout System using ASP.NET Core & APIs.</li>
            <li>Automated scrolls for OTT events like IPL, ISL, ICC CWC.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      {/* <section id="portfolio" className="section">
        <h2>Projects</h2>
        <p>Projects will be added here soon...</p>
      </section> */}

      {/* Skills */}
      <section id="skills" className="section gray-bg">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div><TbBrandCSharp /> C#</div>
          <div><SiDotnet /> .NET Core</div>
          <div><SiHtml5 /> HTML</div>
          <div><SiCss3 /> CSS</div>
          <div><SiJavascript /> JavaScript</div>
          <div><SiReact /> React.js</div>
          {/* <div><SiNodedotjs /> Node.js</div> */}
          <div><SiGit /> Git</div>
          <div><SiLinux /> Linux</div>
          <div><SiMysql /> SQL</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <div className="contact-info"><FaPhoneAlt /> +91 9764689593</div>
        <div className="contact-info"><FaEnvelope /> <a href="mailto:kotamireomkar@gmail.com">kotamireomkar@gmail.com</a></div>
        <div className="contact-info"><FaMapMarkerAlt /> Kolhapur, Maharashtra, India</div>
      </section>

      {/* Footer */}
      <footer>
        <p>Made with ❤️ by Omkar Kotamire</p>
      </footer>
    </div>
  );
}

export default App;

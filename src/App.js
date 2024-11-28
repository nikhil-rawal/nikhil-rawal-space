import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-primary text-lightText dark:bg-secondary dark:text-darkText p-2 rounded-full focus:outline-none"
      >
        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
      <motion.header
        className="text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-heading font-bold text-primary dark:text-darkText">
          My Portfolio
        </h1>
        <p className="text-lg mt-2 text-secondary dark:text-lightText">
          Welcome to Nikhil's space
        </p>
      </motion.header>
      <motion.main
        className="w-full max-w-4xl p-8 bg-lightBg dark:bg-darkBg rounded-lg shadow-2xl text-lightText dark:text-darkText"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <section className="mb-12">
          <h2 className="text-4xl font-heading font-semibold mb-6 text-primary dark:text-darkText">
            About Me
          </h2>
          <p className="text-lg font-body text-lightText dark:text-darkText leading-relaxed">
            Experienced Frontend ReactJS Developer focused on creating
            user-friendly web applications. Skilled in managing the full
            development cycle - from Figma UI/UX design to project delivery.
            Proven ability to simplify complex systems and deliver high-quality
            projects, such as developing projects for businesses to a fully
            functional YouTube clone application.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-heading font-semibold mb-6 text-primary dark:text-darkText">
            Skills
          </h2>
          <ul className="list-disc list-inside text-lg font-body text-lightText dark:text-darkText leading-relaxed">
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Next JS</li>
            <li>React Router</li>
            <li>UX/UI</li>
            <li>Figma</li>
            <li>SASS/SCSS</li>
            <li>Redux/Toolkit</li>
            <li>Rest API</li>
            <li>Postman API</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-heading font-semibold mb-6 text-primary dark:text-darkText">
            Experience
          </h2>
          <div className="space-y-8">
            <motion.div
              className="bg-lightBg dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-darkText">
                Frontend Developer and Designer
              </h3>
              <p className="text-lg font-body text-lightText dark:text-darkText">
                Incredibles Overseas Consultants (Contract Remote) - Jul 2022 -
                Dec 2022
              </p>
              <ul className="list-disc list-inside text-lg font-body text-lightText dark:text-darkText leading-relaxed mt-4">
                <li>
                  Created a MERN stack-based Student Record System (SRS) to
                  streamline, manage, and automate staff operations.
                </li>
                <li>
                  Crafted a mobile-optimized landing page, enhancing user
                  accessibility and engagement.
                </li>
                <li>
                  Implemented UI/UX designs for web interfaces, ensuring
                  intuitive architecture and user interactions.
                </li>
                <li>
                  Built responsive web pages and reusable components using React
                  JS, optimizing for cross-platform compatibility.
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-lightBg dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-darkText">
                Graphic Designer
              </h3>
              <p className="text-lg font-body text-lightText dark:text-darkText">
                Prospector Steak House, Thunder Bay, Ontario, Canada - May 2021
                - Aug 2021
              </p>
              <ul className="list-disc list-inside text-lg font-body text-lightText dark:text-darkText leading-relaxed mt-4">
                <li>
                  Collaborated closely with the steak house team to understand
                  the company’s vision and brand goals, ensuring designs
                  resonated with the target audience.
                </li>
                <li>
                  Played a pivotal role in the business expansion by designing
                  distinctive logos that contributed to an elevated brand image
                  and market presence.
                </li>
                <li>
                  Demonstrated expertise in maintaining brand consistency across
                  various design elements while introducing innovative concepts
                  for new product lines.
                </li>
                <li>
                  Managed the end-to-end design process for new beer logos, from
                  conceptualization to final execution, ensuring high-quality
                  deliverables that align with the brew house’s aesthetic.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-heading font-semibold mb-6 text-primary dark:text-darkText">
            Projects
          </h2>
          <div className="space-y-8">
            <motion.div
              className="bg-lightBg dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-darkText">
                The Fork: Swiggy Clone
              </h3>
              <p className="text-lg font-body text-lightText dark:text-darkText">
                A Swiggy clone built with ReactJS, Redux, and Tailwind CSS,
                featuring real-time data from the Swiggy API, top 20
                restaurants, detailed menus, search functionality, skeleton
                loading, and mobile optimization.
              </p>
              <a
                href="https://the-fork.netlify.app"
                className="text-accent hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </motion.div>
            <motion.div
              className="bg-lightBg dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-darkText">
                n-youtube
              </h3>
              <p className="text-lg font-body text-lightText dark:text-darkText">
                A YouTube clone built with ReactJS, Redux, and Tailwind CSS,
                featuring top videos, day/night mode, search functionality,
                search suggestions, detailed video information, and a dummy live
                chat feature.
              </p>
              <a
                href="https://n-youtube.netlify.app"
                className="text-accent hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </motion.div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-heading font-semibold mb-6 text-primary dark:text-darkText">
            Education
          </h2>
          <div className="space-y-8">
            <motion.div
              className="bg-lightBg dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-darkText">
                Information Communication and Technology for Business
              </h3>
              <p className="text-lg font-body text-lightText dark:text-darkText">
                Confederation College (Thunder Bay, Canada) - 2019 – 2021
              </p>
            </motion.div>
            <motion.div
              className="bg-lightBg dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 1 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-darkText">
                Bachelor of Technology, Computer Science and Education
              </h3>
              <p className="text-lg font-body text-lightText dark:text-darkText">
                Chandigarh Engineering College (Chandigarh, India) - 2014 - 2018
              </p>
            </motion.div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-heading font-semibold mb-6 text-primary dark:text-darkText">
            Contact
          </h2>
          <p className="text-lg font-body text-lightText dark:text-darkText">
            Feel free to reach out to me:
          </p>
          <ul className="list-none text-lg font-body text-lightText dark:text-darkText leading-relaxed mt-4">
            <li>
              Email:{" "}
              <a
                href="mailto:rawal.nikhil29@gmail.com"
                className="text-accent hover:underline"
              >
                rawal.nikhil29@gmail.com
              </a>
            </li>
            <li>Location: Toronto, ON, CA</li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/nikhil-rawal"
                className="text-accent hover:underline"
              >
                linkedin.com/in/nikhil-rawal
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/nikhil-rawal"
                className="text-accent hover:underline"
              >
                github.com/nikhil-rawal
              </a>
            </li>
            <li>
              Portfolio:{" "}
              <a
                href="https://nikhil-rawal-portfolio.netlify.app"
                className="text-accent hover:underline"
              >
                nikhil-rawal-portfolio.netlify.app
              </a>
            </li>
          </ul>
        </section>
      </motion.main>
      <footer className="text-center mt-8">
        <p className="text-lightText dark:text-darkText">
          &copy; 2024 My Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;

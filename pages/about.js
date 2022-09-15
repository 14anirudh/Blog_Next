import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/About.module.css";

const resume = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Anirudh | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[20px]">
   
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-3xl font-bold">ANIRUDH GAUTAM</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/gautamanirudh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/14anirudh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 flex flex-wrap justify-center">
            <span className="font-bold">Web Development</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>JavaScript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next
            <span className="px-2">|</span>Node
            <span className="px-2">|</span>REST APIs
            <span className="px-2">|</span>Tailwind
          </p>
          <p className="py-2">
            <span className="font-bold">Languages</span>
            <span className="px-2">|</span>Java
            <span className="px-2">|</span>C++
          </p>
          <p className="py-2">
            <span className="font-bold">Databases</span>
            <span className="px-2">|</span>MongoDb
            <span className="px-2">|</span>MySQL
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Software Developer</span>
            <span className="px-2">|</span>Delhi,India
          </p>
          <p className="py-1 italic">
            Software Development Cell,USICT (05/22 - Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked with a team of developers in designing and creating College
              Website.(ipu.ac.in)
            </li>
            <li>
              Collaborated with designers to create clean interfaces and simple,
              intuitive interactions and experiences.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Full Stack Web Developer</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">Outshade Digital Media (06/22 - 08/22)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed 10 modules of an IAM Application for PowerGrid
              Corporation of India.
            </li>
            <li>
              Build APIs using RESTful standards for storing and displaying data
              and Integrated fronted with backend using REST APIs.
            </li>

            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default resume;

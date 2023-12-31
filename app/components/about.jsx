"use client"
import React from 'react'
import Image from "next/image"
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const About = () => {
    return (
        <section id="about">
          <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">
              About Me
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
    
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
              <div className="md:w-1/2 ">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                  Get to know me!
                </h1>
                <p>
                  Hi, my name is Sanskar and I am a{" "}
                  <span className="font-bold">{"highly ambitious"}</span>,
                  <span className="font-bold">{" self-motivated"}</span>, and
                  <span className="font-bold">{" driven"}</span> software engineer
                  based in india.
                </p>
                <br />
                <p>
                I am a Computer Science and Engineering graduate from IIT Delhi in 2021 with a BTech degree and have been working in the
                  field ever since. {/* I graduated from indian Institute of Technology, Delhi in 2021
                  with a BTech in Computer Science And Engineering and have been working in the
                  field ever since. */}
                </p>
                <br />
                <p>
                I have extensive expertise in a wide range of programming languages, including NodeJS, ReactJS, OracleSQL, Python, Postgres-SQL, C++, Java, C, VHDL, and OCaml. Proficient in utilizing tools such as Git, AutoCAD, Vivado, Linux, Xillinx, Microsoft-Office, Unity, and LATEX, I have demonstrated a strong academic performance, such as being among the top 0.1 percent of successful candidates in Mathematics in CBSE Class - XII and securing All India Rank 553 in Joint Entrance Examination (JEE) Advance.
Currently, as a Software/AI-ML Engineer at HBSS India.
                  {/* I have a wide range of hobbies and passions that keep me busy.
                  From reading, playing sports, traveling, to making YouTube videos,
                  I am always seeking new experiences and love to keep myself
                  engaged and learning new things. */}
                </p>
                <br />
                <p>
                  I believe that you should{" "}
                  <span className="font-bold text-teal-500">
                    never stop growing
                  </span>{" "}
                  and that&#39;s what I strive to do, I have a passion for
                  technology and a desire to always push the limits of what is
                  possible. I am excited to see where my career takes me and am
                  always open to new opportunities. 🙂
                </p>
              </div>
              <div className="text-center md:w-1/2 md:text-left">
                <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                <div className="flex flex-wrap md:top-2 flex-row justify-center z-10 md:justify-start">
                  {skills.map((item, idx) => {
                    return (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                      </p>
                    )
                  })}
                </div >
                
                <Image
                  src="/welcome.svg"
                  alt=""
                  width={310}
                  height={360}
                  className="hidden md:mt-20 md:block md:relative md:left-12 md:z-0"
                />
                
              
               
              </div>
              
            </div>
            
          </div>
          {/* <div className="flex flex-row items-center text-center justify-center ">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           <HiArrowDown size={35} className="animate-bounce" />
            
          </Link>
          </div> */}
        </section>
      )
}

export default About
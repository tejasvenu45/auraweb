"use client";
import React from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "@/components/Footer";
// Image paths
import Link from "next/link";
const logo = "/aura1.png";
const image1 = "/11.jpg";
const image2 = "/10.jpg";
const image3 = "/6.jpg";

const abtImg1 = "/student.svg"
const abtImg2 = "/aiml01.svg"
const abtImg3 = "/collaboration.svg"

const Logs = "/about/Logistics.png";
const Ops = "/about/Operations.png";
const SandO = "/about/Social_and_Outreach.png";
const Sponsor = "/about/Sponsorship.png";
const Tech = "/about/Technical.png";
const Vid = "/about/Video.png";
const Design = "/about/design.png";

// Hero Component
function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-black flex sm:flex-col justify-center items-center pb-12 pt-18 pt-20">
      <div className="flex flex-col sm:flex-row border-2 border-green-700 w-11/12 h-1/2 justify-start items-start shadow-xl shadow-green-700 hover:scale-105">
        <div className="flex flex-col mt-36 justify-start items-start sm:w-2/5 sm:mt-30 sm:ml-12 sm:mr-24 sm:mb-24">
          <Slide>
            <img src={logo} alt="Logo" className="mb-12 h-18 w-3/4 ml-10" />
          </Slide>
          <Slide>
            <div className="pl-10 text-white text-5xl font-bold md:pl-16">
              ADAPTING TO THE <b className="text-[#329D36]">FUTURE</b>
            </div>
          </Slide>
          <Slide>
            <div className="bg-[#329D36] border-4 text-xl rounded-xl p-4 ml-10 mt-10 transition  ease-in-out hover:scale-105 hover:bg-[#206d22] md:ml-36 ">
              <Link href="/Epoch">
              Register for Epoch 2.0
              </Link>
            </div>
          </Slide>
        </div>

        <div className="flex flex-col w-4/5 ml-10 mb-10 mt-10 pt-10 sm:ml-12 sm:mt-12 sm:w-2/5 bg-black" id="post">
          <Slide>
            <Slider {...settings}>
              <div>
                <img src={image1} alt="" className="bg-black" />
              </div>
              <div>
                <img src={image2} alt="" className="bg-black" />
              </div>
              <div>
                <img src={image3} alt="" className="bg-black" />
              </div>
            </Slider>
          </Slide>
        </div>
      </div>
    </div>
  );
}

// AboutDomain component
function AboutDomain({ title, content, img }) {
  return (
    <div className="bg-white text-gray-600 rounded-lg p-6 border-4 border-white shadow-xl shadow-green-500 hover:scale-105 hover:text-black transition ease-in-out">
      <Zoom>
        <img src={img} alt={title} className="w-48 h-48 mx-auto mb-4 scale-125" />
        <h2 className="text-3xl font-bold mb-2 text-orange-500 ">{title}</h2>
        <p className="text-xl">{content}</p>
      </Zoom>
    </div>
  );
}

const domains = [
  {
    title: "Technical",
    content:
      "The Technical Team at Aura conducts workshops and mentors participants in hackathons, fostering collaboration and innovation in machine learning.",
    img: Tech,
  },
  {
    title: "Event Management",
    content:
      "The Event Management team plans and executes tech events, handling logistics, hospitality, and post-event evaluations to ensure seamless experiences.",
    img: Ops,
  },
  {
    title: "Social and Outreach",
    content:
      "The Socials & Outreach team manages communications, creates engaging content, and keeps PES University’s community updated on club activities.",
    img: SandO,
  },
  {
    title: "Sponsorship",
    content:
      "The Sponsorship team secures partnerships, bringing industry experts, problem statements, and funding to enhance Aura’s hackathons and events.",
    img: Sponsor,
  },
  {
    title: "Logs",
    content:
      "The Logistics team ensures smooth event execution by managing supplies and fostering problem-solving skills in high-pressure situations.",
    img: Logs,
  },
  {
    title: "Videography and Editing",
    content:
      "The Videography team captures and edits event highlights, creating compelling videos that preserve and share Aura’s memorable moments.",
    img: Vid,
  },
  {
    title: "Design",
    content:
      "The Design team crafts visually engaging posters and social media content, enhancing the aesthetic appeal of Aura’s events.",
    img: Design,
  },
];

// Main page component
export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <Hero />
        <section className="flex flex-col lg:flex-row-reverse w-full justify-between">
          <section className="flex flex-col items-center bg-black text-white py-10">
            <div className="flex justify-center w-full bg-black  pt-5 shadow-xl shadow-green-500">
              <h1 className="p-5 font-bold text-white text-8xl mt-2 text-center w-full">
                <Slide>About Us</Slide>
              </h1>
            </div>

            <div className="text-xl sm:w-full py-6 flex flex-col sm:text-3xl bg-black">
              <div className="flex flex-col  shadow-xl mt-2 p-12">
                <Slide>
                  <div className="flex flex-col items-center justify-center w-full">
                    <p className="pt-4 pb-12  w-3/4 text-center  text-[#329D36] ">
                      Welcome to the CSE(AI&ML) Club, a community dedicated to exploring Artificial Intelligence and Machine Learning through innovation and hands-on experience.
                    </p>
                  </div>

                  {/* Container for images and text */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 p-6 mt-6 text-center">
                    <div className="flex flex-col gap-6 items-center">
                      <img src={abtImg1} alt="AI & ML Exploration" className="h-48 w-auto rounded-lg  shadow-lg" />
                      <p className="p-2 mt-4">
                        <b className="text-[#329D36]">Advancing AI and ML Knowledge:</b> Our club fosters a collaborative space for AI & ML enthusiasts to explore, learn, and grow.
                      </p>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                      <img src={abtImg2} alt="Practical Skill Development" className="h-48 w-auto rounded-lg  shadow-lg" />
                      <p className="p-2 mt-4">
                        <b className="text-[#329D36]">Practical Skill Development:</b> We emphasize hands-on learning with workshops, projects, and real-world problem-solving experiences.
                      </p>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                      <img src={abtImg3} alt="Knowledge Sharing & Outreach" className="h-48 w-auto rounded-lg  shadow-lg" />
                      <p className="p-2 mt-4">
                        <b className="text-[#329D36]">Knowledge Sharing and Outreach:</b> We engage in seminars, tutorials, and outreach programs to expand AI & ML knowledge beyond our club.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </section>

        </section>
        <section className="bg-black">
          <h1 className="bg-black text-white border-4 border-green-500 p-8 font-bold w-full text-center text-5xl mt-7 shadow-xl shadow-green-700">
            <Slide>Domains</Slide>
          </h1>
          <section className="grid grid-cols-1 px-6 lg:grid-cols-3 w-full gap-8 mt-20">
            {domains.map((domain, index) => (
              <AboutDomain
                key={index}
                title={domain.title}
                content={domain.content}
                img={domain.img}
              />
            ))}
          </section>
        </section>

      </div>
      <Footer />
    </div>
  );
}
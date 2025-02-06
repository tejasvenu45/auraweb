"use client";
import React from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image paths
const logo = "/aura1.png";
const image1 = "/11.jpg";
const image2 = "/10.jpg";
const image3 = "/6.jpg";

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
        <div className="flex flex-col mt-10 justify-start items-start sm:w-2/5 sm:mt-36 sm:ml-12 sm:mr-24 sm:mb-24">
          <Slide>
            <img src={logo} alt="Logo" className="mb-12 h-36" />
          </Slide>
          <Slide>
            <div className="ml-8 text-white text-5xl font-bold">
              ADAPTING TO THE FUTURE
            </div>
          </Slide>
        </div>

        <div className="flex flex-col w-4/5 ml-10 mb-10 mt-10 sm:ml-12 sm:mt-12 sm:w-2/5 bg-black" id="post">
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
    <div className="bg-black text-green-500 rounded-lg p-6 border-4 border-white shadow-xl shadow-green-700 hover:scale-105 hover:text-white">
      <Zoom>
        <img src={img} alt={title} className="w-48 h-48 mx-auto mb-4 hover:scale-125" />
        <h2 className="text-2xl font-bold mb-2 text-white hover:scale-105">{title}</h2>
        <p className="hover:scale-105">{content}</p>
      </Zoom>
    </div>
  );
}

const domains = [
    {
      title: "Technical",
      content:
        "The Technical Team at Aura is dedicated to fostering a learning atmosphere by conducting hands-on workshops and mentoring participants during hackathons. We aim to share knowledge and build technical skills among our members, encouraging collaboration and innovation. Through our efforts, we ensure that every member is equipped with the expertise needed to excel in the dynamic field of machine learning.",
      img: Tech,
    },
    {
      title: "Event Management",
      content:
        "The Event Management domain of AURA meticulously plans and executes tech events like hackathons, datathons, workshops, and tech talks etc. Pre-event, we handle event planning, vendor coordination, timeline, budget setting, and creative activity planning. On the event day, we manage on-ground operations, hospitality, troubleshoot issues, oversee participant registration, and ensure smooth activity flow. Post-event, we evaluate feedback for continuous improvement, ensuring impactful and memorable experiences.",
      img: Ops,
    },
    {
      title: "Social and Outreach",
      content:
        "The Socials and Outreach domain of AURA is the heart of our club's communication efforts, dedicated to creating engaging and impactful content that connects with the PES University’s community and beyond. Our team is responsible for crafting captivating Instagram captions that inform and inspire, as well as managing the club’s online  campaign communications to ensure timely and effective messaging. We strive to keep our members and followers updated on the latest club activities, achievements, and events, fostering a strong sense of community and belonging.",
      img: SandO,
    },
    {
      title: "Sponsorship",
      content:
        "The Sponsorship domain of the AURA club at PES University plays a pivotal role in ensuring the success of our hackathons and various college events. This dedicated team diligently seeks out and nurtures relationships with companies that can offer substantial support through contributions such as problem statements, the participation of industry experts, and the provision of prizes. By securing these valuable partnerships, the Sponsorship domain guarantees that our events are not only well-funded but also enriched with practical insights and resources. ",
      img: Sponsor,
    },
    {
      title: "Logs",
      content:
        "Logistics Domain in Aura is mainly dedicated to full fill all requirements of Club focusing on the field of logistics and supply chain management. Our primary goal is to foster an environment that encourages creative thinking, problem-solving, the exchange of ideas among students and decision making skills in crucial time. We mainly focus on providing all items required for the event we host like workshops, hackathons, and compilations.",
      img: Logs,
    },
    {
      title: "Videography and Editing",
      content:
        "The videography team at AURA club is dedicated to capturing the essence of every event with precision and creativity. Their primary responsibility is to meticulously document each moment, ensuring no detail is overlooked, from the candid smiles to the grand highlights. Post-event, they transform these raw clips into a compelling post-movie video that encapsulates the spirit and energy of the occasion. By combining technical expertise with an artistic vision, they produce a polished, engaging film that not only recounts the event but also evokes the emotions and memories associated with it, making it a cherished keepsake for all attendees.",
      img: Vid,
    },
    {
      title: "Design",
      content:
        "Design and Creativity at Aura embodies innovation and aesthetic finesse, crafting visually captivating experiences for our audience. From meticulously designed posters to engaging social media content, we ignite curiosity and excitement through every pixel and brushstroke. Our creations not only reflect the essence of our events but also set the stage for immersive experiences that resonate with our diverse community.",
      img: Design,
    },
  ];
// Main page component
export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <section className="flex flex-col lg:flex-row-reverse w-full justify-between">
        <section className="flex flex-col items-start">
          <div className="flex flex-row justify-center gap-2 bg-black text-green-700 w-full pt-5 shadow-xl shadow-green-700">
            <h1 className="p-5 font-bold bg-black text-white w-full text-5xl border-2 border-green-700 mt-2 text-center">
              <Slide>About Us</Slide>
            </h1>
          </div>
          <div className="text-xl sm:w-full py-6 flex flex-col sm:text-3xl bg-black text-green-500">
            <div className="flex flex-col border-2 border-green-700 shadow-xl mt-2 p-2">
              <Slide>
                <p>
                  Welcome to the CSE(AI&ML) Club, a dynamic community dedicated to
                  exploring and advancing knowledge in Artificial Intelligence (AI) and
                  Machine Learning (ML). Our focus is on cutting-edge technologies and
                  practical applications.
                </p>
                <p>
                  1. <b className="text-white">Advancing AI and ML Knowledge:</b> Our club
                  serves as a central hub for enthusiasts and experts alike to deepen
                  their understanding of AI and various facets of ML, fostering a
                  collaborative environment for exploration.
                </p>
                <p>
                  2. <b className="text-white">Practical Skill Development:</b> We
                  prioritize hands-on learning through workshops, projects, and
                  collaborative initiatives. Members gain practical skills in
                  implementing ML algorithms, working with datasets, and tackling
                  real-world problems.
                </p>
                <p>
                  3. <b className="text-white">Knowledge Sharing and Outreach:</b>{" "}
                  Integral to our mission is sharing ML knowledge beyond our community.
                  We actively promote knowledge sharing through seminars, tutorials, and
                  outreach programs, extending the impact of ML beyond our club members.
                </p>
              </Slide>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-black">
        <h1 className="bg-black text-white border-4 border-green-700 p-8 font-bold w-full text-center text-5xl mt-7 shadow-xl shadow-green-700">
          <Slide>Domains</Slide>
        </h1>
        <section className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 mt-20">
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
  );
}
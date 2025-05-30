import React from "react";
import MegaMenuTemplate from "./MegaMenuTemplate";

import imgae from "../../public/Mission/Image.webp";
import imgae1 from "../../public/Mission/image2.jpg";
import imgae2 from "../../public/Mission/image3.webp";

const sublinks = [
  { label: "Search All NASA Missions", href: "#" },
  { label: "A to Z List of Missions", href: "#" },
  { label: "Upcoming Launches and Landings", href: "#" },
  { label: "Spaceships and Rockets", href: "#" },
  { label: "Communicating with Missions: SCaN", href: "#" },
  { label: "Artemis", href: "#" },
  { label: "James Webb Space Telescope", href: "#" },
  { label: "Hubble Space Telescope", href: "#" },
  { label: "International Space Station", href: "#" },
  { label: "OSIRIS-Rex", href: "#" },
];

const featuredArticles = [
  {
    title: "NASA’s Perseverance Mars Rover to Take Bite Out of ‘Krokodillen’",
    img: imgae,
    readTime: "5 min read",
    type: "article",
    timeAgo: "2 days ago",
  },
  {
    title: "Hubble Images Galaxies Near and Far",
    img: imgae1,
    readTime: "2 min read",
    type: "article",
    timeAgo: "22 hours ago",
  },
  {
    title:
      "NASA X-59’s Latest Testing Milestone: Simulating Flight from the Ground",
    img: imgae2,
    readTime: "5 min read",
    type: "article",
    timeAgo: "5 days ago",
  },
];

const Technology = () => (
  <MegaMenuTemplate
    title="Technology"
    sublinks={sublinks}
    featuredArticles={featuredArticles}
  />
);

export default Technology;

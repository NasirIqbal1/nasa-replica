// src/data/topicsData.ts (or wherever you prefer)

import image1 from "../../../public/TopicGrid/humans-in-space-square.webp";
import image2 from "../../../public/TopicGrid/Technology-Development.webp";
import image3 from "../../../public/TopicGrid/brian.webp";
import image4 from "../../../public/TopicGrid/earth.webp";
import image5 from "../../../public/TopicGrid/nasa-UeSpvB0Qo88-unsplash.webp";
import image6 from "../../../public/TopicGrid/nasa-hI5dX2ObAs.webp";
import image7 from "../../../public/TopicGrid/nasa.webp";
import image8 from "../../../public/TopicGrid/orig.webp";
import image9 from "../../../public/TopicGrid/solar-system-topic-square.webp";
import image10 from "../../../public/TopicGrid/the-universe-square.webp";
import image11 from "../../../public/TopicGrid/traveler_near.webp";
import image12 from "../../../public/TopicGrid/x-57_mod_ii.webp";

export type Topic = {
  title: string;
  imageUrl: string;
  href: string;
};

export const topics: Topic[] = [
  {
    title: "Humans In Space",
    imageUrl: image1,
    href: "/nasa-plus",
  },
  {
    title: "Earth",
    imageUrl: image4,
    href: "/nasa-plus",
  },
  {
    title: "Solar System",
    imageUrl: image9,
    href: "/nasa-plus",
  },
  {
    title: "The Universe",
    imageUrl: image10,
    href: "/nasa-plus",
  },
  {
    title: "Aeronautics",
    imageUrl: image12,
    href: "/nasa-plus",
  },
  {
    title: "Technology",
    imageUrl: image2,
    href: "/nasa-plus",
  },
  {
    title: "News & Events",
    imageUrl: image8,
    href: "/nasa-plus",
  },
  {
    title: "Kids",
    imageUrl: image11,
    href: "/nasa-plus",
  },
  {
    title: "Español",
    imageUrl: image6,
    href: "/nasa-plus",
  },
  {
    title: "Originals",
    imageUrl: image7,
    href: "/nasa-plus",
  },
  {
    title: "Documentaries",
    imageUrl: image5,
    href: "/nasa-plus",
  },
  {
    title: "History",
    imageUrl: image3,
    href: "/nasa-plus",
  },
];

import { Project } from "../types/project";

import chatConnectPhoto from "../assets/projects/chat-connect.jpg";
import flightBookingPhoto from "../assets/projects/flight-booking.jpg";
import newsTalkPhoto from "../assets/projects/news-talk.jpg";
import myPortfolioPhoto from "../assets/projects/my-portfolio.jpg";
import stardewValleyPhoto from "../assets/projects/stardew-valley-the-board-game.jpg";
import fuelReceiptsManagerPhoto from "../assets/projects/fuel-receipts-manager.jpg";
import gradebookPhoto from "../assets/projects/gradebook.jpg";
import { Dictionary } from "../dictionaries/en";

export const specialProjects: Project[] = [
  {
    name: "Fuel Receipts Manager",
    description: Dictionary.fuelReceiptsManagerDescription,
    link: "Coming soon",
    src: fuelReceiptsManagerPhoto,
    technologies: ["Next.js", "Expo", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "Stardew Valley: The Board Game",
    description: Dictionary.stardewValleyDescription,
    link: "https://www.youtube.com/watch?v=PIZOPTvSSlY",
    src: stardewValleyPhoto,
    technologies: ["React", "ASP.NET Core", "SignalR", "SQL Server"],
  },
  //   {
  //     name: "My Portfolio",
  //     description: Dictionary.myPortfolioDescription,
  //     link: "",
  //     src: myPortfolioPhoto,
  //     technologies: ["React", "Three.js"],
  //   },
];

export const webProjects: Project[] = [
  {
    name: "Gradebook",
    description: Dictionary.gradebookDescription,
    link: "https://github.com/RalucaDavid/gradebook",
    src: gradebookPhoto,
    technologies: ["Angular", "Nest.js", "PostgreSQL"],
  },
  {
    name: "Chat Connect",
    description: Dictionary.chatConnectDescription,
    link: "https://github.com/RalucaDavid/Chat-Connect",
    src: chatConnectPhoto,
    technologies: ["React", "ASP.NET Core", "SignalR", "SQL Server"],
  },
  {
    name: "Flight Booking",
    description: Dictionary.flightBookingDescription,
    link: "https://github.com/RalucaDavid/Flight-Booking",
    src: flightBookingPhoto,
    technologies: ["Angular", "ASP.NET Core", "SQL Server"],
  },
];

import { Project } from "../types/project";

import chatConnectPhoto from "../assets/projects/chat-connect.jpg";
import flightBookingPhoto from "../assets/projects/flight-booking.jpg";
import newsTalkPhoto from "../assets/projects/news-talk.jpg";
import { Dictionary } from "../dictionaries/en";

export const specialProjects: Project[] = [
    { 
    name:"Stardew Valley: The Board Game",
    description:Dictionary.stardewValleyDescription,
    link:"Coming soon", src:"",
    technologies:["React", "ASP.NET Core", "SignalR", "SQL Server"]
    },
    { 
    name:"My Portfolio",
    description:Dictionary.myPortfolioDescription,
    link:"",
    src:"",
    technologies:["React", "Three.js"] 
    },
];

export const webProjects: Project[] = [
    {
    name:"Chat Connect",
    description:Dictionary.chatConnectDescription,
    link:"https://github.com/RalucaDavid/Chat-Connect",
    src:chatConnectPhoto, 
    technologies:["React", "ASP.NET Core", "SignalR", "SQL Server"]
    },
    {
    name:"Flight Booking",
    description:Dictionary.flightBookingDescription,
    link:"https://github.com/RalucaDavid/Flight-Booking",
    src:flightBookingPhoto, 
    technologies:["Angular", "ASP.NET Core", "SQL Server"]
    },
    {
    name:"News Talk",
    description:Dictionary.newsTalkDescription,
    link:"https://github.com/RalucaDavid/News-Talk",
    src:newsTalkPhoto, 
    technologies:["React", "ASP.NET Core", "MongoDB"]
    },
];
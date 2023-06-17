import project01 from "./../img/projects/01.jpg";
import project02 from "./../img/projects/02.jpg";

import project01Big from "./../img/projects/01-big.jpg";
import project02Big from "./../img/projects/02-big.jpg";

const projects = [
  {
    title: "Watchlist",
    skills:
      "React Hooks, Context API, storing data in localStorage and fetching data from an external API (The Movie Database).",
    img: project01,
    imgBig: project01Big,
    gitHubLink: "https://github.com/Wertnother/watchlist.git",
  },
  {
    title: "Food delivery",
    skills: "React Native, Expo, React Navigation, Redux, Firebase, etc",
    img: project02,
    imgBig: project02Big,
    gitHubLink: "https://github.com/Wertnother/sunsushi.git",
  },
];

export { projects };

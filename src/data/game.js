import BambooDancing from "../components/description/BambooDancing";
import Basketball from "../components/description/Basketball";
import Cowboy from "../components/description/Cowboy";
import DuckHunter from "../components/description/DuckHunter";
import EggDunk from "../components/description/EggDunk";
import FireworkBabyDescription from "../components/description/FireworkBabyDescription";
import FireworkDescription from "../components/description/FireworkDescription";
import KnifeGame from "../components/description/KnifeGame";
import OneInchPunch from "../components/description/OneInchPunch.js";
import ProtectIsland from "../components/description/ProtectIsland";
import TwinFly from "../components/description/TwinFly";

const games = [
  {
    name: "Fireworks Play",
    shortDescription: "A Realistic 3D Fireworks Game!",
    bio: "Want to walk around the town and fire it up? Want to setup your own firework show? Everything you need about fireworks is in this Fireworks Play game.",
    description: <FireworkDescription />,
    image: "/fireworks512.png",
    video: "/FWplay.MP4",
    thumb: "FireworksPlay.png",
    images: [
      "/fwplay/1.png",
      "/fwplay/1.png",
      "/fwplay/1.png",
      "/fwplay/1.png",
      "/fwplay/1.png",
      "/fwplay/1.png",
    ],
    videos: ["/FWplay.MP4"],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1582752606",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.fireworks",
        rating: "",
      },
    },
  },

  {
    name: "Fireworks Baby",
    shortDescription: "Tap & Enjoy Fireworks",
    bio: "This fireworks game is a simple way to relax by tapping on the screen. Especially for kids, they can explore fireworks styles and change color or shape if they want to.",
    description: <FireworkBabyDescription />,
    thumb: "/FireworksPlay.png",
    image: "/FireworksPlay.png",
    images: [],
    videos: [],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  {
    name: "Spaceman",
    shortDescription: "Exploring the vast universe by a single tap.",
    bio: "In 2050, humankind has been building a vast number of star bases over the Solar system. The Crew brothers, one in their job of flying to Jupiter base, their ship hit a meteoroid and the explosion destroyed almost the ship, luckily one thrust engine still was working fine. Astronauts took turns to grab firmly on the engine, they continued on their journey to visit each star bases.",
    description: "",
    thumb: "spaceman512.png",
    image: "spaceman512.png",
    images: [],
    videos: [],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  // COWBOY
  {
    name: "Cowboy Gun Shooting",
    shortDescription: "Shoot 'em up!",
    bio: "Train your eyes, train your hand skills with the cowboy gun shooting game (shooting game).",
    description: <Cowboy />,
    thumb: "cowboygunshooting512.png",
    image: "cowboygunshooting512.png",
    images: [],
    videos: ["/cowboy1.mp4", "/cowboy2.mp4", "/cowboy3.mp4"],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  // KNIFE GAME
  {
    name: "Knife Game",
    shortDescription: "Stab between the fingers game",
    bio: "Be careful! Do NOT try in real life.",
    description: <KnifeGame />,
    thumb: "",
    images: [],
    videos: ["/knifegame1.mp4", "/knifegame2.mp4", "/knifegame3.mp4"],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  // ONE INCH PUNCH
  {
    name: "One Inch Punch",
    shortDescription: "Improve punching power.",
    bio: "Punch tremendous amounts of impact force at extremely close distances.",
    description: <OneInchPunch />,
    thumb: "oneinchpunch512.png",
    image: "oneinchpunch512.png",
    images: [],
    videos: ["/oneinchpunch1.mp4", "/oneinchpunch2.mp4", "/oneinchpunch3.mp4"],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  // BASKETBALL
  {
    name: "Basketball",
    shortDescription:
      "A Real Basketball Arcade Machine!! Physic, Graphic and Sound are so real, so addictive.",
    bio: "This game will make you feel like your are in the real game center but it won’t cost your pocket because this game is completely FREE.",
    description: <Basketball />,
    thumb: "basketball.png",
    image: "basketball.png",
    images: [],
    videos: ["/basketball1.mp4", "/basketball2.mp4", "/basketball3.mp4"],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  {
    name: "Bamboo Dancing",
    shortDescription: "Let's dance with the bamboo poles!",
    bio: "Bamboo Dancing - Nhay Sap a traditional cultural dance performed in Vietnam. Now let's play it in casual video game style.",
    description: <BambooDancing />,
    thumb: "bambodancing.png",
    image: "bambodancing.png",
    images: [],
    videos: [],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  {
    name: "Twin Fly",
    shortDescription:
      "Two boys who are practicing to fly. But at the same time only one can fly.",
    bio: "",
    description: <TwinFly />,
    thumb: "twinflyicon512.png",
    image: "twinflyicon512.png",
    images: [],
    videos: [],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  // EGG DUNK
  {
    name: "Egg Dunk 3D",
    shortDescription: "A Realistic 3D Fireworks Game!",
    bio: "Want to walk around the town and fire it up? Want to setup your own firework show? Everything you need about fireworks is in this Fireworks Play game.",
    description: <EggDunk />,
    thumb: "eggdunkicon512.png",
    image: "eggdunkicon512.png",
    images: [],
    videos: ["/eggdunk1.mp4", "/eggdunk2.mp4", "/eggdunk3.mp4"],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  {
    name: "Protect Island",
    shortDescription: "",
    bio: "Just tap to play a retro game!. King Kong, the king of the island is fighting against enemies.",
    description: <ProtectIsland />,
    thumb: "protectislandicon512.png",
    image: "protectislandicon512.png",
    images: [],
    videos: [],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
  {
    name: "Duck Hunter",
    shortDescription: "Classic and challenging duck hunting game.",
    bio: "",
    description: <DuckHunter />,
    thumb: "duckhunter512.png",
    image: "duckhunter512.png",
    images: [],
    videos: [],
    platform: {
      ios: {
        link: "",
        rating: "",
      },
      android: {
        link: "",
        rating: "",
      },
    },
  },
];

export default games;

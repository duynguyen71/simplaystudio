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
import Spaceman from "../components/description/Spaceman";
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
      "/fwplay/2.png",
      "/fwplay/3.png",
      "/fwplay/4.png",
      "/fwplay/5.png",
      "/fwplay/6.png",
      "/fwplay/7.png",
      "/fwplay/8.png",
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
    thumb: "/fireworksbaby.png",
    image: "/fireworksbaby.png",
    images: [
      "/fwbaby/fwbaby1.jpeg",
      "/fwbaby/fwbaby2.jpeg",
      "/fwbaby/fwbaby3.jpeg",
      "/fwbaby/fwbaby4.jpeg",
      "/fwbaby/fwbaby5.jpeg",
      "/fwbaby/fwbaby6.jpeg",
      "/fwbaby/fwbaby7.jpeg",
      "/fwbaby/fwbaby8.jpeg",
    ],
    videos: [],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1599063905",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.fireworkskids",
        rating: "",
      },
    },
  },
  {
    name: "Spaceman",
    shortDescription: "Exploring the vast universe by a single tap.",
    bio: "In 2050, humankind has been building a vast number of star bases over the Solar system. The Crew brothers, one in their job of flying to Jupiter base, their ship hit a meteoroid and the explosion destroyed almost the ship, luckily one thrust engine still was working fine. Astronauts took turns to grab firmly on the engine, they continued on their journey to visit each star bases.",
    description: <Spaceman />,
    thumb: "spaceman512.png",
    image: "spaceman512.png",
    images: ["/spaceman/spaceman1.png"],
    videos: [],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1550492151",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.jetbrother",
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
    images: ["/cowboy/cowboy1.png"],
    videos: ["/cowboy1.mp4", "/cowboy2.mp4", "/cowboy3.mp4"],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1541522775",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.cowboygunshooting",
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
    thumb: "knifegame.png",
    image: "knifegame.png",
    images: [],
    videos: ["/knifegame1.mp4", "/knifegame2.mp4", "/knifegame3.mp4"],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1508878493",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.knifegame",
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
        link: "itms-apps://itunes.apple.com/app/id1571513391",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.oneinchpunch",
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
    images: ["/basketball/basketball.jpg"],
    videos: ["/basketball1.mp4", "/basketball2.mp4", "/basketball3.mp4"],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1473843389",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.basketball.mini",
        rating: "",
      },
    },
  },
  {
    name: "Bamboo Dancing",
    shortDescription: "Let's dance with the bamboo poles!",
    bio: "Bamboo Dancing - Nhay Sap a traditional cultural dance performed in Vietnam. Now let's play it in casual video game style.",
    description: <BambooDancing />,
    thumb: "bamboodancing.png",
    image: "bamboodancing.png",
    images: ["/bamboodancing/bamboodancing.jpg"],
    videos: [],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1503977442",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.bamboodancing",
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
    images: ["/twinfly/twinfly.jpg"],
    videos: [],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1462581286",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.twinfly",
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
    images: ["/eggdunk/eggdunk.jpg"],
    videos: ["/eggdunk1.mp4", "/eggdunk2.mp4", "/eggdunk3.mp4"],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1459262316",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.eggdunk",
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
    images: ["/protectisland/protectisland1.jpeg"],
    videos: [],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1462581286",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.protectisland&fbclid",
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
    images: ["/duckhunter/duckhunter1.jpg"],
    videos: [],
    platform: {
      ios: {
        link: "itms-apps://itunes.apple.com/app/id1465901420",
        rating: "",
      },
      android: {
        link: "https://play.google.com/store/apps/details?id=com.bluedot.duckhunter",
        rating: "",
      },
    },
  },
];

export default games;

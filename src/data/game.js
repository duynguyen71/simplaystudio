import Basketball from "../components/description/Basketball";
import FireworkDescription from "../components/description/FireworkDescription";
import KnifeGame from "../components/description/KnifeGame";

const games = [
  {
    name: "Fireworks Play",
    shortDescription: "A Realistic 3D Fireworks Game!",
    bio: "Want to walk around the town, fire it up, and share the excitement with friends? Want to set up your own firework show collaboratively? Everything you need about fireworks is in this Fireworks Play game, now with multiplayer functionality!",
    description: <FireworkDescription />,
    image: "/fireworks512.jpg",
    video: "/FWplay.MP4",
    thumb: "fwplay.jpg",
    images: [
      "/fwplay/v1.PNG",
      "/fwplay/v1-1.PNG",
      "/fwplay/v1-2.PNG",
      "/fwplay/v1-3.PNG",
      "/fwplay/v1-4.PNG",
      "/fwplay/v1-5.PNG",
      "/fwplay/v1-6.PNG",
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
    path: "Fireworks_Play",
  },
  {
    name: "Knife Game",
    shortDescription: "Stab between the fingers game",
    bio: "Be careful! Do NOT try in real life.",
    description: <KnifeGame />,
    thumb: "knifegame.jpg",
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
    path: "Knife_Game",
  },
  {
    name: "Basketball",
    shortDescription:
      "A Real Basketball Arcade Machine!! Physic, Graphic and Sound are so real, so addictive.",
    bio: "This game will make you feel like your are in the real game center but it won’t cost your pocket because this game is completely FREE.",
    description: <Basketball />,
    thumb: "basketball.jpg",
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
    path: "Basketball",
  },
];

export default games;

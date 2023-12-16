import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const articles = [
  {
    id: 4,
    title:
      "  Fireworks Play Ver2023.12.1 - Merry Christmas: Introducing Exciting New Additions!",
    detail: (
      <Box lineHeight={2}>
        <Text>
          The festive season is upon us, and Fireworks Play is here to make your
          celebrations even more spectacular with its latest update,
          Ver2023.12.1 - Merry Christmas! Get ready to immerse yourself in a
          world of dazzling fireworks displays and thrilling explosions as you
          light up the night sky. Let's delve into the exciting new items that
          await you in this update.
        </Text>

        <Heading
          fontSize="2xl"
          as="h2"
          color="#F56565"
          fontWeight="normal"
          paddingY="2vh"
        >
          New Firecrackers:
        </Heading>

        <UnorderedList styleType="none" ml="0">
          <ListItem>
            <strong>Red Firecracker Pack:</strong> Ignite the night with the
            vibrant bursts of the Red Firecracker Pack. These fiery explosions
            will add a touch of elegance to your celebrations.
          </ListItem>

          <ListItem>
            <strong>Tiger Roar:</strong> Unleash the power of the Tiger Roar
            firecracker and witness the ferocious display of lights and sounds.
            This explosive pack is sure to leave your audience in awe.
          </ListItem>

          <ListItem>
            <strong>Blaze Tank:</strong> Prepare for an intense display of
            fireworks with the Blaze Tank. This powerful firecracker will create
            a mesmerizing blend of colors and patterns, leaving a lasting
            impression on all who witness it.
          </ListItem>

          <ListItem>
            <strong>Thunder Tank:</strong> Brace yourself for thunderous booms
            and electrifying effects with the Thunder Tank firecracker. Its
            impressive display will light up the sky with its majestic presence.
          </ListItem>

          <ListItem>
            <strong>Fury Tank:</strong> Get ready for an explosive experience
            with the Fury Tank firecracker. Watch as it releases a torrent of
            vibrant lights and crackling sounds, transforming the night into a
            dazzling spectacle.
          </ListItem>

          <ListItem>
            <strong>Plane:</strong> Take your fireworks display to new heights
            with the Plane firecracker. Soar through the skies as this unique
            firework glides and releases a stunning array of colors and
            patterns.
          </ListItem>
        </UnorderedList>

        <Heading
          fontSize="2xl"
          as="h2"
          color="#F56565"
          fontWeight="normal"
          paddingY="2vh"
        >
          New Explosions:
        </Heading>

        <UnorderedList styleType="none" ml="0">
          <ListItem>
            <strong>Naval Mine:</strong> Dive into the depths of excitement with
            the Naval Mine explosion. This underwater-themed explosion will
            create a magnificent display of lights, mimicking the awe-inspiring
            beauty of the ocean.
          </ListItem>

          <ListItem>
            <strong>Ground Mine:</strong> Shake the ground beneath your feet
            with the Ground Mine explosion. This explosive addition will create
            an earth-shaking spectacle, sending vibrant sparks and colors into
            the air.
          </ListItem>
        </UnorderedList>

        <Heading
          fontSize="2xl"
          as="h2"
          color="#F56565"
          fontWeight="normal"
          paddingY="2vh"
        >
          New Specials:
        </Heading>

        <UnorderedList styleType="none" ml="0">
          <ListItem>
            <strong>Hot-Air Balloon:</strong> Take your celebrations to new
            heights with the Hot-Air Balloon special. Watch as this majestic
            balloon ascends into the sky, carrying a mesmerizing firework
            display that will leave your audience breathless.
          </ListItem>
        </UnorderedList>

        <Text>
          With these new additions to Fireworks Play, your Christmas
          celebrations are bound to be unforgettable. Customize your fireworks
          displays with the Red Firecracker Pack, Tiger Roar, Blaze Tank,
          Thunder Tank, Fury Tank, and Plane firecrackers, each offering a
          unique and mesmerizing experience. Add depth and variety to your shows
          with the Naval Mine and Ground Mine explosions, which will captivate
          your audience with their stunning effects. Finally, let the Hot-Air
          Balloon special take your fireworks displays to new heights, providing
          a breathtaking visual experience.
        </Text>

        <Text>
          So, gather your friends and family, light up the night sky, and create
          unforgettable memories with Fireworks Play Ver2023.12.1 - Merry
          Christmas. Get ready to be dazzled by the brilliance of these new
          items and share the joy of fireworks this holiday season. Happy
          holidays and enjoy the spectacular show!
        </Text>
      </Box>
    ),
    itemList: [
      "New firecrackers: Red Firecracker Pack, Tiger Roar, Blaze Tank, Thunder Tank, Fury Tank, Plane.",
      "New explosions: Naval Mine, Ground Mine.",
      "New specials: Hot-air Balloon.",
    ],
    description: "Mery Christmas!",
    thumb: "/articles/article55.PNG",
    images: [],
    video: "https://www.youtube.com/embed/s7FgM5SXlOc",
    embedYtbLink: "https://www.youtube.com/embed/s7FgM5SXlOc",
    tags: ["Update", "Fireworks Play", "Mery Christmas!"],
  },
  {
    id: 3,
    title: "FW Play update to Version 2023.8.1",
    detail: "Fireworks Play v2023.8.1 - 14 new shells",
    itemList: [
      "Horsetail 06, 07, 08",
      "Dahlia 11, 12, 13",
      "Chrysanthemum 16, 17, 18",
      "Strobe 08",
      "Ring Strobe 02",
      "Palm 04",
      "Crossette 10",
      "Butterfly 01",
    ],
    description: "Fireworks Play v2023.8.1 - 14 new shells",
    thumb: "/articles/article44.PNG",
    images: [
      "/articles/article1.PNG",
      "/articles/article2.PNG",
      "/articles/article3.PNG",
      "/articles/article4.PNG",
      "/articles/article5.PNG",
    ],
    video: "https://www.youtube.com/embed/QRu6hj8uQkY",
    embedYtbLink: "https://www.youtube.com/embed/QRu6hj8uQkY",
    tags: ["Update", "Fireworks Play"],
  },
  {
    id: 2,
    title: "FW Play update to Version 2023.7.1",
    detail: "Update date new Farm map and Molotov Cocktail",
    itemList: [" New map: Farm.", "New explosion: Molotov Cocktail."],
    description: "New Farm map is coming!!",
    thumb: "/articles/article1.PNG",
    images: [
      "/articles/article1.PNG",
      "/articles/article2.PNG",
      "/articles/article3.PNG",
      "/articles/article4.PNG",
      "/articles/article5.PNG",
    ],
    video: "https://www.youtube.com/embed/zf-VPqxbPxQ",
    embedYtbLink: "https://www.youtube.com/embed/zf-VPqxbPxQ",
    tags: ["Update", "Fireworks Play"],
  },
  {
    id: 1,
    title: "FW Play update to Version 2023.6.1",
    detail: "Update new City map and Fireworks",
    itemList: [
      "New map: Big City.",
      " Added events feature.",
      "New fireworks: July, July Rainy, Independence Day, Dragon Crossette, Devils Raise, Salute Huge Night, Liberty, Celebration.",
      "New customizable shells: Classic 37; Brocade 05, 06; Crossette 06, 07, 08; Chrysanthemum 14, 15, Salute 03.",
      "New customizable cakes: 16 Shots (No Tail).",
      "Stuff for the July 4th.",
    ],
    description: "New map Big City, events feature, items.",
    thumb: "/articles/article33.PNG",
    images: [
      "/articles/article1.PNG",
      "/articles/article2.PNG",
      "/articles/article3.PNG",
      "/articles/article4.PNG",
      "/articles/article5.PNG",
    ],
    video: " https://www.youtube.com/embed/Tq6pIjD9ogc",
    embedYtbLink: "https://www.youtube.com/embed/Tq6pIjD9ogc",
    tags: ["Update", "Fireworks Play"],
  },
];

export default articles;

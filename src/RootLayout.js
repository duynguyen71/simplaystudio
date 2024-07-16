import React, { useEffect } from "react";
import LargeWithNewsletter from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ModalCarosel } from "./components/ModalCarosel";
const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.900"
      // backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
    // bg="none"
    // backdropFilter="auto"
    // backdropInvert="80%"
    // backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  useEffect(() => {
    // setOverlay(<OverlayOne />);
    // onOpen();
  }, []);

  const navigate = useNavigate();
  return (
    <Box position={"relative"}>
      <>
        {/* <Button
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          Use Overlay one
        </Button>
        <Button
          ml="4"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
        >
          Use Overlay two
        </Button> */}
        <Modal
          size={["xs", "1xl", "3xl"]}
          isCentered
          isOpen={isOpen}
          onClose={onClose}
        >
          {overlay}
          <ModalContent padding={0}>
            <ModalHeader textColor={"red.400"}>
              🎇 Exciting News for Fireworks Player! 🎇
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody padding={2}>
              <Text>
                Now enjoy multiplayer fun! Light up the sky with friends in our
                latest release!
              </Text>
              <Box height={"5"} />
              <ModalCarosel
                images={[
                  "./multiplayer/multiplayer1.jpg",
                  "./multiplayer/multiplayer2.jpg",
                  "./multiplayer/multiplayer3.jpg",
                  "./multiplayer/multiplayer4.jpg",
                  "./multiplayer/multiplayer5.jpg",
                ]}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Box width={5} />
              <Button
                bgColor={"green"}
                onClick={() => {
                  onClose();
                  navigate(`/games/Fireworks_Play`);
                }}
              >
                Explore
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <NavBar />
      <Box maxW={"100vw"} overflow={"hidden"}>
        <Outlet />
      </Box>
      <Box mt={10} />
      <LargeWithNewsletter />
      <IconButton
        aria-label="Scroll to Top"
        position={"fixed"}
        bottom={10}
        right={10}
        onClick={scrollToTop}
        borderRadius={100}
        size={"md"}
        icon={<AiOutlineArrowUp />}
      />
    </Box>
  );
};

export default RootLayout;

import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
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
import { ModalCarosel } from "./components/ModalCarosel";
import SmallWithSocial from "./components/FooterV2";
const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.900"
    // backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onClose } = useDisclosure();
  const [overlay] = React.useState(<OverlayOne />);

  useEffect(() => { }, []);

  const navigate = useNavigate();
  return (
    <Box position={"relative"}>
      <>
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
      <SmallWithSocial />
    </Box>
  );
};

export default RootLayout;

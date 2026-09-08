import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WithAction() {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Flex
      cursor={"pointer"}
      position={"sticky"}
      top={showNavbar ? 5 : "-80px"}
      transition="top 0.3s ease-in-out"
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      zIndex={1000}
      m={"auto"}
    >
      <Flex
        cursor={"pointer"}
        onClick={() => {
          navigate("/");
        }}
        py={1}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <TypingText
          color={"red"}
          text={"Sim"}
          text2={"play"}
          text3={"Studio"}
          fontSize={["3xl", "4xl"]}
        />
      </Flex>
    </Flex>
  );
}

const TypingText = ({
  text,
  text2,
  text3,
  color,
  fontSize,
  isFaded,
  typingSpeed = 20,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isDone2, setIsDone2] = useState(false);
  const space = "\xa0";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      return clearInterval(interval);
    };
  }, [text, index, typingSpeed]);

  useEffect(() => {
    if (text3) {
      const textWithLeadingSpace = space + text3;
      const interval2 = setInterval(() => {
        if (index2 < textWithLeadingSpace.length) {
          setDisplayedText2((prev) => prev + textWithLeadingSpace[index2]);
          setIndex2((prev) => prev + 1);
        } else {
          setIsDone2(true);
          clearInterval(interval2);
        }
      }, typingSpeed);

      return () => {
        return clearInterval(interval2);
      };
    }
  }, [text3, index2, typingSpeed]);

  return (
    <>
      <Text
        cursor={"pointer"}
        display={"inline-block"}
        fontSize={fontSize || ["2xl"]}
        fontWeight={"bold"}
        color={color}
        opacity={isFaded ? 0.5 : 1}
      >
        {displayedText}
      </Text>
      {isDone && text2 ? (
        <TypingText
          color={!text ?? color}
          text={text2}
          fontSize={fontSize}
          isFaded={isFaded}
        />
      ) : (
        <></>
      )}

      {isDone2 && text3 ? (
        <TypingText
          color={!text ?? color}
          text={displayedText2}
          fontSize={fontSize}
          isFaded={isFaded}
        />
      ) : (
        <></>
      )}
    </>
  );
};

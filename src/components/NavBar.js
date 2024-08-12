import { Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WithAction() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        cursor={"pointer"}
        position={"sticky"}
        top={5}
        borderRadius={"full"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        alignSelf={"center"}
        zIndex={1000}
        m={"auto"}
        width={["98%"]}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <Flex
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
          py={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* <Text
            cursor={"pointer"}
            display={"inline-block"}
            fontSize={["xl", "xl", "xl", "2xl"]}
            fontWeight={"bold"}
          >
            Simplay Studio
          </Text> */}
          <TypingText
            color={"red"}
            // color={"#E53E3E"}
            text={"Sim"}
            text2={"play"}
            text3={"Studio"}
            speed={200}
          />
        </Flex>
      </Flex>
    </>
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
      text3 = space + text3;
      const interval2 = setInterval(() => {
        if (index2 < text3.length) {
          setDisplayedText2((prev) => prev + text3[index2]);
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
        fontSize={["2xl"]}
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

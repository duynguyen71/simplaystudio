import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

const TypingText = ({
  text,
  typeIsDone,
  setTypeIsDone,
  color,
  fontSize,
  typingSpeed = 50,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        if (setTypeIsDone) {
          setTypeIsDone(true);
        }
      }
    }, typingSpeed);
    return () => {
      console.log("heheh");
      return clearInterval(interval);
    };
  }, [text, index]);

  return (
    <>
      <Text fontWeight={"bold"} fontSize={fontSize} color={color}>
        {displayedText}
      </Text>
    </>
  );
};

export default TypingText;

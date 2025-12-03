import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";

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
      return clearInterval(interval);
    };
  }, [text, index]);

  return (
    <Box
      fontWeight={"bold"}
      fontSize={fontSize}
      color={color}
      minHeight="1.2em"
      lineHeight="1.2"
      whiteSpace="pre-wrap"
      wordBreak="break-word"
    >
      {displayedText}
      <Text as="span" opacity={0}>
        {text.slice(displayedText.length)}
      </Text>
    </Box>
  );
};

export default TypingText;

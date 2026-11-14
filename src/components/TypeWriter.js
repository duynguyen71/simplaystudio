import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { useReducedMotion } from "framer-motion";

const TypingText = ({
  text,
  color,
  fontSize,
  typingSpeed = 50,
}) => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedLength(text.length);
      return undefined;
    }

    setDisplayedLength(0);
    const interval = window.setInterval(() => {
      setDisplayedLength((currentLength) => {
        if (currentLength >= text.length) {
          window.clearInterval(interval);
          return currentLength;
        }

        return currentLength + 1;
      });
    }, typingSpeed);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion, text, typingSpeed]);

  const displayedText = text.slice(0, displayedLength);

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
        {text.slice(displayedLength)}
      </Text>
    </Box>
  );
};

export default TypingText;

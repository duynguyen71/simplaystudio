import { useRef, useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const LazyVideoComponent = ({ sourceSrc }) => {
  const containerRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box ref={containerRef}>
      {isIntersecting && (
        <>
          <Box width="100%" position={"relative"}>
            {isLoading && (
              <Spinner
                position={"absolute"}
                top={0}
                left={0}
                bottom={0}
                right={0}
                margin={"auto"}
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="red.400"
                size={["lg", "lg", "xl"]}
              />
            )}

            <video
              width="100%"
              maxw="600px"
              rounded="md"
              shadow="md"
              outline="none"
              autoPlay
              loop
              muted
              playsInline
              onLoadStart={() => {
                setLoading(true);
              }}
              onLoadedData={() => {}}
              onPlaying={() => {
                setLoading(false);
              }}
            >
              <source src={sourceSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </>
      )}
    </Box>
  );
};

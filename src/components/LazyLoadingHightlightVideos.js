import { useRef, useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { hightligtVideos } from "../data/hightlightvideos";
export const LazyLoadingHightlightVideos = ({}) => {
  const containerRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

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
    <></>
    // <Box ref={containerRef}>
    //   {isIntersecting && (
    //     <Flex
    //       alignItems={"center"}
    //       justifyContent={"center"}
    //       direction={["column", "column", "row"]}
    //       p={[2, 4, 8]}
    //     >
    //       {hightligtVideos.distribureHightlightVideos.map((s, index) => {
    //         return (
    //           <Box
    //             key={index}
    //             h={"100%"}
    //             mr={[0, 0, 4]}
    //             w={["100%", "100%", "50vw"]}
    //             mb={[2, 4, 8]}
    //             overflow={"hidden"}
    //             borderRadius={"md"}
    //           >
    //             <video autoPlay loop muted playsInline>
    //               <source src={s} type="video/mp4" />
    //             </video>
    //           </Box>
    //         );
    //       })}
    //     </Flex>
    //   )}
    // </Box>
  );
};

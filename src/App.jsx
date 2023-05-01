import {
  Box,
  Flex,
  Heading,
  Button,
  VStack,
  HStack,
  Link,
  Center,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

import { useState, useEffect } from "react";
import "./index.css";
const App = () => {
  const [isSnowing, setIsSnowing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const AnimateOnView = ({ children }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Box
      minH="100vh"
      maxW="100%"
      maxH="100%"
      color="darkBrown"
      bg="lightYellow"
    >
      <Box position="sticky" top="0" width="100%" bg="lightYellow" p="5">
        <Center>
          <HStack>
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
          </HStack>
        </Center>
      </Box>
      <Flex bg="lightYellow" padding="50px" minH="45vh">
        <VStack spacing="8">
          <Heading
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            <AnimateOnView>
              I'm Nathalie, a student at{" "}
              <Text as="span" color="yellowDark">
                Harvard
              </Text>{" "}
              who loves to develop{" "}
              <Text as="span" color="yellowDark">
                engaging and user-friendly software
              </Text>{" "}
            </AnimateOnView>
          </Heading>

          <Text
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "lg", md: "2xl" }}
          >
            Latina and first-gen are labels I wear proudly
          </Text>
          <HStack>
            <Text fontSize="3xl">🐝</Text>
            <Text fontSize="3xl">🐝</Text>
            <Text fontSize="3xl">🐝</Text>
            <Text fontSize="3xl">🐝</Text>
            <Text fontSize="3xl">🐝</Text>
          </HStack>
        </VStack>
      </Flex>
      <Flex
        bg="darkYellow"
        id="about"
        padding="50px"
        minH="45vh"
        align="center"
      >
        <VStack spacing="8">
          <Heading
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            <AnimateOnView>A little about me</AnimateOnView>
          </Heading>
          <Text
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "lg", md: "2xl" }}
          >
            I love bringing ideas and products to life. I'm a child of Cuban
            immigrants and am passionate about education and social justice. I
            love nature, gaming, and learning new things.
          </Text>
          <HStack>
            <Button
              bg="darkestYellow"
              _hover={{ bg: "lightYellow" }}
              onClick={onOpen}
            >
              Contact Me
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent marginTop="100px" bg="lightYellow">
                <ModalHeader>Contact Me</ModalHeader>
                <ModalCloseButton />
                <ModalBody margin="10px">
                  <Text fontSize="lg">Email: nathaliesacosta@gmail.com </Text>
                  <Text fontSize="lg">Phone: (+1)786-260-9890 </Text>
                  <Text fontSize="lg">LinkedIn: Nathalie Acosta</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
        </VStack>
      </Flex>
      <Flex
        bg="lightYellow"
        id="about"
        padding="50px"
        minH="45vh"
        align="center"
      >
        <VStack spacing="8">
          <Heading
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            {" "}
            <AnimateOnView>Some of my skills (hover for more!)</AnimateOnView>
          </Heading>

          <Flex wrap="wrap" justify="center" align="center">
            <Tooltip label="Advanced">
              <Badge>HTML5/CSS3</Badge>
            </Tooltip>
            <Tooltip label="Advanced">
              <Badge>Javascript</Badge>
            </Tooltip>
            <Tooltip label="Advanced">
              <Badge>React + Next.js</Badge>
            </Tooltip>
            <Tooltip label="Advanced, I use Express">
              <Badge>Node.js</Badge>
            </Tooltip>
            <Tooltip label="Proficient">
              <Badge>C/C++</Badge>
            </Tooltip>
            <Tooltip label="Proficient">
              <Badge>SQL</Badge>
            </Tooltip>
            <Tooltip label="Familiar">
              <Badge>Python</Badge>
            </Tooltip>
            <Tooltip label="Familiar">
              <Badge>Git</Badge>
            </Tooltip>
            <Tooltip label="Native">
              <Badge>English</Badge>
            </Tooltip>
            <Tooltip label="Native">
              <Badge>Spanish</Badge>
            </Tooltip>
            <Tooltip label="Proficient">
              <Badge>French</Badge>
            </Tooltip>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default App;

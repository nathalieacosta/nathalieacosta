import {
  Box,
  Flex,
  Heading,
  Avatar,
  HStack,
  Link,
  Center,
  Text,
  Badge,
  Tooltip,
  Card,
  CardBody,
  CardHeader,
  Image,
  Stack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import nathalie from "./assets/nathalie.png";
import todo from "./assets/todo.png";

import { useEffect } from "react";
import "./index.css";
const App = () => {
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
            <Link fontSize="2xl" href="#">
              Home
            </Link>
            <Link fontSize="2xl" href="#about">
              About
            </Link>
            <Link fontSize="2xl" href="#skills">
              Skills
            </Link>
            <Link fontSize="2xl" href="#projects">
              Projects
            </Link>
            <Link fontSize="2xl" href="#contact">
              Contact
            </Link>
          </HStack>
        </Center>
      </Box>
      <Flex
        bg="lightYellow"
        padding="50px 100px"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "2xl", md: "4xl" }}
          marginY="10px"
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
          marginY="10px"
        >
          Latina and first-gen are labels I wear proudly
        </Text>
        <HStack marginY="10px">
          <Text fontSize="3xl">🐝</Text>
          <Text fontSize="3xl">🐝</Text>
          <Text fontSize="3xl">🐝</Text>
          <Text fontSize="3xl">🐝</Text>
          <Text fontSize="3xl">🐝</Text>
        </HStack>
      </Flex>
      <Flex
        bg="darkYellow"
        id="about"
        padding="50px 100px"
        align="center"
        direction="column"
        justify="center"
      >
        <Heading
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "2xl", md: "4xl" }}
          marginY="10px"
        >
          <AnimateOnView>A little about me</AnimateOnView>
        </Heading>
        <Text
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "lg", md: "2xl" }}
          marginY="10px"
        >
          I love bringing ideas and products to life. I'm a child of Cuban
          immigrants and am passionate about education and social justice. I
          love nature, gaming, and learning new things.
        </Text>
        <Avatar size="xl" src={nathalie} alt="Nathalie" marginY="10px" />
      </Flex>
      <Flex
        bg="lightYellow"
        id="skills"
        padding="50px 100px"
        align="center"
        justify="center"
        direction="column"
      >
        <Heading
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "2xl", md: "4xl" }}
          marginY="10px"
        >
          {" "}
          <AnimateOnView>Some of my skills (hover for more!)</AnimateOnView>
        </Heading>

        <Box alignItems="center">
          <Box>
            <Tooltip label="Advanced">
              <Badge>HTML5/CSS3</Badge>
            </Tooltip>
            <Tooltip label="Advanced">
              <Badge>Javascript</Badge>
            </Tooltip>
            <Tooltip label="Advanced">
              <Badge>React + Next.js</Badge>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Advanced, I use Express">
              <Badge>Node.js</Badge>
            </Tooltip>
            <Tooltip label="Proficient">
              <Badge>C++</Badge>
            </Tooltip>
            <Tooltip label="Proficient">
              <Badge>SQL</Badge>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Familiar">
              <Badge>Python</Badge>
            </Tooltip>
            <Tooltip label="Familiar">
              <Badge>Git</Badge>
            </Tooltip>
            <Tooltip label="Familliar">
              <Badge>C</Badge>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Native">
              <Badge>English</Badge>
            </Tooltip>
            <Tooltip label="Native">
              <Badge>Spanish</Badge>
            </Tooltip>
            <Tooltip label="Proficient">
              <Badge>French</Badge>
            </Tooltip>
          </Box>
        </Box>
      </Flex>
      <Flex
        bg="darkYellow"
        id="projects"
        padding="50px 100px"
        align="center"
        justify="center"
        direction="column"
      >
        <Heading
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "2xl", md: "4xl" }}
          marginY="10px"
        >
          <AnimateOnView>Projects I'm working on</AnimateOnView>
        </Heading>
        <HStack marginY="10px">
          <Card
            bg="lightestYellow"
            borderRadius="10px"
            color="darkBrown"
            maxW="sm"
            align="center"
            direction="column"
            justify="center"
          >
            <CardHeader fontSize="3xl" fontWeight="bold">
              Node.js Tutorial
            </CardHeader>
            <CardBody>
              <Image
                borderRadius="lg"
                src={todo}
                alt="Todo"
                width="350px"
                align="center"
              ></Image>
              <Stack mt="6" spacing="3">
                <Text>
                  I created a tutorial on how to create a todo app using
                  Node.js, Express, and SQLite. This was for a workshop I did
                  for CS50 and was attended by students across the world!
                </Text>
                <Link href="https://github.com/nathalieacosta/todo-final">
                  Github
                </Link>
              </Stack>
            </CardBody>
          </Card>
        </HStack>
      </Flex>
      <Flex
        bg="lightYellow"
        id="contact"
        padding="50px 100px"
        align="center"
        justify="center"
        direction="column"
      >
        <Heading
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "2xl", md: "4xl" }}
          marginY="10px"
        >
          <AnimateOnView>Contact me</AnimateOnView>
        </Heading>
        <Text
          width={{ base: "100%", md: "80%" }}
          fontSize={{ base: "lg", md: "2xl" }}
          marginY="10px"
        >
          I'm always open to new opportunities and collaborations! Feel free to
          reach out to me with{" "}
          <Link href="mailto:nathaliesacosta@gmail.com">email</Link> or on{" "}
          <Link href="https://www.linkedin.com/in/nathalieacosta/">
            LinkedIn
          </Link>
          .
        </Text>
      </Flex>
    </Box>
  );
};

export default App;

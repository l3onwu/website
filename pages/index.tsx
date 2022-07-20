import { chakra, Heading, Text, Box, Flex, Stack } from "@chakra-ui/react";
import { AiOutlineCode } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import Image from "next/image";
import BioSection from "../components/Bio";
import ProjectSection from "../components/ProjectSection";
import Transition from "../components/Transition";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Qualification = ({ icon, degree }) => {
  return (
    <Stack direction="row" align="center">
      {icon}
      <Text fontSize="14px">{degree}</Text>
    </Stack>
  );
};

export default function Home() {
  return (
    <Box pt="30px" mb="100px">
      {/* Banner */}
      <Box bgColor="whitesmoke" borderRadius="10px" p="10px" mb="30px">
        <Text textAlign="center">
          Hello! I am a full-stack developer based in 🇦🇺 Melbourne, Australia
        </Text>
      </Box>

      {/* Meta details */}
      <Transition lag={0.5}>
        <Flex direction="row" justify="space-between">
          <Box mb="50px">
            <Heading fontFamily="Ubuntu" fontWeight="700" fontSize="48px">
              Leon Wu
            </Heading>
            <Qualification
              icon={<FaRegNewspaper />}
              degree="BA. Media & Anthropology (Columbia University)"
            />
            <Qualification
              icon={<AiOutlineCode />}
              degree="Master of Information Technology (University of Melbourne)"
            />
          </Box>
          {/* Profile Image */}
          <Box
            borderRadius="100%"
            width="100px"
            height="100px"
            overflow="hidden"
            style={{
              background:
                "linear-gradient(to right, #743ad5, #d53a9d) border-box",
              border: "4px solid transparent",
            }}
          >
            <ProfileImage
              alt="Profile image"
              src="/static/profile.jpg"
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>
      </Transition>

      {/* Bio */}
      <Transition lag={1}>
        <Box mb="50px">
          <BioSection />
        </Box>
      </Transition>

      {/* Projects */}
      <Transition lag={2}>
        <Box>
          <ProjectSection />
        </Box>
      </Transition>
    </Box>
  );
}

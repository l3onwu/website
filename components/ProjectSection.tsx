import SectionHeading from "./SectionHeading";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { FaRainbow } from "react-icons/fa";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

export default function ProjectSection() {
  return (
    <>
      {/* Header */}
      <Box mb="30px">
        <SectionHeading>Projects</SectionHeading>
      </Box>

      {/* Projects grid */}

      {/* Skyshot */}
      <Flex direction="row" wrap="wrap">
        <LinkBox>
          <Box
            px="40px"
            py="40px"
            textAlign="center"
            mr="20px"
            mb="20px"
            borderRadius="20px"
            bgColor="#171819"
            _hover={{
              cursor: "pointer",
              background: "#3181CE",
              textStyle: "none",
            }}
            transition="0.2s background ease-in"
          >
            <LinkOverlay href={"https://skyshot.vercel.app/"} isExternal />
            <Stack direction="row" align="center">
              <FaRainbow color="white" />
              <Text
                color="white"
                fontWeight="bold"
                fontFamily="Oswald"
                fontSize="24px"
              >
                SKYSHOT
              </Text>
            </Stack>
            <Text color="white" fontSize="14px">
              Snapshot of your weather
            </Text>
          </Box>
        </LinkBox>
      </Flex>
    </>
  );
}

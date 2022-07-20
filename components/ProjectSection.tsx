import SectionHeading from "./SectionHeading";
import { Box, Flex } from "@chakra-ui/react";

export default function ProjectSection() {
  return (
    <>
      {/* Header */}
      <Box mb="20px">
        <SectionHeading>Projects</SectionHeading>
      </Box>

      {/* Projects grid */}
      <Flex direction="row" wrap="wrap">
        <Box
          px="80px"
          py="50px"
          bgColor="whitesmoke"
          textAlign="center"
          mr="20px"
          mb="20px"
          borderRadius="20px"
        >
          Coming soon
        </Box>
      </Flex>
    </>
  );
}

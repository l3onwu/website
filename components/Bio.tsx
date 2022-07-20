import SectionHeading from "./SectionHeading";
import { Text, Box } from "@chakra-ui/react";

export default function BioSection() {
  return (
    <>
      {/* Header + description*/}
      <Box mb="20px">
        <SectionHeading>Bio</SectionHeading>
        <Text>
          I started my career as a commercial video editor in New York, before
          applying my creativity to software dev at the University of Melbourne.
          When not coding, I enjoy playing tennis and jazz piano (but not at the
          same time).
        </Text>
      </Box>
    </>
  );
}

import { Heading } from "@chakra-ui/react";

export default function SectionHeading({ children }) {
  return (
    <Heading
      fontSize="20px"
      fontFamily="Ubuntu, Roboto, sans-serif"
      fontWeight="medium"
      textDecoration="underline"
      style={{
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 10,
      }}
    >
      {children}
    </Heading>
  );
}

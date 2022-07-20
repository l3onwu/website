import {
  Box,
  Container,
  Flex,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      width="100%"
      m="0px"
      bgColor="#ffffff40"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container maxW={"container.md"} p="10px">
        <Flex justify="space-between" height="30px" align="center">
          <Stack direction="row" align="baseline" spacing="40px">
            {/* Hero */}
            <NextLink href="/" passHref>
              <Link
                fontWeight="500"
                fontSize="20px"
                fontFamily="Ubuntu"
                style={{
                  background: "-webkit-linear-gradient(#743ad5, #d53a9d)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                L3on Wu
              </Link>
            </NextLink>

            {/* Main nav links */}
            <Stack
              direction="row"
              align="center"
              spacing="25px"
              display={{ base: "none", md: "flex" }}
            >
              <Link
                href="https://github.com/l3onwu"
                isExternal
                _hover={{ color: "#e57200" }}
              >
                <Stack direction="row" align="center" spacing="4px">
                  <AiOutlineGithub size="15px" />
                  <Text fontFamily="Ubuntu">Github</Text>
                </Stack>
              </Link>
            </Stack>
          </Stack>

          {/* Secondary links + Hambuger */}
          <Box>
            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<FaHamburger />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>Bio</MenuItem>
                  </NextLink>
                  <MenuItem
                    as={Link}
                    href="https://github.com/l3onwu"
                    isExternal
                  >
                    <Stack direction="row" align="center" spacing="5px">
                      <AiOutlineGithub size="15px" />
                      <Text>Github</Text>
                    </Stack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

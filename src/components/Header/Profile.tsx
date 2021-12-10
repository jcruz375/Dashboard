import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Cruz</Text>
          <Text color="gray.300" fontsize="small">
            joaocruz375@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="João Cruz"
        src="https://github.com/jcruz375.png"
      />
    </Flex>
  )
}
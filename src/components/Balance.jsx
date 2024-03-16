import { Box, Card, Flex, Text } from "@radix-ui/themes";

const Balance = () => {
  return (
    <Card size="2" style={{ width: 500, backgroundColor: "#e7f5ff"}}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex align="center" justify="between">
          <button className="text-white font-bold bg-blue-400 py-1 px-4 mb-2 rounded-2xl">
              Claim Reward
            </button>

            {/* <Text as="div" weight="bold">
            ETH
            </Text> */}
          </Flex>

          <Flex justify={"between"} align={"center"} ml={"2"}>
            <Text>Reward</Text>

            <Text as="div" weight="bold">
              ETH
            </Text>
          </Flex>
          {/* <Flex align="center">
            <Text>Reward</Text>
            <hr />
          </Flex> */}
          
        </Box>
      </Flex>
    </Card>
  );
};

export default Balance;
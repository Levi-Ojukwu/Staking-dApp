import { Box, Card, Flex, Text } from "@radix-ui/themes";

const Stats = () => {
  return (
    <Card size="2" style={{ width: 500, backgroundColor: "#e7f5ff"}} className="mt-9 mb-5">
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"} gap={"2"}>
            <Text as="div" weight="bold">
              Pools
            </Text>
            <Text as="div">
              0
            </Text>
          </Flex>
          <Flex align="center" justify="between" mt={"2"}>
            <div>
              <Text weight={"bold"}>You will receive</Text>
              {/* <Text>APR</Text> */}
            </div>
            <Text>NO. of Stakers</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Stats;
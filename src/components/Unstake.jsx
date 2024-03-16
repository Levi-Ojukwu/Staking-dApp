import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

const Unstake = () => {
  const [amount, setAmount] = useState(0);

  return (
    <Card size="2" style={{ width: 500, height: 188, backgroundColor: "#e7f5ff" }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
            Unstake Token
            </Text>
            <TextField.Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Voter's Address"
            />
            <button
              className="text-white bg-blue-400 py-1 px-4 rounded-2xl"
              // onClick={() => handleVote(id)}
            >
              Unstake
            </button>
          </Flex>
          {/* <Flex align="center" justify="between" mt="5">
            <Text >You will receive</Text>
            <Text weight="bold">MONIE</Text>
          </Flex>
          <Flex align="center" justify="between" mt="1">
            <Text>Staking APR</Text>
            <Text weight="bold">0.5% Daily</Text>
          </Flex> */}
        </Box>
      </Flex>
    </Card>
  );
};

export default Unstake;
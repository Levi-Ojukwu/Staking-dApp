import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/useStake";

const Stake = () => {
  const [amount, setAmount] = useState(0);
  const [poolId, setPoolId] = useState(0);
  const handleStake = useStake(poolId, amount);

  return (
    <Card
      size="2"
      style={{ width: 500, height: 188, backgroundColor: "#e7f5ff"}}
      align="center"
      justify="center"
    >
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              Stake Token
            </Text>
            <TextField.Input
            className="rounded-2xl"
              value={poolId}
              onChange={(e) => setPoolId(e.target.value)}
              placeholder="Enter Pool ID"
            />
            <TextField.Input
            className="rounded-2xl"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Stake Amount"
            />
            <button
              className="text-white bg-blue-400 py-1 px-4 rounded-2xl"
              onClick={handleStake}
            >
              Stake
            </button>
          </Flex>
          <Flex align="center" justify="between" mt="8">
            <Text>Staking Approval</Text>
            <Text weight="bold">0.5% Daily</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Stake;
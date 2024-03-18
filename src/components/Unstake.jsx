import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useUnstake from "../hooks/useUnstake";

const Unstake = () => {
  const [poolID, setPoolID] = useState(0);
  const unStake = useUnstake(poolID)
  

  return (
    <Card size="2" style={{ width: 500, height: 188, backgroundColor: "#e7f5ff" }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
            Unstake Token
            </Text>
            <TextField.Input
              value={poolID}
              onChange={(e) => setPoolID(e.target.value)}
              placeholder="Enter Voter's Address"
            />
            <button
              className="text-white bg-blue-400 py-1 px-4 rounded-2xl"
              onClick={unStake}
            >
              Unstake
            </button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Unstake;
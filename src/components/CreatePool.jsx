import {
  Box,
  Button,
  Card,
  Flex,
  Text,
  TextField,
  TextFieldRoot,
} from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";
import usePools from "../hooks/usePool";

const CreatePool = () => {
  const [rate, setRate] = useState(0);
  // const [poolId, setPoolId] = useState(0);

  const handleCreatePool = useCreatePool(rate);

  const handleUsePool = usePools();

  return (
    <div className="flex gap-4">
      <Card
        size="2"
        style={{ width: 450, height: 150, backgroundColor: "#EFEFEF" }}
      >
        <div className="text-xl font-bold pb-3 rounded-2xl">Create Pool</div>
        <div>
          <Box width={"100%"}>
            <div className="flex flex-col gap-4 justify-item-center">
              <input
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Rate"
                className="w-full border rounded-2xl py-1 px-2"
              />
              <button
                onClick={() => handleCreatePool()}
                className="text-white bg-blue-400 py-1 px-4 rounded-2xl w-full"
              >
                Create Pool
              </button>
              {/* <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleUsePool(setPoolId())}
            >
              Get Pools
            </button> */}
            </div>
          </Box>
        </div>
      </Card>

      {/* <Card
        size="3"
        style={{ width: 500, height: 300, backgroundColor: "#EFEFEF" }}
        className="mt-5 mb-5"
      >
        <Flex align="center" direction={"column"} gap={"4"} justify={"center"}>
          <Box width={"100%"} className="flex flex-col justify-center">
            <Flex
              direction={"column"}
              gap={"4"}
              justify={"center"}
              height={"9"}
            >
              <TextFieldRoot>
                <TextField.Input
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Rate"
                />
              </TextFieldRoot>
              <button
                onClick={() => handleCreatePool()}
                className="text-white bg-blue-500 py-1 px-4 rounded-md w-full"
              >
                Create Pool
              </button>
              <button
                className="text-white bg-blue-600 py-1 px-4 rounded-md"
                onClick={() => handleUsePool(setPoolId())}
              >
                Get Pools
              </button>
            </Flex>
            <Flex align="center">
              <div>
                <Text>You will receive</Text>
                <Text>APR</Text>
                <Text>{poolId}</Text>
              </div>
            </Flex>
          </Box>
        </Flex>
      </Card> */}
    </div>
  );
};

export default CreatePool;




















// import { Card, Box, Flex, Button, Text, TextField } from "@radix-ui/themes";
// import useCreatePool from "../hooks/useCreatePool";
// import { useState } from "react";
// import usePool from "../hooks/usePool"
// import "../output.css"

// const CreatePool = () => {
//   const [rate, setRate] = useState(0);
//   const handlePool = useCreatePool(rate);
//   return (
//     <Card size="" style={{ width: 425 }} >
//       <Flex gap="" align="center">
//         <Box width={"100%"} >
//           <Flex direction="column" gap="3">
//             <label>
//               <Text as="div" size="4" mb="1" ml="2" weight="bold">
//                 Reward Days
//               </Text>
//               <TextField.Input
//                 placeholder="Enter pool rate"
//                 value={rate}
//                 onChange={(e) => setRate(e.target.value)}
//               />
//             </label>
//             <button className="text-white bg-blue-400 py-1 px-4 rounded-md" onClick={() => handlePool}>Create Pool</button>
//           </Flex>
//         </Box>
//       </Flex>
//     </Card>
//   );
// };

// export default CreatePool;





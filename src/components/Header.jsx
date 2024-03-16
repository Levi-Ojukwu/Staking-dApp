import { Flex } from "@radix-ui/themes";

export default function Header() {
  return (
    // <div className="flex justify-between items-center">
      
      <Flex gap={"8"} align={"center"} justify={"between"} mb={'5'}>
      <div className="text-5xl text-blue-400 font-semibold italic">$takeIT</div>
        <w3m-button />
      </Flex>
    // </div>
  );
}
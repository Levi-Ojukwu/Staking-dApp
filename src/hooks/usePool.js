import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
// import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import abi from "../constants/ABIs/contractAbi.json"

const usePools = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [data, setData] = useState(0)
  
  let poolIdntty;


  useEffect(() => {
   (async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong Network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
        const contract = new ethers.Contract(
          import.meta.env.VITE_staking_contract_address,
          abi,
          signer
        );
  
        try {
          const transaction = await contract.id();
          poolIdntty = Number(transaction);
  
          setData(poolIdntty);
        } catch (error) {
          console.log(error);
        }
    }
   )();
  }, [chainId]
  )
  console.log(data)
return data
}

export default usePools;
   
import { useCallback } from "react";
import { ethers } from "ethers";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
// import contractAbi from "../constants/ABIs/contractAbi.json";
// import { toast } from "react-toastify";

import { StakingPool } from "../constants/contracts";

const useUnstake = (poolID) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async () => {
      if (!poolID) {
        console.log("Invalid Pool ID");
        return;
      }

      if (!isSupportedChain(chainId)) {
        console.log("Wrong Network");
        return;
      }

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const StakingContract = StakingPool(signer);

      try {
        console.log("unStaking")
        const unstakeTx = await StakingContract.unstake(poolID);
        console.log(unstakeTx)
        const receipt = await unstakeTx.wait();

        console.log("receipt: ", receipt);

        if (receipt.status) {
          return console.log("Unstake successfull!");
        }

        console.log("Unstake failed");
      } catch (err) {
        console.error(err);
        console.log("An error occurred while unstaking");
      }
    },
    [chainId, walletProvider, poolID]
  );
};

export default useUnstake;
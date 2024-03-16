import { ethers } from "ethers";
import stakingPoolAbi from "./ABIs/contractAbi.json";
import tokensAbi from "./ABIs/tokenAbi.json";

export const StakingPool = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_staking_contract_address,
    stakingPoolAbi,
    providerOrSigner
  );

export const RewardToken = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_RTK_contract_address,
    tokensAbi,
    providerOrSigner
  );

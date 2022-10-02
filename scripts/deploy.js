// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");
// const { Swap, WBNB, ValueLiquidityFactory } = require('./deployedAddress.json');

// StakePoolController proxy admin: 0xEc43E53a4a0CA6b1858E11c9ADFe2bfa68aB6387
// RewardPool proxy admin: 0xEc43E53a4a0CA6b1858E11c9ADFe2bfa68aB6387
// reserveFundV2 proxy admin: 0xEc43E53a4a0CA6b1858E11c9ADFe2bfa68aB6387
// ProfitSharingRewardPool proxy admin: 0xEc43E53a4a0CA6b1858E11c9ADFe2bfa68aB6387
async function main() {

  // const RewardPool = await ethers.getContractFactory("RewardPool");
  // const ValueLiquidFormula = await ethers.getContractFactory("ValueLiquidFormula");
  // const ValueLiquidFactory = await ethers.getContractFactory("ValueLiquidFactory");
  // const StakePoolController = await ethers.getContractFactory("StakePoolController");
  // const ValueLiquidRouter = await ethers.getContractFactory("ValueLiquidRouter");
  // const MathUtils = await ethers.getContractFactory("MathUtils");
  // const ProtocolFeeRemover = await ethers.getContractFactory("ProtocolFeeRemover");
  // const ReserveFundV2 = await ethers.getContractFactory("ReserveFundV2");
  // const ProfitSharingRewardPool = await ethers.getContractFactory("ProfitSharingRewardPool");
  //WaultSwapFactory
  // const WaultSwapFactory = await ethers.getContractFactory("WaultSwapFactory");
  // const VSafeVaultMaster = await ethers.getContractFactory("VSafeVaultMaster");
  // const VSafeVault = await ethers.getContractFactory("VSafeVault"); // VSafeVaultController
  const VSafeVaultController = await ethers.getContractFactory("VSafeVaultController"); // VSafeVaultController

  // const rewardPool = await upgrades.deployProxy(RewardPool, [Swap, 23294248], { initializer: "initialize" });
  // await rewardPool.deployed();

  // console.log("rewardPool is deployed to:", rewardPool.address);

  // const valueLiquidFormula = await ValueLiquidFormula.deploy();

  // await valueLiquidFormula.deployed();

  // console.log("valueLiquidFormula is deployed to:", valueLiquidFormula.address);

  // const valueLiquidFactory = await ValueLiquidFactory.deploy(valueLiquidFormula.address);

  // await valueLiquidFactory.deployed();

  // console.log("valueLiquidFactory is deployed to:", valueLiquidFactory.address);

  // const stakePoolController = await upgrades.deployProxy(StakePoolController, [factory], { initializer: "initialize" });
  // await stakePoolController.deployed();

  // console.log("stakePoolController is deployed to:", stakePoolController.address);

  // const valueLiquidRouter = await ValueLiquidRouter.deploy(factory, StakePoolController, WBNB);

  // await valueLiquidRouter.deployed();

  // console.log("valueLiquidRouter is deployed to:", valueLiquidRouter.address);


  // const mathLib = await MathUtils.deploy();
  // await mathLib.deployed();

  // const SwapUtils = await ethers.getContractFactory("SwapUtils" , {
  //     libraries: {
  //       MathUtils: mathLib.address,
  //     },
  //   });

  // const swapUtils = await SwapUtils.deploy();
  // await swapUtils.deployed();

  // const SwapCreator = await ethers.getContractFactory("SwapCreator", {
  //   // signer: signers[0],
  //   libraries: {
  //     SwapUtils: swapUtils.address,
  //   },
  // });

  // const swapCreator = await SwapCreator.deploy();

  // await swapCreator.deployed();

  // console.log("Swap Creator is deployed to:", swapCreator.address);

  // const Swap = await ethers.getContractFactory("Swap", {
  //   // signer: signers[0],
  //   libraries: {
  //     SwapUtils: swapUtils.address,
  //   },
  // });

  // const protocolFeeRemover = await ProtocolFeeRemover.deploy();

  // await protocolFeeRemover.deployed();

  // console.log("protocolFeeRemover is deployed to:", protocolFeeRemover.address);
  

  // const reserveFundV2 = await upgrades.deployProxy(ReserveFundV2, 
  //   [VBswap, WBNB, BUSD, `${protocolFeeRemover.address}`, pancake,valueLRouter, formular], 
  //   { initializer: "initialize" }
  // );
  // await reserveFundV2.deployed();

  // console.log("reserveFundV2 is deployed to:", reserveFundV2.address);

  
  // const profitSharingRewardPool = await upgrades.deployProxy(ProfitSharingRewardPool, 
  //   [ValueLiquidPair_vbswap_BNB_Pair, WBNB, BUSD, reserve, 23308802], 
  //   { initializer: "initialize" }
  // );
  // await profitSharingRewardPool.deployed();

  // console.log("profitSharingRewardPool is deployed to:", profitSharingRewardPool.address);

  // const waultSwapFactory = await WaultSwapFactory.deploy();

  // await waultSwapFactory.deployed();

  // console.log("waultSwapFactory is deployed to:", waultSwapFactory.address);

  // const baseToken = "0x4398bF44C2B8bDB492B427a041a4674F65eFe9A9"

  // const vSafeVaultMaster = await VSafeVaultMaster.deploy();

  // await vSafeVaultMaster.deployed();

  // console.log("vSafeVaultMaster is deployed to:", vSafeVaultMaster.address);

  // const vSafeVault = await VSafeVault.deploy();

  // await vSafeVault.deployed();

  // console.log("vSafeVault is deployed to:", vSafeVault.address);

  // console.log("vSafeVaultMaster is deployed to:", vSafeVaultMaster.address);

  const vSafeVaultController = await VSafeVaultController.deploy();

  await vSafeVaultController.deployed();

  console.log("vSafeVault is deployed to:", vSafeVaultController.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

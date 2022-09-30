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

async function main() {

  // const RewardPool = await ethers.getContractFactory("RewardPool");
  // const ValueLiquidFormula = await ethers.getContractFactory("ValueLiquidFormula");
  // const ValueLiquidFactory = await ethers.getContractFactory("ValueLiquidFactory");
  // const StakePoolController = await ethers.getContractFactory("StakePoolController");
  // const ValueLiquidRouter = await ethers.getContractFactory("ValueLiquidRouter");
  const MathUtils = await ethers.getContractFactory("MathUtils");

  // const rewardPool = await upgrades.deployProxy(RewardPool, [Swap, 23294248], { initializer: "initialize" });
  // await rewardPool.deployed();

  // console.log("rewardPool is deployed to:", rewardPool.address);

  // const valueLiquidFormula = await ValueLiquidFormula.deploy();

  // await valueLiquidFormula.deployed();

  // console.log("valueLiquidFormula is deployed to:", valueLiquidFormula.address);

  // const valueLiquidFactory = await ValueLiquidFactory.deploy(valueLiquidFormula.address);

  // await valueLiquidFactory.deployed();

  // console.log("valueLiquidFactory is deployed to:", valueLiquidFactory.address);

  // const factory = "0x76B0398a038622230DA6A5ebfeF42cBBB3d7a263"
  // const stakePoolController = await upgrades.deployProxy(StakePoolController, [factory], { initializer: "initialize" });
  // await stakePoolController.deployed();

  // console.log("stakePoolController is deployed to:", stakePoolController.address);

  // const StakePoolController = "0x3F3337cD8262F3246875C0e4BA79d9b767c0c5DC"
  // const WBNB = "0x2383F69a911Bc80afCaeeFB5B67649D1A078Cae7"
  // const valueLiquidRouter = await ValueLiquidRouter.deploy(factory, StakePoolController, WBNB);

  // await valueLiquidRouter.deployed();

  // console.log("valueLiquidRouter is deployed to:", valueLiquidRouter.address);


  const mathLib = await MathUtils.deploy();
  await mathLib.deployed();

  const SwapUtils = await ethers.getContractFactory("SwapUtils" , {
      libraries: {
        MathUtils: mathLib.address,
      },
    });

  const swapUtils = await SwapUtils.deploy();
  await swapUtils.deployed();

  const SwapCreator = await ethers.getContractFactory("SwapCreator", {
    // signer: signers[0],
    libraries: {
      SwapUtils: swapUtils.address,
    },
  });

  const swapCreator = await SwapCreator.deploy();

  await swapCreator.deployed();

  console.log("Swap Creator is deployed to:", swapCreator.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

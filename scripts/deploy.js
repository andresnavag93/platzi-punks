// deploy is an async function
const deploy = async () => {
  // getSigners() brings the information we bring from our private key
  // deployer is an object that allows us to deploy contracts to the network that we have configured
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  // We define PlatziPunks in the context
  const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
  // Instance of the contract deployed
  const deployed = await PlatziPunks.deploy(10000);

  console.log("Platzi Punks is deployed at:", deployed.address);
};

// Calling deploy function
deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

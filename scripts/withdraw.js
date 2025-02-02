const { getNamedAccounts, ethers } = require("hardhat")
async function main() {
    //
    const { deployer } = await getNamedAccounts()
    const fundMe = ethers.getContract("FundMe", deployer)
    console.log("Funding...")
    const txResponse = await fundMe.withdraw()
    await txResponse.wait(1)
    console.log("Got it back!")
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })

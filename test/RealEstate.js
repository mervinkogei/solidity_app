const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('RealEstate', () =>{
    let realEstate, escrow
    let seller, deployer
    let nftID = 1
    
    beforeEach( async() =>{
     // Setup Accounts
     accounts = await ethers.getSigners()
     deployer = accounts[0]
     seller = deployer

    //Load RealEstate
    const RealEstate = await ethers.getContractFactory('RealEstate')
    const Escrow = await ethers.getContractFactory('Escrow')

    //Deploy Contracts
    realEstate = await RealEstate.deploy()
    escrow = await Escrow.deploy()

    })

    describe('Deployment', async ()=>{
        it('Sends a NFT to the seller / deployer', async () =>{
            expect(await realEstate.ownerOf(nftID)).to.equal(seller.address)
        })
    })

})
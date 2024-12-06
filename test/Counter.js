const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('Counter', () => {
    let counter;

    beforeEach( async() => {
        const Counter = await ethers.getContractFactory('Counter')
         counter = await Counter.deploy('My Counter', 1)
    });

    describe('Deplyoment', () => {
        it('set the initial count', async () =>{
            expect(await counter.count()).to.equal(1)
          })
      
          it('set the initial name', async () =>{
              expect(await counter.name()).to.equal('My Counter')
            })
    })

    describe('Counting', () =>{
        it('increments the counter', async ()=>{
            let transaction = await counter.increment()

            await transaction.wait()
            expect(await counter.count()).to.equal(2)
        })
    })
})
//Test basics
// Policy: Arrange, Act, Assert
// Arrange - setup, arranging/getting dependencies
// Act - what you're testing
// Assert - check the result against what you expect

//Imports
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp); //associate the module with chai

describe('Testing process',() => {

    //Hooks - allow you to setup & clean your tests

    //before - runs once before ALL tests (beforClass)
    //after - runs once after ALL tests (afterClass)
    //beforeEach - run before EACH test
    //afterEach - run after EACH test

    let num = 0;
    before(()=>{
        //Arrange
        num = 5;
    })

    it('Addition',()=>{
        //Act
        num += 2;
        //Assert
        expect(num).to.equal(7);

    })


})
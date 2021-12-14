//Imports
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp); //associate the module with chai

//Link to the index file
const app = require('../index')

describe('Tuesday route',()=>{
    it('Test route',(done)=>{
        //Arrange - tell chai to use the server in index.js
        chai.request(app)

        //Act - get request
        .get("/tuesday")

        .end((error,response)=>{
            if(error){
                console.log('Oh no...')
                done(error);
            }

            //Assert - check the response against what I expect
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            expect(response).to.have.property('text', 'Today is Tuesday!')
            done();
        })
    })
})
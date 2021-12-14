//Imports
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Movie } = require('../db')

chai.use(chaiHttp); //associate the module with chai

//Link to the index file
const app = require('../index')

describe('Film routes',()=>{

    //test objects
    const createFilm = new Movie({
        title: 'SAO',
        genre: 'Anime'
    });

    const testFilm = new Movie({
        title: 'Iron man 3',
        genre: 'Action'
    });

    before((done)=>{
        chai.request(app).post("/create").send(testFilm).end(()=>{
            done();
        })
    })

    //test CREATE
    it('CREATE test',(done)=>{
        //Arrange
        chai.request(app)

        //Act
        .post("/create")

        //request body
        .send(createFilm)

        //async function
        .end((err,res)=>{
            if(err){
                done(err);
            }
            //Assert
            expect(err).to.be.null;
            expect(res).to.not.be.undefined;
            expect(res).to.have.status(201);
            expect(res).to.have.property('text',`${createFilm} has been added successfully!`)
            done();
        })
    })

    //test GET ALL
    it('GET ALL test',(done)=>{
        //Act
        chai.request(app)
        //Arrange
        .get("/getAll")
        .end((err,res)=>{
            if(err){
                done(err);
            }
            //Assert
            //Body is equal to the entire response
            const body = res.body;
            expect(res).to.have.status(200);
            expect(body).to.not.be.null;

            //map out every object within my response body
            body.map((movie)=>{
                //check if we're getting an object
                expect(movie).to.be.a("object");
                //check if the object contains the key title
                expect(movie).to.contain.keys("title");
                //check if title is of type string
                expect(movie.title).to.be.a("string");
            });
            done();
        })
    })

    //test DELETE
    it('DELETE test',(done)=>{
        //Arrange
        chai.request(app)
        //Act
        .delete(`/delete/${testFilm.title}`)
        .end((err,res)=>{
            if(err){
                done(err);
            }
            //Assert
            expect(err).to.be.null;
            expect(res).to.not.be.undefined;
            expect(res).to.have.status(202);
            expect(res).to.have.property('text',`${testFilm.title} movie successfully deleted`);
            done();
        })
    })


})
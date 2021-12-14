const router = require('express').Router();

// Adding a movie item to routes
const {Movie} = require('../db.js');

router.get('/', (req, res) => {
    console.log("Hello World");
    res.send("QA CINEMA")
})

// CREATE
router.post("/create", (req, res, next) => {
    // Make a record out of movie constructor, filling it with request body
    const record = new Movie(req.body);
    console.log(record)
    //record.save adds object to db
    record.save()
        .then((result) => {
            res.status(201).send(`${result} has been added successfully!`)
    }).catch((err) => next(err))
})

// READ
router.get("/getAll", (req, res, next) => {
    Movie.find((err, movies) => {
        if (err) {
            next(err);
        } else{
            res.send(movies);
        };
    });
});

// DELETE
router.delete("/delete/:title", (req, res, next) => {
    title = req.params.title;
    Movie.deleteOne({title: title}, (err) => {
        if(err){
            next(err);
        }
        res.status(202).send(`${title} movie successfully deleted`);
    });
});

module.exports = router;
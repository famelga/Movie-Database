const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);

app.post('/api/add-movie', (req, res) =>{
    res.json(`${req.method} request received to add a review.`);
    console.log(`${req.method} request received to add a review.`);
});

app.get('/api/movies', (req, res) => {
    res.json(`${req.method} request received to retrieve movies`);
    console.info(`${req.method} request received to retrieve movies`);
  });

app.delete('/api/movie/:id', (req, res) => {
    db.query(`DELETE FROM movies WHERE id = ?`, req.params, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
    });
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

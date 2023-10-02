const router = require('express').Router();
// const authorize = require('../middleware/authorize');
let FlappyScoreBoard = require('../models/flappyscoreboard.model');
let RunScoreBoard = require('../models/runscoreboard.model');
let RunTwoScoreBoard = require('../models/runtwoscoreboard.model');
let TetrisScoreBoard = require('../models/tetrisscoreboard.model');
let SteamScoreBoard = require('../models/steamscoreboard.model');
let AsteroidScoreBoard = require('../models/asteroidscoreboard.model');

router.route('/').get((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(
    '<h1>/flappy for FlappyScoreBoard<br/>/run for RunScoreBoard<br/>/run-two for RunTwoScoreBoard<br/>/tetris for TetrisScoreBoard<br/>/steampunk for SteamScoreBoard<br/>/astroids for AsteroidScoreBoard</h1>'
  );
});

router.route('/flappy').get((req, res) => {
  FlappyScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/flappy/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newFlappyScoreBoard = new FlappyScoreBoard({ name, score, img });

  newFlappyScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/run').get((req, res) => {
  RunScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/run/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newRunScoreBoard = new RunScoreBoard({ name, score, img });

  newRunScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/run-two').get((req, res) => {
  RunTwoScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/run-two/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newRunTwoScoreBoard = new RunTwoScoreBoard({ name, score, img });

  newRunTwoScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/tetris').get((req, res) => {
  TetrisScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/tetris/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newTetrisScoreBoard = new TetrisScoreBoard({ name, score, img });

  newTetrisScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/steampunk').get((req, res) => {
  SteamScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/steampunk/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newSteamScoreBoard = new SteamScoreBoard({ name, score, img });

  newSteamScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/asteroids').get((req, res) => {
  AsteroidScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/asteroids/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newAsteroidScoreBoard = new AsteroidScoreBoard({ name, score, img });

  newAsteroidScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

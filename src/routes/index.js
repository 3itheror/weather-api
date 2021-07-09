// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     return res.status(200).json({ message: 'Weather API template' });
// });

// module.exports = router;
import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.status(200).json({ message: testEnvironmentVariable });
});

export default indexRouter;

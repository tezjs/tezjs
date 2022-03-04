const express = require('express');
const router = express.Router();

const authenticationController = require('./authentication.controller');
const authorizationController = require('./authorization.controller');

router.use("/authentication", authenticationController);
router.use("/authorization", authorizationController);

module.exports = router;
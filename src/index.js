const express = require('express');
const axios = require('axios');
const fs = require('fs-extra');
const sharp = require('sharp');
const { celebrate, Joi, errors } = require('celebrate');

const createValidator = require('./validator');
const createHandlers = require('./handlers');
const config = require('./config');

const validator = createValidator(Joi);
const handlers = createHandlers({ fs, axios, sharp });
const app = express();

app.get('/img', celebrate(validator.getImg), handlers.getImg);

app.listen(config.port, () => console.log('Listening on', config.port));

app.use(errors());

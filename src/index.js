require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const signature = require('./verifySignature');
const api = require('./api');
const release = require('./release');
const payloads = require('./payloads');
const debug = require('debug')('slash-command-template:index');

const app = express();

const rawBodyBuffer = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
app.use(bodyParser.json({ verify: rawBodyBuffer }));

app.post('/release', async (req, res) => {
  if (!signature.isVerified(req)) {
    debug('Verification token mismatch');
    return res.status(404).send();
  }

  release.showView(req)
  return res.send('');
});

app.post('/submit', async (req, res) => {
  // Verify the signing secret
  if (!signature.isVerified(req)) {
    debug('Verification token mismatch');
    return res.status(404).send();
  }

  release.postMessage(req);
  res.send('');
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

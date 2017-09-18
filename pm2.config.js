'use strict';

const path = require('path');

const secretEnv = require('./secret/env.json');

const abspath = relpath => path.resolve(__dirname, relpath);

module.exports = {
  apps: [{
    name: 'pi-dab',
    script: './../pi-dab/index.js',
    env: {
      GITHUB_TOKEN: secretEnv.GITHUB_TOKEN,
      GITHUB_USER: 'mlenkeit',
      PORT: '5000',
      PROJECTS: abspath('./pi-dab-projects.config.js')
    }
  }, {
    name: 'pi-localtunnel-opener',
    script: './../pi-localtunnel-opener/index.js',
    args: `-c "${abspath('./pi-localtunnel-opener-tunnels.config.js')}"`
  }]
};
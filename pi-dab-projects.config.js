'use strict';

module.exports = [{
  'name': 'mlenkeit/pi-dab',
  'dir': '/home/pi/ug/pi-dab',
  'githubWebhook': 16109011,
  'postCheckoutScript': 'npm run dab:post-checkout && pm2 restart pi-dab'
}, {
  'name': 'mlenkeit/pi-localtunnel-opener',
  'dir': '/home/pi/ug/pi-localtunnel-opener',
  'githubWebhook': 16227308,
  'postCheckoutScript': 'npm run dab:post-checkout && pm2 restart pi-localtunnel-opener'
}, {
  'name': 'mlenkeit/ug-pi-pm2',
  'dir': '/home/pi/ug/ug-pi-pm2',
  'githubWebhook': 16194414,
  'postCheckoutScript': 'npm install --production && pm2 reload pm2.config.js'
}];
'use strict';
const inView = require('in-view');
const play = (el, opts) => {
  
  if(opts['mute']) {
    el.muted = true;
  }

  if(otps['loop']) {
    el.loop = true;
  }

  el.play();
};
const pause = el => el.pause;

module.exports = (selector, opts) => {
  return new Promise((resolve, reject) => {
      if (typeof selector == 'string') {
        inView(selector)
        .on('enter', play)
        .on('exit', pause);
      } else if (typeof selector === 'object') {
        [].slice.call(document.querySelectorAll('video')).forEach(video => {
          inView(video)
          .on('enter', play)
          .on('exit', pause)
        });
      }
  });
};

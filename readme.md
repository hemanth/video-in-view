# video-[in-view](https://github.com/camwiegert/in-view)
> Play/Pause video when in/out of the view.


## DEMO

Checkout the [DEMO](https://h3manth.com/demo/video-in-view/)!

## Install

```
$ npm install --save video-in-view
```


## Usage

```js
const videoInView = require('video-in-view');

// Plays and pauses when the video.
videoInView('.selector', {loop: true})

// Operators on all the video tags.
videoInView({loop:true, mute:true})
```

## Options

```
{
  mute,
  loop
}
```

## License

MIT © [Hemanth.HM](https://h3manth.com)

/*! Qoopido.js library 3.7.3, 2015-08-05 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("support/element/video/webm",e,["../../../support","../video"])}(function(e,o,t,i,n,r,p){"use strict";var s=e.support;return s.addTest("/element/video/webm",function(o){e["support/element/video"]().then(function(){var e=s.pool?s.pool.obtain("video"):r.createElement("video");e.canPlayType('video/webm; codecs="vp8, vorbis"')?o.resolve():o.reject(),e.dispose&&e.dispose()},function(){o.reject()})})});
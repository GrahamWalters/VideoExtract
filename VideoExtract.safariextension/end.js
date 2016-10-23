
function findVideos() {
  var videos = document.querySelectorAll('video');
  for (var v in videos) {
    if (videos[v] && videos[v].src) {
      console.log(videos[v].src);
      safari.self.tab.dispatchMessage('openVideoInNewTab', videos[v].src);
    }
  }
}

function handleMessage(msg) {
  switch (msg.name) {
    case 'log': {
      return console.log('global:', msg.message);
    }

    case 'find-videos': {
      return findVideos();
    }
  }
}


safari.self.addEventListener('message', handleMessage, false);

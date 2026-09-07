const fs = require('fs');
fetch('https://www.fiat.vc/post/fiat-launches-geo')
  .then(res => res.text())
  .then(text => {
    const match = text.match(/<meta.*?property="og:image".*?content="(.*?)"/i);
    if (match) {
      console.log("IMAGE_URL=" + match[1]);
    } else {
      console.log("NO MATCH");
    }
  });

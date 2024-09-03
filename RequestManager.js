//Design a utility which takes URL and a value for attempts which will attempt
// to make a fetch request . If on failure it tries again with increasing delay for number of times which user has requested

const requestManager = (url, options = {}, attempt = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch((error) => {
        const isLastAttempt = attempt === 1;
        if (isLastAttempt) {
          return reject(error);
        }
        setTimeout(() => {
          requestManager(url, options, attempt - 1)
            .then(resolve)
            .catch(reject);
        }, 3000);
      });
  });
};

requestManager("https://foo.com")
  .then((resp) => {
    console.log("Response:", resp);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

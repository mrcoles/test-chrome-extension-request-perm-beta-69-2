document.getElementById("request-perm").addEventListener(
  "click",
  evt => {
    evt.preventDefault();
    let result = document.getElementById("result");

    chrome.permissions.request({ permissions: ["downloads"] }, granted => {
      let err = chrome.runtime.lastError;
      let message = err
        ? `Error requesting: "${err.message}"`
        : `Successfully requested and got result ${granted}`;
      result.innerText = message;
      if (err) {
        console.error(err);
      }
    });
  },
  false
);

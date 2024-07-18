function waitForTime(ms) {
  return new Promise((resolve) => {
    const data = "Ожидание завершено";
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
}

waitForTime(5000).then((response) => {
  console.log(response);
});

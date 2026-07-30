function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let x = 0; x < n; x++) {
      console.log(i, x);
    }
  }
}

logItems(10);

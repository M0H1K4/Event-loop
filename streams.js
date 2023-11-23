const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1  * kaia mara bevr iuzers ver udzlebs
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // Solution 2: Streams

  const readable = fs.createReadStream("test-file.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });
  readable.on('end', () => {
    res.end();
  })
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listenning...");
});

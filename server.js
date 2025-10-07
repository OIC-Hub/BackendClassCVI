const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  try {
    if (req.url === "/home" && req.method === "GET") {
        res.setHeader('Content-Type', "application/json");
      res.statusCode(200).end("welcome to homepage");
    }
    if (req.url === "/about" && req.method === "GET") {
        res.setHeader("content-type", "application/json");
      res.statusCode(200).end("Welcome to About");
    }else{
      res.statusCode(404).end("Page Not Found")
    }
  } catch (error) {
    console.error({message: "Server Error", error})
    res.statusCode(500).end("Internal Server Error")
  }
});

server.listen(PORT, () => {
  console.log(`Server runnning at ${PORT}`);
});

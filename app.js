const http = require("http");
const dotenv = require("dotenv");
const url = require("url");
const path = require("path");
// const { console } = require("inspector");
// const { url } = require("inspector");
dotenv.config();

const PORT = process.env.PORT || 5000;

const Student = [{ id: 1, name: "Ade", subject: "Math" }];

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;
  const query = parseUrl.query;
  const method = req.method;

  // try {
  //   if (req.url === "/home" && req.method === "GET") {
  //       res.setHeader('Content-Type', "application/json");
  //     res.statusCode(200).end("welcome to homepage");
  //   }
  //   if (req.url === "/about" && req.method === "GET") {
  //       res.setHeader("content-type", "application/json");
  //     res.statusCode(200).end("Welcome to About");
  //   }else{
  //     res.statusCode(404).end("Page Not Found")
  //   }
  // } catch (error) {
  //   console.error({message: "Server Error", error})
  //   res.statusCode(500).end("Internal Server Error")
  // }

  try {
    if (pathname === "/home" && method === "GET") {
      res.setHeader("Content-Type", "json");
      res.end("welcome home");
    }

    if (pathname === "/addstudent" && method === "POST") {
      const { id, name, subject } = query;

      if (!name || !subject) {
        res.statusCode = 401;
        res.end(JSON.stringify({ message: "Invalid request" }));
      }

      const newStudent = {
        id: Student.length + 1,
        name: name,
        subject: subject,
      };
      res.setHeader("Content-Type", "json");

      Student.push(newStudent);
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Student Added Successfully" }));
    }

    if (pathname === "/getstudents" && method === "GET") {
      res.setHeader("Content-Type", "json");
      res.statusCode = 200;
      res.end(
        JSON.stringify({ message: "Student fetched successfully", Student })
      );
    }

    if (pathname === "/updatestudent" && method === "PUT") {
      const { id  } = query;

      const index = Student.findIndex(
        (student) => student.id === parseInt(id)
      );

       if (index === -1) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "User not found" }));
        return;
      }

      const{name, subject} = query

      Student[index] = {
        id: parseInt(id),
        name: name || Student[index].name,
        subject: subject || Student[index.subject],
      };

      res.setHeader("Content-Type", "json");
      res.statusCode = 200;
      res.end(
        JSON.stringify({ message: "Update student sucessfully" })
      );
    }

    if(pathname === "/deletestudent" && method === "DELETE"){
      const{id} = query;
      const index = Student.findIndex((student) => student.id === parseInt(id));
        if (index === -1) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "User not found" }));
        return;
      }
      Student.splice(index);

      res.statusCode = 200;
      res.end(JSON.stringify({message: "User deleted Successfully"}));
    }

  } catch (error) {
    res.setHeader("Content-Type", "json");

    res.statusCode = 500;
    // res.end({ message: "Internal Server Error", error });
    res.end(JSON.stringify({ message: "Internal Server Error", error }));
    console.error(error);
  }
});

server.listen(PORT, () => {
  console.log(`Server runnning at ${PORT}`);
});

console.log("first");

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

/*const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))*/

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Mock database
const users = []

app.post("/api/travel", (req, res) => {
  // Process travel form data
  console.log(req.body)
  // In a real application, you would use this data to find a suitable destination
  res.json({ destination: "Paris, France" })
})

app.post("/api/signin", (req, res) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username && u.password === password)
  if (user) {
    res.sendStatus(200)
  } else {
    res.sendStatus(401)
  }
})

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body
  if (users.some((u) => u.username === username || u.email === email)) {
    res.sendStatus(409) // Conflict
  } else {
    users.push({ username, email, password })
    res.sendStatus(201)
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))






/*const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());*/

app.get("/", (req, res) => {
    res.send("Server is running!");
});

c/*onst PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

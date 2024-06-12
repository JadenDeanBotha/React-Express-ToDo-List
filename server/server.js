const express = require ('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

let webProjects = [

  {
    ID: 1,
    TITLE: "React Game",
    DESCRIPTION: "Tic tac toe game created using Create React App",
    CATEGORY: "Home",
  },
  {
    ID: 2,
    TITLE: "Online Store",
    DESCRIPTION: "Online store created with HTML, CSS and Javascript.",
    CATEGORY: "Work",
  },
  {
    ID: 3,
    TITLE: "Online Store",
    DESCRIPTION: "Online store created with HTML, CSS and Angular.",
    CATEGORY: "Work",
  }
]

app.get('/api', (req, res) => {
  res.json({webProjects});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
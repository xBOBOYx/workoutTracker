const express= require('express');
const morgan= require('morgan');
const mongoose= require('mongoose');

const PORT= process.env.PORT || 3001;

const app= express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// routes
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
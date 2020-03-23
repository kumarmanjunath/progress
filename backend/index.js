const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = 5000;

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/Users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
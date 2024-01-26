const express = require('express');
const app = express();
 
// importing routes
const data_route = require("./routes/data_route.js")
 app.use("/", data_route)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

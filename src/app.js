const express = require('express')
const userRouter = require('./routers/user')
const formData = require("express-form-data");
const os = require("os");
const port = process.env.PORT
require('./db/db')

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };

const app = express()

// parse data with connect-multiparty. 
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream 
app.use(formData.stream());
// union the body and the files
app.use(formData.union());


// app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
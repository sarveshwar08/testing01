const express = require("express");
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const bodyParser = require(body-parser);


const app = express();
app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

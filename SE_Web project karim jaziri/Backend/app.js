const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectDb } = require("./config/db.config");
const userRouter = require("./controllers/user");
const handleError = require('./utils/errorHandler');
const { isLoggedIn } = require("./controllers/middleware");
const parkingRouter = require("./controllers/parking");
const paymentMethodRouter = require("./controllers/paymentMethod");
const bookingRouter = require("./controllers/booking");
const spaceRouter = require("./controllers/spaceRouter");
const cors = require('cors');
const reviewRouter = require("./controllers/review");
const dotenv = require("dotenv")
dotenv.config();

app.use(express.json());
// Set body-parser
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

const port = process.env.PORT ;

// app.use(cors({
//     origin: 'http://localhost:3000', // Allow your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true // Allow cookies
//   }));
app.use(cors());

// Connect Database
connectDb();


app.get('/', isLoggedIn, async (req, res) => {
    res.json({ message: 'Hello world!'})
})

app.use("/user", userRouter)
app.use("/parking", parkingRouter)
app.use("/paymentMethod", paymentMethodRouter)
app.use("/booking", bookingRouter)
app.use("/sapi", spaceRouter)
app.use("/api", reviewRouter)

// Error handler

app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    handleError(error, res);
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

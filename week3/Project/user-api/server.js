const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Sample user data array
const users = [];

const userRouter = require('./routers/users');

// Configure user routes
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
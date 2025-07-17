const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const cookieParser = require('cookie-parser');



const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/quotes', quoteRoutes);

module.exports = app;
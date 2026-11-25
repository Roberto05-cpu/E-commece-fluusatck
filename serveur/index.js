const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { connectDB } = require('./config/db')
const path = require('path');

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/user', require('./routes/userRoute'))
app.use('/product', require('./routes/productRoutes'))
app.use('/cart', require('./routes/cartRoute'))

connectDB();

app.get('/', (req, res) => {
  res.send('🚀 API de e-commerce en marche');
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`serveur en marche sur le port ${PORT}}`.bgWhite)
})
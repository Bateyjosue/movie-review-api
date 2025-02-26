import app from './server.js'
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsD.dao.js"

const MongoClient = mongodb.MongoClient
const DB_USERNAME = process.env['DB_USERNAME']
const DB_PASSWORD = process.env['DB_PASSWORD']
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.hs7ibqw.mongodb.net/`
const port = process.env.PORT || 500

MongoClient.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async (client) => {
    await ReviewsDAO.injectDB(client);
    app.listen(port, ()=> console.log(`Server is running on port ${port}`))
  })
import mondodb from 'mongodb';
const ObjectId = mondodb.ObjectId;

let reviews;

class ReviewsDAO { 
  static async injectDB(conn) {
    if (reviews) { 
      return
    }

    try {
      reviews = await conn.db('reviews').collection('reviews')
    }
    catch (err) {
      console.error(`Unable to establish collection handles in userDAO: ${err}`)
    }
  }
}

export default ReviewsDAO;
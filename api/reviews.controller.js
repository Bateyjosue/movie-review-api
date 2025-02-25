import reviewsDAO from "../dao/reviewsDAO.js"
class ReviewsController {
  constructor() { }
  static async getReview(req, res, next) {
    try {
      const movieID = req.body.movieId
      const review = req.body.review
      const user = req.body.user

      const reviewResponse = await ReviewsDAO.addReview(movieID, user, review)
      res.json({ status: "success" })
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  getReviews(req, res) {
    return res.send(reviews);
  }


  postReview(req, res) {

  }
  updateReview(req, res) {

  }
  deleteReview(req, res) {

  }
}

export default ReviewsController;
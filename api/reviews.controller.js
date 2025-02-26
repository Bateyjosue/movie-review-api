import ReviewsDAO from "../dao/reviews.dao.js"
class ReviewsController {
  constructor() { }
  static async getReview(req, res, next) {
    try {
      let id = req.params.id || {}
      let review = await ReviewsDAO.getReview(id)

      if (!review) {
        res.status(404).json({ error: "not found" })
        return
      }
      res.json(review)
    } catch (err) {
      console.log(`api ${err}`);
      res.status(500).json({ error: err.message })
    }
  }

  static async getReviews(req, res, next) {
    try {
      let id = req.params.id || {}
      let reviews = await ReviewsDAO.getReviewsByMovieId(id)

      if (!reviews) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(reviews)
    }
    catch (err) {
      console.log(`api ${err}`);
      res.status(500).json({ error: err })
    }
  }


  static async postReview(req, res, next) {
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
  static async updateReview(req, res, next) {
    try {
      const reviewId = req.params.id
      const review = req.body.review
      const user = req.body.user

      const reviewResponse =  await ReviewsDAO.updateReview(reviewId, user, review)

      let { error } = reviewResponse
      if (error) {
        res.status(404).json({ error })
      }

      if (reviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review ",
        )
      }

      res.json({ status: "success" })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
  static async deleteReview(req, res, next) {
    try {
      const reviewId = req.params.id
      const reviewResponse = await ReviewsDAO.deleteReview(reviewId)
      res.json({status: "success"})
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}

export default ReviewsController;
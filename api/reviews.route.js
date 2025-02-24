import express from 'express'

const router = express.Router();

router.route('/')
  .get((req, res) => { 
    res.send('GET request to /api/v1/reviews')
  })

export default router;
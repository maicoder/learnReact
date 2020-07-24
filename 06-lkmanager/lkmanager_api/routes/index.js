import express from 'express';
const router = express.Router({});

router.get('/', (res, req, next) => {
  res.render('index.html');
})

module.exports = router;
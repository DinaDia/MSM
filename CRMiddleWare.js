module.exports = (req, res, next) => {
    res.header('Content-Range', 'patients 0-100/100')
    next()
  }
module.exports = (req, res, next) => {
    res.header('Content-Range', 'patients 0-10/10')
    next()
  }
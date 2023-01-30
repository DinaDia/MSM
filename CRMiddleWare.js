module.exports = (req, res, next) => {
    res.header('Content-Range', 'patients 0-50/50')
    next()
  }
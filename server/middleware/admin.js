let admin = (req, res, next) => {
    if (req.user.role === 0) {
        return res.send('You are not authorized to perform the following action.');
    }
    next();
}

module.exports = { admin };
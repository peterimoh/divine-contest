exports.adminMiddleWare = () => {
  return (req, res, next) => {
    if (req.user.admin_id && req.isAuthenticated()) {
      return next();
    } else {
      req.flash('error', 'UnAuthorized Access!');
      res.redirect('/admin/login');
    }
  };
};

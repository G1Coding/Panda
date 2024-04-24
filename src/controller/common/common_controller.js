const get = {
  get_isAdmin : (req, res) => {
    const admin = req.cookies.user_admin;
    
    let result = [{check : admin}];
    
    res.json(result);
  }

}

module.exports = { get };
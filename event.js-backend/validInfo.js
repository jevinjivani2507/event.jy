module.exports = function(req, res, next) {
    const { username, password } = req.body;
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
  
    if (req.path === "/register") {
      console.log(!username.length);
      if (![username, password].every(Boolean)) {
        console.log("Missing Credentials");
      } else if (!validEmail(username)) {
        console.log("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![username, password].every(Boolean)) {
        console.log("Missing Credentials");
      } else if (!validEmail(username)) {
        console.log("Invalid Email");
      }
    }
    next();
  };
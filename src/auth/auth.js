require("dotenv").config();
const jwt = require("jsonwebtoken");
async function checkAuth(token, roles) {
  try {
    const tk = token.split(" ")[1];
    const decodedToken = await jwt.verify(tk, process.env.JWT_SECRET_KEY);
    if (
      roles.length > 0 &&
      roles.some((r) => decodedToken.roles.indexOf(r) >= 0)
    ) {
      return true;
    } else if (roles.length == 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
module.exports = {
  checkAuth: checkAuth,
};

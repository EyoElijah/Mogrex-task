const UserModel = require("../models/UserModel");

module.exports = userContoller = async (req, res, next) => {
  try {
    const { filename } = req.file;
    const { fname, phone, email, religion, state } = req.body;
    if (!fname || !phone || !email || !religion || !state) {
      return res.json({ message: "missing credentials" });
    }

    let newUser = new UserModel();
    newUser.fname = fname;
    newUser.phone = phone;
    newUser.email = email;
    newUser.religion = religion;
    newUser.state = state;
    newUser.image = filename;

    await newUser.save();
    if (!newUser)
      return res.status(400).json({
        error: "something went wrong",
      });

    req.flash("success", `Thank You ${newUser.fname} for pledging`);
    req.session.file = req.file.filename;
    res.redirect("/success");
  } catch (error) {
    console.log(error.mesaage);
  }
};

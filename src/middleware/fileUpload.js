const multer = require("multer");

module.exports = fileUpload = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./src/upload");
    },
    filename: (req, file, cb) => {
      const temp_file_arr = file.originalname.split(".");
      const temp_file_name = temp_file_arr[0];
      const temp_file_extension = temp_file_arr[1];
      cb(null, temp_file_name + "-" + Date.now() + "." + temp_file_extension);
    },
  });
  const upload = multer({ storage }).single("image");

  upload(req, res, (error) => {
    try {
      if (error) {
        return res.json({ message: "Error while uploading file" });
      }
      next();
    } catch (error) {
      console.log(error.message);
    }
  });
};

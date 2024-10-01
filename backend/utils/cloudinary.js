const v2 = require("cloudinary");
const fs = require("fs");

v2.config({
  cloud_name: "dqeogl7bs",
  api_key: "324493841796829",
  api_secret: "_3_hFO5WLaTYISX53Jt4REF1Wn0",
});

const uploadOnCloudinary = async function (localPath) {
  try {
    const response = await v2.uploader.upload(localPath, {
      resource_type: "auto",
    });
    console.log(response);
    fs.unlink(localPath, (err) => {
      if (err) console.log(err);
      else console.log("file deleted from the local server successfully");
    });
    return response;
  } catch (error) {
    console.log(error);
    fs.unlink(localPath);
  }
};

module.exports = uploadOnCloudinary;

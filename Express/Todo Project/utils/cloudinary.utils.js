const { v2 } = require("cloudinary");
const asyncHandler = require("express-async-handler");
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require("../config");

v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

exports.uploadFileOnCloudinary = asyncHandler(async (localFilePath) => {
  const uploadedResponse = await v2.uploader.upload(localFilePath, {
    folder: "todoProject",
    resource_type: "auto",
  });
  //   console.log(uploadedResponse);
  return uploadedResponse;
});

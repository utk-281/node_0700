exports.extractPublicId = (url) => {
  let arrOfStr = url.split("/");
  let lastElement = arrOfStr[arrOfStr.length - 1];

  let id = lastElement.split(".")[0];
  let public_id = "todoProject/" + id;
  return public_id;
};

var images = Array.from(
  document.getElementById("img-group").getElementsByTagName("img")
); // make img to array easy to count for use in function
function showImage(imageId) {
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (image.id === imageId) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }
}

function show(car) {
  // Hide all car models
  var carModels = document.getElementsByClassName("pick-description-car");
  for (var i = 0; i < carModels.length; i++) {
    carModels[i].style.display = "none";
  }

  // Show the selected car model
  var selectedCarModel = document.getElementById(car);
  if (selectedCarModel) {
    selectedCarModel.style.display = "block";
  }
}

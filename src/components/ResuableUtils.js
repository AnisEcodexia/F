
// Convert a Base64-encoded string to a File object
export function base64StringtoFile (base64String, filename) {
  var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {type: mime})
}

// Download a Base64-encoded file

export function downloadBase64File (base64Data, filename) {
  var element = document.createElement('a')
  element.setAttribute('href', base64Data)
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64 (base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
}

export function getBase64Image(img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  // Get the data-URL formatted image
  // Firefox supports PNG and JPEG. You could check img.src to
  // guess the original format, but be aware the using "image/jpg"
  // will re-encode the image.
  var dataURL = canvas.toDataURL();
  
  return dataURL
}
// Base64 Image to Canvas with a Crop
export function image64toCanvasRef (canvasRef, image64, pixelCrop) {
  const canvas = canvasRef // document.createElement('canvas');
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')
  const image = new Image()
  image.src = image64
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  image.onload = function () {
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )
  }
}

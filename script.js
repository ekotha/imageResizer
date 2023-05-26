// Resize Function
function resizeImage() {
  const fileInput = document.getElementById('image-upload');
  const widthInput = document.getElementById('input-width');
  const heightInput = document.getElementById('input-height');
  const imageContainer = document.getElementById('image-container');

  if (fileInput.files.length === 0) {
    alert('Please select an image to resize.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const aspectRatio = img.width / img.height;
      const width = parseInt(widthInput.value);
      const height = parseInt(heightInput.value);

      if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        alert('Invalid width or height value.');
        return;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const canvasAspectRatio = width / height;
      let newWidth, newHeight, x, y;

      if (aspectRatio > canvasAspectRatio) {
        newWidth = width;
        newHeight = width / aspectRatio;
        x = 0;
        y = (height - newHeight) / 2;
      } else {
        newWidth = height * aspectRatio;
        newHeight = height;
        x = (width - newWidth) / 2;
        y = 0;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, x, y, newWidth, newHeight);

      imageContainer.innerHTML = '';
      imageContainer.appendChild(canvas);

      const dataURL = canvas.toDataURL('image/png');

      // Display the resized image in a new window or tab
      // window.open(dataURL);

      // Download the resized image
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'resized_image.png';
      link.click();
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

document.getElementById('btn-resize').addEventListener('click', resizeImage);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

var startY, endY;

// Touch screens
document.addEventListener('touchstart', (event) => {
  startY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
  endY = event.changedTouches[0].clientY;

  // Calculating distance
  const distanceY = endY - startY;

  // Checks if swipe distance is at least 50 pixels
  if (distanceY >= 50) {
    // refresh
    location.reload();
  }
});
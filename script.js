const container = document.getElementById('photo-container');

for (let i = 0; i < photos.length; i++) {
    const newImage = document.createElement('img');
    newImage.src = photos[i];
    container.appendChild(newImage);
}
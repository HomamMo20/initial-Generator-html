const generatorButton = document.querySelector('.GenerateButton');
const inputValue = document.querySelector('input');

// to make the input value empty
inputValue.addEventListener('click', function () {
  inputValue.value = '';
  inputValue.style.color = '#212529';
});
// the generator button
generatorButton.addEventListener('click', function () {
  inputValue.value = 'type what you want to generate';
  inputValue.style.color = ' #ced4da';
});

// function generateImage() {
//   fetch('https://picsum.photos/200/300') // Fetch a random image of size 200x300 pixels
//     .then(response => {
//       const imageUrl = response.url;
//       const imageContainer = document.querySelector('.imageContainer');
//       const imgElement = document.createElement('img');
//       imgElement.width = 400;
//       imgElement.height = 400;
//       imgElement.src = imageUrl;
//       imageContainer.innerHTML = '';
//       imageContainer.appendChild(imgElement);
//     })
//     .catch(error => console.error('Error fetching image:', error));
//   console.log('now');
// }

// // random generator button
// generatorButton.addEventListener('click', function () {
//   generateImage();
// });

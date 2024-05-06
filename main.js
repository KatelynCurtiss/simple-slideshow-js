// Katelyn Curtiss
// 5 May 2024 
// Javascript Slideshow

//Declare and initialize varibles
let i = 0; // Create and initialize the counter vairable

const images = []; // Start with an empty array
// Image array
images[0] = 'scotland1.jpg';
    images[1] = 'scotland2.jpg';
    images[2] = 'scotland3.jpg';
    images[3] = 'scotland4.jpg';

// Image captions array
const captions = ['Scotland #1', 'Scotland #2','Scotland #3','Scotland #4'];

const time = 3000; 

// Function that switches the image
function changeImg(){
    document.hasChildNodes.src = images[i];

    if (i < images.lengh - 1){
        i++; // Increase index number for the image by 1 each time the function runs
    } else {
        i = 0;
    } // End of statement 
}  //End of changeImg( ) function

window.onload = changeImg; 
function setActiveSlideBackground() {
    const reveal = document.querySelector('.reveal');
    const background = document.querySelector('.reveal .backgrounds');
    const v_index = Reveal.getIndices().v;
    const allElements = reveal.querySelectorAll('*');

  if (background) {

    background.style.transition = 'background-color 0.3s ease-in-out';

    if (v_index > 0){  
        // Black to white
        background.style.backgroundColor = '#F7F6F3'; 

        allElements.forEach(el => {
            const currentColor = window.getComputedStyle(el).color;
            // Check if current color is white
            if (currentColor === 'rgb(255, 255, 255)' || currentColor === 'white') {
            el.style.color = 'black';
            }
        });
    }
    else {
        // White to black
        background.style.backgroundColor = '#0E1018';
           
        allElements.forEach(el => {
            const currentColor = window.getComputedStyle(el).color;
            // Check if current color is white
            if (currentColor === 'rgb(0, 0, 0)' || currentColor === 'black') {
            el.style.color = 'white';
            }
        });
    }
  }
}
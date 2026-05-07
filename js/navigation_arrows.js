function hasVerticalSlides(slideStructure) {
    const indices = Reveal.getIndices();
    const h = indices.h || 0;
    const v = indices.v || 0;
    res = v + 1 < slideStructure.columns[h] ;
    return res;
}

function hasHorizontalSlides(slideStructure) {
    const indices = Reveal.getIndices();
    const h = indices.h || 0;
    res = h + 1 < slideStructure.totalColumns ;
    return res;
}

function noMoreFragments() {
    const currentSlide = Reveal.getCurrentSlide();
    return currentSlide.querySelectorAll('.fragment:not(.visible)').length == 0;
}

function updateArrows(slideStructure) {
  const currentSlide = Reveal.getCurrentSlide();
  
  // Remove existing arrows
  const existingDownArrow = currentSlide.querySelector('.down-arrow');
  if (existingDownArrow) existingDownArrow.remove();
  const existingRightArrow = currentSlide.querySelector('.right-arrow');
  if (existingRightArrow) existingRightArrow.remove();
  
  // Add arrow only if no more fragments
  if (noMoreFragments()) {

    const arrow = document.createElement('div');
    const colors = ['#4361EE', '#446BDF', '#6078C5', '#7883AF', '#8589A3', '#AF9D7C', '#D6AF59', '#FDC135', '#F9B530', '#F2A82D', '#EB9A2A', '#E48C26', '#DD7F23', '#D2691E'];
    let html_s = '';
    for (const col of colors) {
        html_s += '<span style="color: ' + col + ';"> &#8595 </span>';
    }
    arrow.innerHTML = html_s;
    arrow.style.position = 'fixed';
    arrow.style.fontSize = '1em';
    arrow.style.pointerEvents = 'none';
    arrow.style.zIndex = '10';
    arrow.style.opacity = '0';
    arrow.style.transition = 'opacity 1s ease-in-out';
    
    if(hasVerticalSlides(slideStructure)){
        arrow.className = 'down-arrow';
        arrow.style.bottom = '0px';
        arrow.style.left = '50%';
        arrow.style.transform = 'translateX(-50%)'
        currentSlide.appendChild(arrow);
        setTimeout(() => {
            arrow.style.opacity = '1';
        }, 500);
    }
    else if(hasHorizontalSlides(slideStructure)){
        arrow.className = 'right-arrow';
        arrow.style.right = '-50px';
        arrow.style.top = '50%';
        arrow.style.transform = 'translateX(50%) rotate(-90deg)';
        currentSlide.appendChild(arrow);
        setTimeout(() => {
            arrow.style.opacity = '1';
        }, 500);
    }
  }
}
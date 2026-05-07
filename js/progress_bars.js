function updateProgressBars(slideStructure) {
    const hFill = document.querySelector('.progress-horizontal-fill');
    const vFill = document.querySelector('.progress-vertical-fill');
    
    if (!hFill || !vFill) {
        console.warn('Progress bar elements not found');
        return;
    }
    
    const indices = Reveal.getIndices();
    const h = indices.h || 0;
    const v = indices.v || 0;
    
    // const slideStructure = parseSlideStructure();
    
    if (!slideStructure || slideStructure.totalColumns === 0) {
        console.warn('Invalid slide structure');
        return;
    }
    
    const hProgress = (1 - h / (slideStructure.totalColumns - 1)) * 100;
    const currentColumnRows = slideStructure.columns[h] - 1 || 1;
    const vProgress = (v / currentColumnRows) * 100;
    const vProgress_2 = (v / currentColumnRows) * 100 + 1;
    
    hFill.style.width = hProgress + '%';
    vFill.style.maskImage = 'linear-gradient(to bottom, rgba(0,0,0,1) 0%,  rgba(0,0,0,1) ' + vProgress + '%, rgba(0,0,0,0) ' + vProgress_2 + '%)';
}
function parseSlideStructure() {
    const slidesContainer = document.querySelector('.reveal .slides');
    
    if (!slidesContainer) {
        console.error('Slides container not found');
        return { columns: [], totalColumns: 0 };
    }
    
    // Get DIRECT children only (top-level sections)
    const topLevelSections = Array.from(slidesContainer.children)
        .filter(child => child.tagName === 'SECTION');
    
    const columns = [];
    
    topLevelSections.forEach((section, index) => {
        // Get DIRECT children that are sections (vertical slides)
        const verticalSections = Array.from(section.children)
            .filter(child => child.tagName === 'SECTION');
        
        if (verticalSections.length > 0) {
            columns.push(verticalSections.length);
        } else {
            columns.push(1);
        }
    });
    
    return {
        columns: columns,
        totalColumns: columns.length
    };
}
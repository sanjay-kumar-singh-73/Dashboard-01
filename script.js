// Replace Layout Functionality
function replaceLayout() {
    const layoutPreview = document.getElementById('layout-preview');
    const layouts = ['layout-one', 'layout-two', 'layout-three'];
    let currentLayout = layouts.indexOf(layoutPreview.classList[1]);
    
    currentLayout = (currentLayout + 1) % layouts.length; // Cycle through layouts
    layoutPreview.classList.remove('layout-one', 'layout-two', 'layout-three');
    layoutPreview.classList.add(layouts[currentLayout]);
    
    // Update content for preview
    layoutPreview.innerHTML = `<p>Layout ${currentLayout + 1} is displayed</p>`;
  }
  
  // Change Theme Functionality
  function changeTheme() {
    document.body.classList.toggle('dark-theme');
  }
  
  // Change Page Layout Functionality
  function changePageLayout() {
    const previewArea = document.querySelector('.preview-area');
    
    // Toggle between different page layouts
    if (previewArea.style.flexDirection === 'column') {
      previewArea.style.flexDirection = 'row';  // Multi-column
    } else {
      previewArea.style.flexDirection = 'column';  // Single-column
    }
  }
  
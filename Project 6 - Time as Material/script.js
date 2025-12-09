document.addEventListener('DOMContentLoaded', function() {
  const barCards = document.querySelectorAll('.bar-card');
  
  // Check if we should use click or hover
  function shouldUseClick() {
    return window.innerWidth <= 1180;
  }
  
  // Add click handlers for mobile/tablet
  barCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (shouldUseClick()) {
        e.preventDefault();
        
        // If clicking the same card, toggle it off
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          // Remove active from all cards
          barCards.forEach(c => c.classList.remove('active'));
          // Add active to clicked card
          this.classList.add('active');
        }
      }
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (!shouldUseClick()) {
      // Remove all active classes when screen becomes larger (hover mode)
      barCards.forEach(card => card.classList.remove('active'));
    }
  });
});
// Create stars animation
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    const starsCount = 100;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        starsContainer.appendChild(star);
    }
    
    // Handle button clicks
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Function to move the No button
    function moveNoButton() {
        // Get container dimensions
        const buttonsContainer = document.querySelector('.buttons');
        const containerRect = buttonsContainer.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();
        
        // Calculate safe area (keep button fully visible)
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;
        
        // Move the button to a random position within the container
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }
    
    yesBtn.addEventListener('click', function() {
        responseMessage.textContent = "You've made me the happiest person in the world! I love you!";
        celebrate();
    });
    
    // Add appropriate event listeners based on device type
    if (isTouchDevice) {
        // For touch devices - move on touchstart
        noBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            moveNoButton();
            responseMessage.textContent = "I'll keep trying until you say yes!";
        });
    } else {
        // For non-touch devices - move on mouseover
        noBtn.addEventListener('mouseover', function() {
            moveNoButton();
        });
        
        // Also move on click
        noBtn.addEventListener('click', function() {
            responseMessage.textContent = "I'll keep trying until you say yes!";
            moveNoButton();
        });
    }
    
    function celebrate() {
        // Create falling hearts animation
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 100);
        }
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.classList.add('celebration-heart');
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = '-50px';
        heart.style.opacity = '0';
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Prevent context menu on buttons
    yesBtn.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    noBtn.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
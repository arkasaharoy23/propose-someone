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
    
    yesBtn.addEventListener('click', function() {
        responseMessage.textContent = "You've made me the happiest person in the world! I love you!";
        celebrate();
    });
    
    noBtn.addEventListener('mouseover', function() {
        // Move the "No" button randomly when hovered
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    noBtn.addEventListener('click', function() {
        responseMessage.textContent = "I'll keep trying until you say yes!";
    });
    
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
});
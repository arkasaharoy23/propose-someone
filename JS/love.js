document.addEventListener('DOMContentLoaded', function() {
    const yesLink = document.getElementById('yesLink');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');
    const heartsContainer = document.getElementById('hearts');
    
    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                heartsContainer.appendChild(heart);
            }, i * 300);
        }
    }
    
    createHearts();
    
    // Create confetti
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random colors
                const colors = ['#ff66a3', '#ff99cc', '#ff3385', '#ffcce0', '#ffecf1'];
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Random shapes
                const shapes = ['circle', 'square', 'heart'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                } else if (shape === 'heart') {
                    confetti.innerHTML = '❤️';
                    confetti.style.backgroundColor = 'transparent';
                    confetti.style.fontSize = '20px';
                    confetti.style.width = 'auto';
                    confetti.style.height = 'auto';
                }
                
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.width = (Math.random() * 15 + 10) + 'px';
                confetti.style.height = (Math.random() * 15 + 10) + 'px';
                
                document.body.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 20);
        }
    }
    
    // Yes button handler - add delay before navigation
    yesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation
        const targetUrl = this.href;
        
        message.textContent = "Yay! I love you too! 💖";
        createConfetti();
        
        // Change GIF to happy reaction
        document.querySelector('.gif-container img').src = 'https://media.giphy.com/media/LYDNZAzOqrez6/giphy.gif';
        
        // Add more hearts
        createHearts();
        
        // Navigate after delay
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 2000); // 2 second delay
    });
    
    // No button handler - move button on hover
    noBtn.addEventListener('mouseover', function() {
        // Move the button to a random position
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        message.textContent = "Hey! Where are you going? 😢";
    });
    
    // No button click handler
    noBtn.addEventListener('click', function() {
        message.textContent = "Please don't say no! 🥺 Try the other button!";
        
        // Move the button again
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });
});
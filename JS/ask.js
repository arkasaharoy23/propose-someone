document.addEventListener('DOMContentLoaded', function() {
    const yesLink = document.getElementById('yesLink');
    const noLink = document.getElementById('noLink');
    const heartsContainer = document.getElementById('hearts');
    const responseMessage = document.getElementById('responseMessage');
    
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
    
    // Show message function
    function showMessage(message, isSuccess = true) {
        responseMessage.textContent = message;
        responseMessage.classList.add('show');
        
        if (isSuccess) {
            responseMessage.style.color = '#ff3385';
        } else {
            responseMessage.style.color = '#ff66a3';
        }
    }
    
    // Yes button handler - add delay before navigation
    yesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation
        const targetUrl = this.href;
        
        // Show cute message
        showMessage("Yay! You've made my heart skip a beat! 💖 Preparing something special for you...", true);
        
        createConfetti();
        
        // Navigate after delay
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 2500); // 2.5 second delay
    });
    
    // No button handler - add delay before navigation
    noLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation
        const targetUrl = this.href;
        
        // Show cute request message
        showMessage("My heart is breaking! 💔 Please give me another chance to win your love...", false);
        
        // Navigate after delay
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 3000); // 3 second delay
    });
    
    // Prevent context menu on buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });
    
    // No button is now fixed and won't move
    // All movement functionality has been removed
});
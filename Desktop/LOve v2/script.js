// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    initializeProposal();
});

function initializeProposal() {
    // Start creating floating hearts
    createFloatingHearts();
    
    // Start music after a short delay
    setTimeout(() => {
        startMusic();
    }, 2000);

    // Setup button handlers
    setupEventListeners();
}

// ============ FLOATING HEARTS ============
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts-container');
    const hearts = ['❤️', '💕', '💖', '💝', '✨'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random horizontal position
        const leftPosition = Math.random() * 100;
        heart.style.left = leftPosition + '%';
        heart.style.bottom = '-50px';
        
        // Random animation duration between 6-8 seconds
        const duration = 6 + Math.random() * 2;
        heart.style.animationDuration = duration + 's';
        
        container.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 800);
}

// ============ AUDIO CONTROL ============
function startMusic() {
    const music = document.getElementById('proposalMusic');
    if (music) {
        music.volume = 0.3; // Start at 30% volume for a calm atmosphere
        music.play().catch(error => {
            console.log('Music autoplay prevented. User interaction required.');
            // Add a click-to-play fallback
            document.addEventListener('click', function playMusicOnClick() {
                music.play().catch(err => console.log('Audio play error:', err));
                document.removeEventListener('click', playMusicOnClick);
            }, { once: true });
        });
    }
}

// ============ EVENT LISTENERS ============
function setupEventListeners() {
    const yesButton = document.getElementById('yesBtn');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const proposalWrapper = document.querySelector('.proposal-wrapper');
    
    if (yesButton) {
        yesButton.addEventListener('click', handleYesClick);
    }
    
    if (closeLetterBtn) {
        closeLetterBtn.addEventListener('click', closeLoveLetter);
    }

    // Close letter on outside click
    document.getElementById('loveLetterModal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeLoveLetter();
        }
    });
}

// ============ YES BUTTON HANDLER ============
function handleYesClick() {
    const music = document.getElementById('proposalMusic');
    const moon = document.querySelector('.moon');
    const yesButton = document.querySelector('.yes-button');
    const celebrationOverlay = document.getElementById('celebrationOverlay');
    const loveLetterModal = document.getElementById('loveLetterModal');
    
    // Add celebration class to moon
    moon.classList.add('celebration');
    
    // Increase music volume and adjust tone
    if (music) {
        music.volume = 0.5;
    }
    
    // Disable button during celebration
    yesButton.disabled = true;
    yesButton.style.opacity = '0.7';
    
    // Show celebration text
    celebrationOverlay.classList.add('show');
    
    // Create rose petals
    createRosePetals();
    
    // After 3 seconds, show the love letter
    setTimeout(() => {
        celebrationOverlay.classList.remove('show');
        loveLetterModal.classList.add('show');
    }, 3000);
}

// ============ ROSE PETALS ANIMATION ============
function createRosePetals() {
    const container = document.querySelector('.rose-petals-container');
    const petals = ['🌹', '🌸', '💐', '🌷', '🌺'];
    
    // Create multiple petals in waves
    for (let wave = 0; wave < 5; wave++) {
        setTimeout(() => {
            for (let i = 0; i < 15; i++) {
                const petal = document.createElement('div');
                petal.className = 'rose-petal';
                petal.textContent = petals[Math.floor(Math.random() * petals.length)];
                
                // Random horizontal position
                const leftPosition = Math.random() * 100;
                petal.style.left = leftPosition + '%';
                petal.style.top = '-50px';
                
                // Random animation duration
                const duration = 3 + Math.random() * 2;
                petal.style.animationDuration = duration + 's';
                
                // Random rotation
                const rotation = Math.random() * 360;
                petal.style.animation = `petalFall ${duration}s linear forwards`;
                petal.style.setProperty('--rotation', rotation + 'deg');
                
                container.appendChild(petal);
                
                // Remove petal after animation
                setTimeout(() => {
                    petal.remove();
                }, duration * 1000);
            }
        }, wave * 400);
    }
}

// ============ LOVE LETTER CLOSE ============
function closeLoveLetter() {
    const loveLetterModal = document.getElementById('loveLetterModal');
    const moon = document.querySelector('.moon');
    
    // Add fade out animation
    loveLetterModal.style.opacity = '0';
    
    setTimeout(() => {
        loveLetterModal.classList.remove('show');
        loveLetterModal.style.opacity = '1';
        
        // Keep the moon glowing
        moon.classList.remove('celebration');
        moon.style.boxShadow = `
            0 0 80px rgba(255, 250, 205, 0.9),
            0 0 120px rgba(255, 250, 205, 0.6),
            inset -30px -30px 60px rgba(0, 0, 0, 0.3)
        `;
    }, 300);
}

// ============ ALLOW GIF/IMAGE REPLACEMENTS ============
// Users can replace placeholder images with actual photos
// To use: Replace the photo-placeholder divs with <img> tags pointing to their files
// Example:
// <div class="photo-item">
//     <img src="path/to/photo1.jpg" alt="photo" class="photo-placeholder">
//     <p class="photo-caption">A moment I'll never forget.</p>
// </div>

// ============ LOCAL MUSIC FILE SETUP ============
// To add custom romantic music:
// 1. Place your MP3 file in the same folder as index.html
// 2. Name it 'romantic-music.mp3' or update the src in index.html
// 3. The music will start playing automatically when the proposal loads

// ============ CUSTOM NAME SUPPORT ============
// To personalize with a different name:
// Replace all instances of "Gayu" in the HTML with the desired name
// The code will work seamlessly with any name

// ============ URL SHARING ============
// This can be deployed to any web hosting service:
// - GitHub Pages (free)
// - Vercel (free)
// - Netlify (free)
// - Any web server
// 
// Once deployed, share the personal URL with that special person!
// The experience will be fully interactive and shareable.

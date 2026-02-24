let cards = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // Select all cards and give them random starting positions/speeds
    let cardElements = selectAll('.video-card');
    
    for (let i = 0; i < cardElements.length; i++) {
        cards.push({
            el: cardElements[i],
            x: random(width - 300),
            y: random(height - 250),
            speedX: random(0.2, 0.5),
            speedY: random(0.1, 0.3)
        });
    }
}

function draw() {
    clear(); // Keeps the background black from CSS
    
    for (let c of cards) {
        // Move coordinates
        c.x += c.speedX;
        c.y += c.speedY;

        // Bounce off walls
        if (c.x > width - 300 || c.x < 0) c.speedX *= -1;
        if (c.y > height - 250 || c.y < 0) c.speedY *= -1;

        // Apply position to the HTML element
        c.el.position(c.x, c.y);
    }
}

// Fullscreen Logic
function openVideo(id) {
    document.getElementById('videoModal').style.display = "block";
    document.getElementById('vimeoPlayer').src = `https://player.vimeo.com/video/${id}?autoplay=1`;
}

function closeVideo() {
    document.getElementById('videoModal').style.display = "none";
    document.getElementById('vimeoPlayer').src = "";
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
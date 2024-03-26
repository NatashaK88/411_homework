document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Define user-controlled object (red square)
    let userControlledObject = {
        x: 50,
        y: 50,
        size: 30,
        color: "red",
        move: function(dx, dy) {
            this.x += dx;
            this.y += dy;
        },
        draw: function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    };

    // Define autonomous object (green triangle)
    let autonomousObject = {
        x: 200,
        y: 200,
        size: 30,
        initialSize: 30, // Store the initial size
        max_size: 100, // Maximum size of the green triangle
        color: "green",
        dx: Math.random() * 2 + 1,  // Random initial velocity
        dy: Math.random() * 2 + 1,
        move: function() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x <= 0 || this.x + this.size >= canvas.width) {
                this.dx *= -1;
            }
            if (this.y <= 0 || this.y + this.size >= canvas.height) {
                this.dy *= -1;
            }
        },
        draw: function() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x + this.size / 2, this.y + this.size);
            ctx.closePath();
            ctx.fill();
        },
        increaseSize: function() {
            if (this.size < this.max_size) {
                this.size += 5;
            }
        },
        resetSize: function() {
            this.size = this.initialSize; // Reset size to initial size
        }
    };

    // Function to check collision between two objects
    function checkCollision(obj1, obj2) {
        return obj1.x < obj2.x + obj2.size &&
               obj1.x + obj1.size > obj2.x &&
               obj1.y < obj2.y + obj2.size &&
               obj1.y + obj1.size > obj2.y;
    }

    // Function to draw both objects on the canvas
    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Check collision
        if (checkCollision(userControlledObject, autonomousObject)) {
            canvas.style.backgroundColor = "pink";
            autonomousObject.increaseSize(); // Increase size of green triangle
        } else {
            canvas.style.backgroundColor = "white";
            autonomousObject.resetSize(); // Reset size if there is no collision
        }

        // Draw border around canvas
        canvas.style.border = "5px solid purple";

        userControlledObject.draw();
        autonomousObject.move();
        autonomousObject.draw();
    }

    // Handle user input (arrow key press)
    document.addEventListener("keydown", function(event) {
        switch(event.key) {
            case "ArrowLeft":
                userControlledObject.move(-10, 0);
                break;
            case "ArrowUp":
                userControlledObject.move(0, -10);
                break;
            case "ArrowRight":
                userControlledObject.move(10, 0);
                break;
            case "ArrowDown":
                userControlledObject.move(0, 10);
                break;
        }
    });

    // Initial draw
    drawCanvas();

    // Main animation loop
    function animate() {
        drawCanvas();
        requestAnimationFrame(animate);
    }
    animate();
});


        // Combined DOMContentLoaded event listener
        document.addEventListener('DOMContentLoaded', function() {
            // Matrix rain effect
            const canvas = document.getElementById('matrix');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resizeCanvas();
            
            // Characters for matrix rain
            const chars = '01アイウエオカキクケコサシスセソタ1234567890MIJHSKSGSチツテトナニヌネノマミムメモヤユヨラリルレロワヲン!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
            const fontSize = 14;
            let columns = Math.floor(canvas.width / fontSize);
            let drops = [];
            
            // Initialize drops array
            function initDrops() {
                drops = [];
                columns = Math.floor(canvas.width / fontSize);
                for (let i = 0; i < columns; i++) {
                    drops[i] = Math.floor(Math.random() * -100);
                }
            }
            initDrops();
            
            // Draw matrix rain
            function drawMatrixRain() {
                // Semi-transparent black for fade effect
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Set text style
                ctx.fillStyle = '#39ff14'; // Neon green
                ctx.font = `${fontSize}px monospace`;
                
                // Draw characters
                for (let i = 0; i < drops.length; i++) {
                    const char = chars.charAt(Math.floor(Math.random() * chars.length));
                    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                    drops[i]++;
                    
                    // Reset drop to top with randomization
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                }
            }
            
            // Update animation
            // Animation loop
            let running = true;

            function animate() {
                if (!running) return;

                drawMatrixRain();
                requestAnimationFrame(animate);
            }

            animate();

            // Stop after 5 seconds
            setTimeout(() => {
                running = false;


                // Optional: clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

            }, 10000);
            
            // Handle window resize
            window.addEventListener('resize', function() {
                resizeCanvas();
                initDrops();
            });
            
            // Typing effect and section animations
            const sections = document.querySelectorAll('section');
            
            // Function to check if an element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return rect.top < window.innerHeight - 100;
            }
            
            // Function to add animation class when element is in viewport
            function handleScroll() {
                sections.forEach(section => {
                    if (isInViewport(section) && !section.classList.contains('active')) {
                        section.classList.add('active');
                        section.style.animation = 'borderPulse 2s forwards';
                        setTimeout(() => {
                            section.style.animation = '';
                        }, 2000);
                    }
                });
            }
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
            
            // Initial check
            handleScroll();
        });

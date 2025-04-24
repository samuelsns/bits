// Interactive elements for the course website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize code highlighting
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });

    // Interactive diagrams
    document.querySelectorAll('.lifecycle-phase, .pyramid-level, .quality-gate, .roadmap-phase').forEach(item => {
        item.addEventListener('click', function() {
            // First, close any open details
            document.querySelectorAll('.phase-details, .level-details, .gate-details').forEach(detail => {
                if (detail.parentNode !== this && detail.classList.contains('active')) {
                    detail.classList.remove('active');
                }
            });
            
            // Toggle the clicked item's details
            const details = this.querySelector('.phase-details, .level-details, .gate-details');
            if (details) {
                details.classList.toggle('active');
            }
        });
    });

    // Quiz functionality
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            const options = question.querySelectorAll('.quiz-option');
            const correctFeedback = question.querySelector('.quiz-feedback.correct');
            const incorrectFeedback = question.querySelector('.quiz-feedback.incorrect');
            
            // Remove previous selections
            options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
            
            // Mark this option as selected
            this.classList.add('selected');
            
            // Check if correct
            if (this.getAttribute('data-correct') === 'true') {
                this.classList.add('correct');
                if (correctFeedback) correctFeedback.style.display = 'block';
                if (incorrectFeedback) incorrectFeedback.style.display = 'none';
            } else {
                this.classList.add('incorrect');
                if (correctFeedback) correctFeedback.style.display = 'none';
                if (incorrectFeedback) incorrectFeedback.style.display = 'block';
                
                // Highlight the correct answer
                options.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('correct');
                    }
                });
            }
        });
    });

    // Tabs functionality (if present)
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabContainer = this.closest('.tabs-container');
            const tabId = this.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContainer.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Deactivate all buttons
            tabContainer.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Activate the clicked button and its content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Collapsible sections
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Code copy functionality
    document.querySelectorAll('.code-header').forEach(header => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        header.appendChild(copyButton);
        
        copyButton.addEventListener('click', function() {
            const codeBlock = this.parentElement.nextElementSibling.querySelector('code');
            const textToCopy = codeBlock.textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                this.textContent = 'Failed';
                setTimeout(() => {
                    this.textContent = 'Copy';
                }, 2000);
            });
        });
    });

    // Interactive cards (if present)
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Tooltips (if present)
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        element.appendChild(tooltip);
        
        element.addEventListener('mouseenter', function() {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', function() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });

    // Progress tracking (if present)
    const progressCheckboxes = document.querySelectorAll('.progress-checkbox');
    if (progressCheckboxes.length > 0) {
        // Load saved progress
        progressCheckboxes.forEach(checkbox => {
            const id = checkbox.getAttribute('id');
            if (localStorage.getItem(id) === 'true') {
                checkbox.checked = true;
            }
            
            // Save progress on change
            checkbox.addEventListener('change', function() {
                localStorage.setItem(id, this.checked);
                updateProgressBar();
            });
        });
        
        // Update progress bar
        function updateProgressBar() {
            const progressBar = document.querySelector('.progress-bar-fill');
            if (progressBar) {
                const total = progressCheckboxes.length;
                const completed = Array.from(progressCheckboxes).filter(cb => cb.checked).length;
                const percentage = (completed / total) * 100;
                progressBar.style.width = percentage + '%';
                
                const progressText = document.querySelector('.progress-text');
                if (progressText) {
                    progressText.textContent = `${completed}/${total} (${Math.round(percentage)}%)`;
                }
            }
        }
        
        updateProgressBar();
    }
});

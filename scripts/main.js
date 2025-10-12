// Interactive functionality for Praveen Electricals website

document.addEventListener('DOMContentLoaded', function () {
    // Find the interactive cards
    const cards = document.querySelectorAll('.card');
    let wiringCard = null;
    let installationCard = null;

    // Find the cards with specific text
    cards.forEach(card => {
        const heading = card.querySelector('h3');
        if (heading && heading.textContent.includes('Marine & Offshore Solutions')) {
            wiringCard = card;
        } else if (heading && heading.textContent.includes('Pipeline Integrity & Surveys')) {
            installationCard = card;
        }
    });

    // Function to add interactive functionality to a card
    function makeCardInteractive(card) {
        if (card) {
            // Add click event listener
            card.addEventListener('click', function () {
                // Toggle the enlarged class
                this.classList.toggle('card-enlarged');

                // Add visual feedback
                if (this.classList.contains('card-enlarged')) {
                    this.style.transform = 'scale(1.5) translateY(-15px)';
                    this.style.zIndex = '10';
                    this.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4)';
                    this.style.transition = 'all 0.15s ease';
                } else {
                    this.style.transform = 'scale(1) translateY(0)';
                    this.style.zIndex = '1';
                    this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    this.style.transition = 'all 0.15s ease';
                }
            });

            // Add hover effect
            card.addEventListener('mouseenter', function () {
                if (!this.classList.contains('card-enlarged')) {
                    this.style.cursor = 'pointer';
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                }
            });

            card.addEventListener('mouseleave', function () {
                if (!this.classList.contains('card-enlarged')) {
                    this.style.transform = 'translateY(-5px) scale(1)';
                }
            });
        }
    }

    // Make both cards interactive
    makeCardInteractive(wiringCard);
    makeCardInteractive(installationCard);

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

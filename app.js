document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------
    // 1. Hamburger Menu Auto-Close
    // ----------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('.menu li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false; // Uncheck checkbox to close menu drawer
            }
        });
    });

    // ----------------------------------------
    // 2. Navigation Scrollspy
    // ----------------------------------------
    const sections = document.querySelectorAll('div.wrapper > div, div.wrapper > section, div.wrapper > footer');
    
    function highlightNavigation() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        // Offset scroll position slightly for better timing
        scrollPosition += 150;

        sections.forEach(section => {
            const id = section.getAttribute('id');
            if (!id) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Run on load

    // ----------------------------------------
    // 3. Menu Category Filtering (Simulated)
    // ----------------------------------------
    const categoryLinks = document.querySelectorAll('.link-menu li a');
    const menuGrid = document.querySelector('.menu-grid');
    
    // Original burger product cards
    const initialProductsHTML = menuGrid ? menuGrid.innerHTML : '';

    // Mock products data for other tabs to make them work!
    const mockProducts = {
        burgers: initialProductsHTML,
        pizza: `
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/usa-pizza.jpeg" alt="Pepperoni Pizza">
                    <div class="overlay-price"><span class="price-product">$15.50</span></div>
                </div>
                <div class="product-content">
                    <h3>Supreme Pepperoni</h3>
                    <p>Italian pepperoni, mozzarella cheese, spiced marinara sauce on a hand-tossed sourdough crust.</p>
                </div>
            </article>
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/ae13339b-5433-465e-94ee-baddec0ad397.jpeg" alt="Margherita Pizza">
                    <div class="overlay-price"><span class="price-product">$13.00</span></div>
                </div>
                <div class="product-content">
                    <h3>Classic Margherita</h3>
                    <p>Fresh buffalo mozzarella, vine-ripened tomatoes, sweet basil, and extra virgin olive oil drizzle.</p>
                </div>
            </article>
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/fc18fe58-6f66-480e-b4dc-e1737038560f.jpeg" alt="BBQ Chicken Pizza">
                    <div class="overlay-price"><span class="price-product">$16.50</span></div>
                </div>
                <div class="product-content">
                    <h3>Smoky BBQ Chicken</h3>
                    <p>Grilled chicken breast chunks, smoked gouda, red onion, cilantro, and bold hickory BBQ sauce base.</p>
                </div>
            </article>
        `,
        steaks: `
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/02a8ef95-29cf-46c6-83eb-6510f108ffa8.jpeg" alt="Ribeye Steak">
                    <div class="overlay-price"><span class="price-product">$28.00</span></div>
                </div>
                <div class="product-content">
                    <h3>Black Angus Ribeye</h3>
                    <p>12oz hand-cut ribeye steak, flame-broiled with garlic herb compound butter, served with roasted asparagus.</p>
                </div>
            </article>
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/3ed8ff9a-4a58-4051-9c20-afec0dd013d2.jpeg" alt="T-Bone Steak">
                    <div class="overlay-price"><span class="price-product">$32.50</span></div>
                </div>
                <div class="product-content">
                    <h3>Prime T-Bone Steak</h3>
                    <p>Premium dry-aged T-Bone steak, grilled to your preference and served with rosemary salted potato wedges.</p>
                </div>
            </article>
        `,
        pasta: `
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/noodles.jpeg" alt="Alfredo Pasta">
                    <div class="overlay-price"><span class="price-product">$14.50</span></div>
                </div>
                <div class="product-content">
                    <h3>Truffle Chicken Alfredo</h3>
                    <p>Fettuccine pasta tossed in creamy parmesan alfredo sauce, grilled chicken, and black truffle oil.</p>
                </div>
            </article>
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/a9620eaa-d997-4ac2-8599-a64a4c5305b3.jpeg" alt="Bolognese Pasta">
                    <div class="overlay-price"><span class="price-product">$13.99</span></div>
                </div>
                <div class="product-content">
                    <h3>Classic Beef Bolognese</h3>
                    <p>Spaghetti loaded with slow-simmered beef ragù, herbs, tomatoes, and finished with shaved Pecorino Romano.</p>
                </div>
            </article>
        `,
        salads: `
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/background.jpg" alt="Caesar Salad">
                    <div class="overlay-price"><span class="price-product">$10.50</span></div>
                </div>
                <div class="product-content">
                    <h3>Grilled Chicken Caesar</h3>
                    <p>Crispy romaine lettuce, herb croutons, parmesan cheese shavings, grilled chicken strips, and Caesar dressing.</p>
                </div>
            </article>
        `,
        drinks: `
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/1.avif" alt="Craft Beer">
                    <div class="overlay-price"><span class="price-product">$6.00</span></div>
                </div>
                <div class="product-content">
                    <h3>Local Craft Beer</h3>
                    <p>Selection of seasonal local drafts and IPAs served ice-cold straight from the tap.</p>
                </div>
            </article>
            <article class="single-product">
                <div class="product-img-wrapper">
                    <img src="image/c162de59-e4d2-4d3a-8fed-6f100f3596c4.jpeg" alt="Exotic Mojito">
                    <div class="overlay-price"><span class="price-product">$8.50</span></div>
                </div>
                <div class="product-content">
                    <h3>Fresh Lime Mojito</h3>
                    <p>Refreshing blend of fresh white rum, muddled mint leaves, lime juice, brown sugar, and sparkling soda.</p>
                </div>
            </article>
        `
    };

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active classes
            categoryLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            const categoryName = link.textContent.toLowerCase().trim();
            if (menuGrid && mockProducts[categoryName]) {
                // Add a smooth fade transition out and in
                menuGrid.style.opacity = '0';
                menuGrid.style.transform = 'translateY(10px)';
                menuGrid.style.transition = 'all 0.3s ease';

                setTimeout(() => {
                    menuGrid.innerHTML = mockProducts[categoryName];
                    menuGrid.style.opacity = '1';
                    menuGrid.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    });

    // ----------------------------------------
    // 4. Booking Form Validation & Submit
    // ----------------------------------------
    const reservationForm = document.getElementById('reservationForm');
    const bookingResult = document.querySelector('.res-booking');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Fetch input data for user visual confirmation
            const name = reservationForm.elements['name'].value;
            const date = reservationForm.elements['date'].value;
            const time = reservationForm.elements['time'].value;

            if (bookingResult) {
                // Style and render success message
                bookingResult.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your table is successfully booked for ${date} at ${time}.`;
                bookingResult.style.color = '#00cc44';
                bookingResult.style.marginTop = '20px';
                bookingResult.style.fontWeight = '600';
                bookingResult.style.fontSize = '16px';
                bookingResult.style.display = 'block';
                bookingResult.style.textShadow = '0 0 10px rgba(0, 204, 68, 0.2)';

                // Animate message entry
                bookingResult.style.opacity = '0';
                bookingResult.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    bookingResult.style.opacity = '1';
                }, 50);
            }

            // Clear the form fields after successful booking
            reservationForm.reset();
        });
    }
});

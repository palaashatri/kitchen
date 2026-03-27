document.addEventListener('DOMContentLoaded', () => {

    // 1. Automatically match system color scheme
    const root = document.documentElement;
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applySystemTheme = () => {
        root.dataset.theme = colorSchemeQuery.matches ? 'dark' : 'light';
    };

    applySystemTheme();

    if (typeof colorSchemeQuery.addEventListener === 'function') {
        colorSchemeQuery.addEventListener('change', applySystemTheme);
    } else if (typeof colorSchemeQuery.addListener === 'function') {
        colorSchemeQuery.addListener(applySystemTheme);
    }

    // 2. Generate ambient animated background blobs
    const bgContainer = document.getElementById('animated-bg');

    for (let i = 0; i < 16; i++) {
        const blob = document.createElement('div');
        blob.className = 'ambient-blob';

        blob.style.setProperty('--x', `${Math.random() * 100}%`);
        blob.style.setProperty('--y', `${Math.random() * 100}%`);
        blob.style.setProperty('--size', `${70 + Math.random() * 180}px`);
        blob.style.setProperty('--duration', `${10 + Math.random() * 12}s`);
        blob.style.setProperty('--delay', `-${Math.random() * 12}s`);

        bgContainer.appendChild(blob);
    }

    const images = [
        "WhatsApp Image 2026-03-27 at 2.31.10 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.11 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.11 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.11 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.12 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.12 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.12 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.13 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.13 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.13 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.14 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.14 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.14 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.15 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.15 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.15 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM (3).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.17 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.17 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.18 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.18 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.18 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.19 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.19 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.19 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.20 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.20 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.20 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.21 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.21 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.21 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.22 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.22 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.23 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.23 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.23 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.24 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.24 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.24 PM.jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.25 PM (1).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.25 PM (2).jpeg",
        "WhatsApp Image 2026-03-27 at 2.31.25 PM.jpeg"
    ];

    const cakeCatalog = [
        {
            title: 'Golden Mane Sprinkle Dream',
            description: 'Blue cream base with piped lion face topper, yellow mane dollops, multicolored sprinkles and gold sugar balls on a golden board.',
            category: 'Kids'
        },

        {
            title: 'Stellar Midnight Wishes',
            description: 'Glossy dark chocolate finish with gold numeral toppers, floating star wires and gold happy new accents for a New Year party.',
            category: 'Celebration'
        },
        {
            title: 'Enchanted Rose Garden',
            description: 'Smooth white cream with piped red roses, gold beads and a central happy birthday plaque.',
            category: 'Birthday'
        },
        {
            title: 'Crown of Love & Light',
            description: 'White frosted cake with red heart accents, ribbon bows and a gold crown happy birthday topper.',
            category: 'Birthday'
        },
        {
            title: 'Pulse of Devotion',
            description: 'White frosted round cake with black ECG piping ending in a red heart, finished with edge sprinkles.',
            category: 'Romantic'
        },
        {
            title: 'Joyful Blush & Pearls',
            description: 'Cartoon face design with piped hair, pearl accents and rosy cheeks for a playful look.',
            category: 'Kids'
        },
        {
            title: 'Merry Swirl of Evergreen',
            description: 'Red frosted cake topped with green piped tree swirls, candy lights and Merry Christmas lettering.',
            category: 'Christmas'
        },
        {
            title: 'Petals in Flight',
            description: 'Pink-to-white gradient cream with piped flowers, chocolate shards and a butterfly happy birthday topper.',
            category: 'Birthday'
        },
        {
            title: 'Jeweled Heart Glow',
            description: 'White frosted cake with a glossy red jelly heart center, piped cream border and gold balloon style spheres.',
            category: 'Romantic'
        },
        {
            title: 'Golden Dreams in Ruffles',
            description: 'White ruffled piping with metallic gold hearts and beads for an elegant celebration finish.',
            category: 'Designer'
        },
        {
            title: 'Blooming Coral Paradise',
            description: 'Single-tier cake covered in coral, lavender and white cream flowers with gold accents and edible pearls.',
            category: 'Designer'
        },
        {
            title: 'Dad\'s Dapper Delight',
            description: 'Square cake styled as a shirt with fondant collar and polka-dot tie, with PAPA lettering and birthday topper.',
            category: 'Personalized'
        },
        {
            title: 'Velvet Chocolate Symphony',
            description: 'Glossy dark chocolate glaze with chocolate swirls, cream dollops, gold sprinkles and heart-shaped chocolate pieces.',
            category: 'Chocolate'
        },
        {
            title: 'Lavender\'s Whispered Dreams',
            description: 'Soft lavender center with white edges, piped purple flowers, green leaves and scattered gold beads.',
            category: 'Designer'
        },
        {
            title: 'Royal Princess Whimsy',
            description: 'Pink bow focal point, fondant girl figure, butterflies and floral accents for a whimsical birthday design.',
            category: 'Kids'
        },
        {
            title: 'Forever Begins Here',
            description: 'Two-tier design decorated with flowers, butterflies and a glowing heart ring topper reading engaged.',
            category: 'Engagement'
        },
        {
            title: 'Nani\'s Colorful Portrait',
            description: 'Teal frosted cake with cartoon face, glasses, colorful accents and NANI lettering in fondant.',
            category: 'Personalized'
        },
        {
            title: 'Mystery Solver\'s Sweet Case',
            description: 'Themed novelty cake with police line strip, magnifying glass, edible eyes and dramatic red shard detail.',
            category: 'Themed/Novelty'
        },
        {
            title: 'Pearl & Rose Forever',
            description: 'White frosted cake with delicate pearls, two red roses and a golden Happy Anniversary topper.',
            category: 'Anniversary'
        },
        {
            title: 'Campfire Victory Feast',
            description: 'Blue frosted cake with flame piping, chocolate campfire, treasure details and game-inspired toppers.',
            category: 'Gaming/Kids'
        },
        {
            title: 'Cozy Chai Comfort',
            description: 'Beige frosted cake with drip, miniature samosas, biscuits and printed chai themed toppers.',
            category: 'Themed/Cultural'
        },
        {
            title: 'Love Wins Every Time',
            description: 'White cake with a tic-tac-toe grid, bold husband lettering and red heart decorations.',
            category: 'Romantic'
        },
        {
            title: 'Stories in Full Bloom',
            description: 'Multi-tier fondant cake with floral elements, photo blocks and a gold Happy Birthday topper.',
            category: 'Designer'
        },
        {
            title: 'Rainbow\'s Vibrant Celebration',
            description: 'Square cake topped with colorful candies, chocolate lines, cookies and a Happy Holi topper.',
            category: 'Festival'
        },
        {
            title: 'Crimson Heart\'s Reflection',
            description: 'Heart-shaped cake with mirror red glaze and a white piped border on a golden board.',
            category: 'Romantic'
        },
        {
            title: 'Cheeky Plate of Sweetness',
            description: 'Playful novelty cake designed like a spaghetti plate with fondant noodles, toppings and sauces.',
            category: 'Themed/Novelty'
        },
        {
            title: 'Velvet Romance Classic',
            description: 'Heart-shaped red velvet crumb finish with soft white frosting border for a classic romantic look.',
            category: 'Romantic'
        },
        {
            title: 'One Year\'s Sweet Milestone',
            description: 'Mini bottle-shaped cake in white and blue fondant with a pink top and red number 1.',
            category: 'Kids'
        },
        {
            title: 'Passionate Scarlet Gem',
            description: 'Red frosted cake with black heart motifs and golden heart toppers for a romantic gifting style.',
            category: 'Romantic'
        },
        {
            title: 'Love Planted Deep',
            description: 'Cylindrical cake styled as a flower pot with chocolate soil effect and Valentine decor.',
            category: 'Romantic'
        },
        {
            title: 'Sweet Testament',
            description: 'Glossy chocolate cake with red hearts, cream swirls, chocolate shavings and custom name detailing.',
            category: 'Personalized'
        },
        {
            title: 'Two Hearts\' Silhouette',
            description: 'Light-frosted cake with a couple silhouette topper and a love you banner.',
            category: 'Romantic'
        },
        {
            title: 'Sister Bond Forever',
            description: 'Beige celebration cake with sister-themed fondant figures, hearts and a custom message.',
            category: 'Personalized'
        },
        {
            title: 'Sparkling Silver Celebration',
            description: 'Tall white anniversary cake with red and silver spheres, mirror-ball accents and a golden topper.',
            category: 'Anniversary'
        },
        {
            title: 'Berry Jewel Crown',
            description: 'White cake with piped blue frosting edges, glossy dark berry center and scattered silver dragees.',
            category: 'Fruit-based'
        },
        {
            title: 'Golden Years Comfort',
            description: 'Grey frosted scene cake featuring a fondant recliner figure and custom 65 birthday elements.',
            category: 'Personalized'
        },
        {
            title: 'Pearl Swirl Magic',
            description: 'Blue-purple swirled cream with pearl accents, Birthday Girl topper and name styling.',
            category: 'Birthday'
        },
        {
            title: 'Butterfly Garden Whispers',
            description: 'Cream sided cake with pastel floral rosettes and butterfly toppers for a soft designer look.',
            category: 'Designer'
        },
        {
            title: 'Illuminated Love Flame',
            description: 'Heart cake with glossy chocolate top, red accents, gold beads and tall golden candle detail.',
            category: 'Romantic'
        },
        {
            title: 'Pure Chocolate Bliss',
            description: 'Round chocolate cake with a rich glossy glaze and cocoa dusting for a bold minimalist finish.',
            category: 'Chocolate'
        },
        {
            title: 'Golden Half-Century Wings',
            description: 'Pastel-greenanniversary cake with piped swirls, butterfly accents and a prominent 50 topper.',
            category: 'Anniversary'
        },
        {
            title: 'Whisker Wishes & Confetti',
            description: 'Playful cat face design with colorful details and a bright red bow centerpiece.',
            category: 'Kids'
        },
        {
            title: 'Stories of Love',
            description: 'Multi-tier anniversary display cake with floral decor, photo story elements and number detailing.',
            category: 'Anniversary'
        },
        {
            title: 'Blooms in Pink',
            description: 'Pink rosette styled cake with butterfly accents and a bold number topper.',
            category: 'Anniversary'
        },
        {
            title: 'Glam Girl\'s Palette',
            description: 'Square pink cake featuring fondant makeup kit elements such as lipstick, brush and palette props.',
            category: 'Themed/Personal'
        },
        {
            title: 'Garden\'s Golden Glory',
            description: 'Single-tier designer cake with colorful fondant flowers, gold accents and a reflective base.',
            category: 'Designer'
        }
    ];

    const imageToCakeTitle = {
        "WhatsApp Image 2026-03-27 at 2.31.10 PM.jpeg": "Golden Years Comfort",
        "WhatsApp Image 2026-03-27 at 2.31.11 PM (1).jpeg": "Pearl Swirl Magic",
        "WhatsApp Image 2026-03-27 at 2.31.11 PM (2).jpeg": "Butterfly Garden Whispers",
        "WhatsApp Image 2026-03-27 at 2.31.11 PM.jpeg": "Illuminated Love Flame",
        "WhatsApp Image 2026-03-27 at 2.31.12 PM (1).jpeg": "Pure Chocolate Bliss",
        "WhatsApp Image 2026-03-27 at 2.31.12 PM (2).jpeg": "Golden Half-Century Wings",
        "WhatsApp Image 2026-03-27 at 2.31.12 PM.jpeg": "Whisker Wishes & Confetti",
        "WhatsApp Image 2026-03-27 at 2.31.13 PM (1).jpeg": "Stories of Love",
        "WhatsApp Image 2026-03-27 at 2.31.13 PM (2).jpeg": "Blooms in Pink",
        "WhatsApp Image 2026-03-27 at 2.31.13 PM.jpeg": "Glam Girl\'s Palette",
        "WhatsApp Image 2026-03-27 at 2.31.14 PM (1).jpeg": "Berry Jewel Crown",
        "WhatsApp Image 2026-03-27 at 2.31.14 PM (2).jpeg": "Stories in Full Bloom",
        "WhatsApp Image 2026-03-27 at 2.31.14 PM.jpeg": "Rainbow\'s Vibrant Celebration",
        "WhatsApp Image 2026-03-27 at 2.31.15 PM (1).jpeg": "Crimson Heart\'s Reflection",
        "WhatsApp Image 2026-03-27 at 2.31.15 PM (2).jpeg": "Cheeky Plate of Sweetness",
        "WhatsApp Image 2026-03-27 at 2.31.15 PM.jpeg": "Velvet Romance Classic",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM (1).jpeg": "One Year\'s Sweet Milestone",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM (2).jpeg": "Passionate Scarlet Gem",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM (3).jpeg": "Love Planted Deep",
        "WhatsApp Image 2026-03-27 at 2.31.16 PM.jpeg": "Sweet Testament",
        "WhatsApp Image 2026-03-27 at 2.31.17 PM (1).jpeg": "Two Hearts\' Silhouette",
        "WhatsApp Image 2026-03-27 at 2.31.17 PM.jpeg": "Sister Bond Forever",
        "WhatsApp Image 2026-03-27 at 2.31.18 PM (1).jpeg": "Sparkling Silver Celebration",
        "WhatsApp Image 2026-03-27 at 2.31.18 PM (2).jpeg": "Blooming Coral Paradise",
        "WhatsApp Image 2026-03-27 at 2.31.18 PM.jpeg": "Dad\'s Dapper Delight",
        "WhatsApp Image 2026-03-27 at 2.31.19 PM (1).jpeg": "Velvet Chocolate Symphony",
        "WhatsApp Image 2026-03-27 at 2.31.19 PM (2).jpeg": "Lavender\'s Whispered Dreams",
        "WhatsApp Image 2026-03-27 at 2.31.19 PM.jpeg": "Royal Princess Whimsy",
        "WhatsApp Image 2026-03-27 at 2.31.20 PM (1).jpeg": "Forever Begins Here",
        "WhatsApp Image 2026-03-27 at 2.31.20 PM (2).jpeg": "Nani\'s Colorful Portrait",
        "WhatsApp Image 2026-03-27 at 2.31.20 PM.jpeg": "Mystery Solver\'s Sweet Case",
        "WhatsApp Image 2026-03-27 at 2.31.21 PM (1).jpeg": "Pearl & Rose Forever",
        "WhatsApp Image 2026-03-27 at 2.31.21 PM (2).jpeg": "Campfire Victory Feast",
        "WhatsApp Image 2026-03-27 at 2.31.21 PM.jpeg": "Cozy Chai Comfort",
        "WhatsApp Image 2026-03-27 at 2.31.22 PM (1).jpeg": "Love Wins Every Time",
        "WhatsApp Image 2026-03-27 at 2.31.22 PM (2).jpeg": "Golden Mane Sprinkle Dream",
        "WhatsApp Image 2026-03-27 at 2.31.23 PM (1).jpeg": "Stellar Midnight Wishes",
        "WhatsApp Image 2026-03-27 at 2.31.23 PM (2).jpeg": "Enchanted Rose Garden",
        "WhatsApp Image 2026-03-27 at 2.31.23 PM.jpeg": "Crown of Love & Light",
        "WhatsApp Image 2026-03-27 at 2.31.24 PM (1).jpeg": "Pulse of Devotion",
        "WhatsApp Image 2026-03-27 at 2.31.24 PM (2).jpeg": "Joyful Blush & Pearls",
        "WhatsApp Image 2026-03-27 at 2.31.24 PM.jpeg": "Merry Swirl of Evergreen",
        "WhatsApp Image 2026-03-27 at 2.31.25 PM (1).jpeg": "Petals in Flight",
        "WhatsApp Image 2026-03-27 at 2.31.25 PM (2).jpeg": "Jeweled Heart Glow",
        "WhatsApp Image 2026-03-27 at 2.31.25 PM.jpeg": "Golden Dreams in Ruffles"
    };

    const cakeCatalogByTitle = Object.fromEntries(
        cakeCatalog.map((entry) => [entry.title, entry])
    );

    const cakeNotesByImage = Object.fromEntries(
        Object.entries(imageToCakeTitle)
            .map(([fileName, title]) => [fileName, cakeCatalogByTitle[title]])
            .filter(([, note]) => Boolean(note))
    );

    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('postcard-modal');
    const closeModalBtn = document.getElementById('modal-close');
    const postcardImage = document.getElementById('postcard-image');
    const postcardTitle = document.getElementById('postcard-title');
    const postcardDescription = document.getElementById('postcard-description');
    const postcardCategory = document.getElementById('postcard-category');
    const postcardFile = document.getElementById('postcard-file');

    const getCakeNote = (imageName) => {
        const note = cakeNotesByImage[imageName];

        if (note) {
            return note;
        }

        return {
            title: 'Signature Bakery Delight',
            description: 'Freshly handcrafted at Pallav\'s Kitchen with premium ingredients and thoughtful finishing details.',
            category: 'House Special'
        };
    };

    const openPostcard = ({ src, title, description, category, alt, fileName }) => {
        postcardImage.src = src;
        postcardImage.alt = alt;
        postcardTitle.textContent = title;
        postcardDescription.textContent = description;
        postcardCategory.textContent = category;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closePostcard = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Populate gallery
    images.forEach((imgSrc) => {
        const note = getCakeNote(imgSrc);

        const item = document.createElement('div');
        item.className = 'gallery-item reveal';
        item.tabIndex = 0;
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Open details for ${note.title}`);
        
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.src = `images/${encodeURIComponent(imgSrc)}`;
        img.alt = note.title;

        item.addEventListener('click', () => {
            openPostcard({
                src: img.src,
                alt: note.title,
                title: note.title,
                description: note.description,
                category: note.category,
                fileName: imgSrc
            });
        });

        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openPostcard({
                    src: img.src,
                    alt: note.title,
                    title: note.title,
                    description: note.description,
                    category: note.category,
                    fileName: imgSrc
                });
            }
        });

        item.appendChild(img);
        galleryContainer.appendChild(item);
    });

    closeModalBtn.addEventListener('click', closePostcard);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closePostcard();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closePostcard();
        }
    });

    // 4. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial trigger for hero section items
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
            if (el.classList.contains('hero-content')) {
                el.classList.add('active');
            } else {
                revealOnScroll.observe(el);
            }
        });
    }, 100);

});

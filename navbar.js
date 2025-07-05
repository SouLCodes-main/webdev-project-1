// navbar.js

// Function to create and append elements
function createElement(tagName, className, parent) {
    var element = document.createElement(tagName);
    element.className = className;
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

// Function to handle scroll event
function handleScroll() {
    var navbar = document.querySelector('.znav-white');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Create Navbar using JavaScript
function createNavbar(parentId) {
    var parentElement = document.getElementById(parentId);
    
    // CSS Styles
    var style = document.createElement('style');
    style.textContent = `
        /* Navbar Styles */
        .znav-white {
            transition: background-color 0.3s ease-in-out;
            max-height: 99px;
           
          
            
        }

        .blue-color {
            color: #af86bd !important;
        }

        .znav-white.scrolled {
            background-color: #2A1A40 !important;
            box-shadow: 0 0 30px rgba(0, 0, 0) !important;
            
           
        }

        /* Hide scrollbar */
        body::-webkit-scrollbar {
            display: none;
           
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        body {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }

        @media (max-width: 991px) {

            .znav-white {
                overflow: hidden;
                max-width: 100%;
                transition: background-color 0.3s ease-in-out;
                max-height: none;
                background-color: #082552 !important;

              
                
            }
    
            .blue-color {
                color: 
                #af86bd !important;
            }
    
            .znav-white.scrolled {
                background-color: #082552 !important;
                box-shadow: 0 0 30px rgba(0, 0, 0) !important;
                
               
            }
    
            /* Hide scrollbar */
            body::-webkit-scrollbar {
                display: none;
               
            }
    
            /* Hide scrollbar for IE, Edge and Firefox */
            body {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
            }


        }
    `;
    document.head.appendChild(style);

    // Navbar Container
    var navbarContainer = createElement('div', 'znav-white znav-container znav-fixed w-100 sticky-top', parentElement);
    var container = createElement('div', 'container py-lg-2', navbarContainer);
    
    // Navbar
    var nav = createElement('nav', 'navbar navbar-expand-lg', container);
    
    // Navbar Brand
    var brandLink = createElement('a', 'navbar-brand overflow-hidden pos-lg-absolute absolute-lg-centered', nav);
    brandLink.href = 'index.html';
    var logoImg = createElement('img', 'd-block', brandLink);
    logoImg.src = 'assets/images/favicons/logo.png';
    logoImg.alt = '';
    logoImg.width = '140';
    
    // Navbar Toggler
    var togglerButton = createElement('button', 'navbar-toggler', nav);
    togglerButton.type = 'button';
    togglerButton.dataset.toggle = 'collapse';
    togglerButton.dataset.target = '#navbarNavDropdown';
    togglerButton.setAttribute('aria-controls', 'navbarNavDropdown');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');
    var hamburger = createElement('div', 'hamburger hamburger--emphatic', togglerButton);
    var hamburgerBox = createElement('div', 'hamburger-box', hamburger);
    createElement('div', 'hamburger-inner', hamburgerBox);
    
    // Navbar Collapse
    var collapseDiv = createElement('div', 'collapse navbar-collapse', nav);
    collapseDiv.id = 'navbarNavDropdown';
    var navbarNav = createElement('ul', 'navbar-nav py-0 py-lg-2', collapseDiv);
    
    // Navbar items (you can add your menu items here)
    var navItems = ['Our Expertise', 'Projects', 'Our Process', 'About', 'Contact', 'Blogs'];
    navItems.forEach(function(item) {
        var listItem = createElement('li', '', navbarNav);
        var link = createElement('a', '', listItem);
        link.href = item.toLowerCase() + '.html';
        link.textContent = item;
    });
}

// Call function to create Navbar with parent element id
createNavbar('navbarContainer');

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLinksEl = document.querySelector('.nav__links');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('.section');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Smooth scrolling section1
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Implementing Page Navigation
navLinksEl.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Building a Tabbed Component

tabsContainer.addEventListener('click', e => {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; // guard class

  // Activate and deactivate tabs
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );

  const tabContent = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  tabContent.classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu fade animation

// The event handler function can accept only one argument "e". To pass multiple arguments it possible to use array
const handleHover = function (e) {
  const [opacity, borderWidth, leftPadding] = [...this];

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = opacity;
        logo.style.opacity = opacity;
      }
    });
  }
};

// Passing "argument" into handler. The first argument is "this", so we passing this into event handler function using "bind" method
//nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseover', handleHover.bind([0.5, 3, 5]));

nav.addEventListener('mouseout', handleHover.bind([1, 3, 5]));

///////////////////////////////////////
// Sticky navigation

// Bad way
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', e => {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Modern way
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

// Create observer
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // If null, the root is entire viewport
  threshold: 0, // persentage. When target intersect root in %. Might be an array
  rootMargin: `-${navHeight}px`, // Shift in pixels when to trigger intersection
});

// Observe target element(header)
headerObserver.observe(header);

///////////////////////////////////////
// Revealing elements on scroll

const revealSection = (entries, observer) => {
  const [entry] = entries;
  const sectionTarget = entry.target; // Get current intersected section

  if (!entry.isIntersecting) return;

  if (sectionTarget.classList.contains('section--hidden')) {
    sectionTarget.classList.remove('section--hidden');
    observer.unobserve(sectionTarget); // Remove section from observer
  }
};

// Create a new observer
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: '-100px',
});

// Attach observer to all sections
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Implement slider
const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  // Global variables
  let curSlide = 0;
  const maxSlides = slides.length;

  // Create dots
  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Makes dot active
  const activateDot = slide => {
    const dots = dotContainer.querySelectorAll('.dots__dot');
    dots.forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // Main logic
  const goToSlide = slide =>
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );

  // Next slide
  const nextSlide = () => {
    if (curSlide === maxSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous slide
  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlides - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();
  // Event listeners for arrow left/right buttons
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Event listener for key press
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  // Add event listener to dot container
  dotContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('dots__dot')) return;
    const { slide } = e.target.dataset;
    curSlide = slide;
    goToSlide(slide);
    activateDot(slide);
  });
};

slider();
// Intersection observer
///////////////////////////////////////
// LECTURES
/**
 * Lifecycle DOM Events
 */
/*
// Event triggered when HTML loaded compleately
document.addEventListener('DOMContentLoaded', e => {
  console.log('HTML parsed and DOM tree built!', e);
});

// Event triggered when images completely loaded
window.addEventListener('load', e => {
  console.log('Page fully loaded', e);
});

// Event triggered right before leaving the page
window.addEventListener('beforeunload', e => {
  e.preventDefault();
  e.returnValue = '';
});
*/
/**
 * A Better Way: The Intersection Observer API
 */
/*
// Observer callback
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

// Observer options
const obsOptions = {
  root: null, // element that intersect target element(section1). If null, the root is entire viewport
  threshold: [0, 0.2], // persentage. When target intersect root in %
};

// Create new intersection observer
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
/**
 * DOM Traversing
 */
/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')); // choose all child elements of h1  with highlight class, no matter how deep they are

console.log(h1.childNodes); // all childs with different node type
console.log(h1.children); // HTMLCollection. html elements
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closes parent element of h1, no matter how far up

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
*/

/**
 * Event Propagation in Practice
 */
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * Math.abs(max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
  // e.target -> element that initiate an event, e.currentTarger -> element that attached with current event listener
  console.log('LINK', e.target, e.currentTarget);

  // e.currentTarget is the same as this because this target to the attached element
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor(0, 255);
    console.log('NAV', e.target, e.currentTarget);
  },
  true
); // Enable capturing phase, the 3rd parameter. In that case NAV -> LINK -> CONTAINER
*/
/**
 * Types of Events and Event Handlers
 */
/*
const h1 = document.querySelector('h1');
const alertH1 = e => {
  alert('addEventListener: Great! You are reading the heading :D');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);
// h1.onmouseenter = e => {
//   alert('addEventListener: Great! You are reading the heading :D');
// };
*/

/**
 * Implementing Smooth Scrolling
 */
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coord = section1.getBoundingClientRect();
  const btnCoord = e.target.getBoundingClientRect();
  // console.log(btnCoord);
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  // console.log(
  //   'heifgt and width of the viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // window.scrollTo(s1coord.left + window.scrollY, s1coord.top + window.scrollY);

  // window.scrollTo({
  //   left: s1coord.left + window.scrollX,
  //   top: s1coord.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

/**
 * Styles, Attributes and Classes
 */
/*
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message));

const messageHeight = `${
  Number.parseFloat(getComputedStyle(message).height, 10) + 30
}px`;
console.log(messageHeight);
message.style.height = messageHeight;

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.alt = 'Beautiful minimalist logo';

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
*/

/**
 * Selecting, Creating, and Deleting Elements
 */
/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.head');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

const allSectionsCollection = document.getElementsByClassName('section');
console.log(allSectionsCollection);

// Creating and inserting elements
// insertAdjacentHTML

const additionHeadingSpan = `<span>This is an addition to the highlight heading</span>`;
document
  .querySelector('.highlight')
  .insertAdjacentHTML('beforeend', additionHeadingSpan);

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.insertAdjacentElement('afterbegin', message);
// header.append(message.cloneNode(true));

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
*/

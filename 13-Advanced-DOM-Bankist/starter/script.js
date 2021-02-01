'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');

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
// Smooth scrolling "Learn more" button untill section1

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
/* ***** Page navigation ***** */

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching strategy
  if (
    e.target.classList.contains('nav__link') &&
    e.target.getAttribute('href') !== '#'
  ) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
/* ***** tabs operations ***** */

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(c => {
    c.classList.remove('operations__content--active');
  });

  // Active tab
  clicked.classList.add('operations__tab--active');
  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
/* ***** Menu fade animation ***** */
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sublings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sublings.forEach(el => {
      if (el != link) {
        el.style.cssText = `opacity:${this}`;
      }
    });
    logo.style.cssText = `opacity:${this}`;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// Sticky navigation
/*window.addEventListener('scroll', function () {
  const coordsSection1 = section1.getBoundingClientRect();
  const coordYSection1 = coordsSection1.top + window.pageYOffset;
  if (window.scrollY >= coordYSection1) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/

///////////////////////////////////////
/* ***** Sticky navigation: Intersection Observer API ***** */

/*const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
/* ***** Reveale sections ***** */
const allSections = document.querySelectorAll('.section');
const revealeSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealeSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

///////////////////////////////////////
/* ***** Lazy loading images ***** */
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});

///////////////////////////////////////
/* ***** Slider ***** */
const slider = function () {
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slides = document.querySelectorAll('.slide');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.cssText = `transform :translateX(${100 * (i - slide)}%)`;
    });
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Prev slide

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
      activateDot(0);
    }
  });
};
slider();
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// 181. Selecting, Creating, and Deleting Elements

/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// get element by ID, querySelector, querySelectorAll
document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
document.getElementById('section--1');

// getElementsByTagName return 'live' html collection
// If delete from dom, the collection automatically updates

const allSectionsByTagName = document.getElementsByTagName('section');
console.log(allSectionsByTagName);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


// Creating and inserting elements
// .insertAdjacentHTML

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
console.log(message);
// message.textContent = `We use cookies for improve functionality and analitics`;
message.innerHTML = `We use cookies for improve functionality and analitics <button class="btn btn--close-cookie">Got it!</button>`;

// document.querySelector('.header').insertAdjacentElement('afterbegin', message);
// document
//   .querySelector('.header')
//   .insertAdjacentElement('beforeend', message.cloneNode(true));
// document.querySelector('.header').insertAdjacentElement('afterbegin', message);

header.prepend(message);
header.append(message);
header.before(message); // subling
header.after(message); // subling

// Delete elements

document
.querySelector('.btn--close-cookie')
.addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
});
*/

/*
// 182. Styles, Attributes and Classes

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
console.log(message);
message.innerHTML = `We use cookies for improve functionality and analitics <button class="btn btn--close-cookie">Got it!</button>`;
header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Styles

message.style.cssText = 'background-color: #37383d; width : 120%';

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.src); // return absolute path
console.log(logo.getAttribute('src')); // return relative path

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');
// logo.className = 'jonas';
*/

/*
// 183. Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'heught/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

/*
// 184. Types of Events and Event Handlers

const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('addEventListener: Great! You are reading the heading');
  // remove event listener
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => {
  // remove event listener
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// oldschool. Don't use
// h1.onmouseenter = function () {
//   alert('addEventListener: Great! You are reading the heading');
// };
*/

/*
// 185. Event Propagation: Bubbling and Capturing

// rgb(255,255,255)

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randonColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randonColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.cssText = `background-color:${randonColor()}`;
  console.log('LINK', e.target, e.currentTarget);

  //stop propogation
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.cssText = `background-color:${randonColor()}`;
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.cssText = `background-color:${randonColor()}`;
  console.log('NAV', e.target, e.currentTarget);
});
*/

/*
// 188. DOM Traversing

const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closest finds closest parent of the element
console.log(h1.closest('.header'));

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

//189. Building a Tabbed Component

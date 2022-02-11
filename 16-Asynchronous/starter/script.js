'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const images = document.querySelector('.images');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

let curImage;

const wait = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      images.insertAdjacentElement('afterbegin', img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

async function loadNPause() {
  try {
    const firstImg = await createImage('img/img-1.jpg');
    curImage = firstImg;
    await wait(2);
    curImage.style.display = 'none';
    await wait(2);
    const secondImg = await createImage('img/img-2.jpg');
    curImage = secondImg;
    await wait(2);
    curImage.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
}

const loadAll = async function (imgArr) {
  const imgs = await Promise.all(
    imgArr.map(async img => await createImage(img))
  );
  imgs.forEach(img => img.classList.add('parallel'));
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// createImage('img/img-1.jpg')
//   .then(img => {
//     curImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     curImage.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => createImage('img/img-2.jpg'))
//   .then(img => {
//     curImage = img;
//     return wait(2);
//   })
//   .then(() => (curImage.style.display = 'none'))
//   .catch(err => console.error(err));

/**
 * Other Promise Combinators: race, allSettled and any
 */
/*
const getJSON = url => fetch(url).then(response => response.json());
// Promise.race
(async function () {
  // race return the first fullfilled promise. Only one result. The first rejected win the race as well
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
// The difference from Promise.all it return all result fulfilled and rejected. Promise.all all promise should be fulfilled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

// Promise.any [ES2021]
// Simular with Promise.race, but it ignore regected promises and return the first fulfilled promise
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));
*/
/**
 * Running Promises in Parallel
 */
/*
const getJSON = url => fetch(url).then(response => response.json());

const get3Countries = async function (c1, c2, c3) {
  try {
    // In that case 3 AJAX calls were triggered and they wait each other. It should be dode in parrallel.
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // Takes array of promises and execute all at the same time. If ome promise rejected, the ALL final promise will be rejected
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital));
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err.message);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
*/
/**
 * Consuming Promises with Async/Await
 */

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Reverse geocoding
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) {
      throw new Error(`Problem getting location data`);
    }
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    const data = await res.json();
    if (data.status === 404) {
      throw new Error(`Problem getting country`);
    }
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);

    // Reject promise returned from async fucntion
    throw err;
  }
};
console.log('1: Will get location');
// const city = whereAmI().then;
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();

*/

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
let curImage;

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      images.insertAdjacentElement('afterbegin', img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    curImage = img;
    return wait(2);
  })
  .then(() => {
    curImage.style.display = 'none';
    return wait(2);
  })
  .then(() => createImage('img/img-2.jpg'))
  .then(img => {
    curImage = img;
    return wait(2);
  })
  .then(() => (curImage.style.display = 'none'))
  .catch(err => console.error(err));

*/
/**
 * Promisifying the Geolocation API
 */

/*

const getMyCoords = position => {
  const crd = position.coords;
  whereAmI(crd.latitude, crd.longitude);
};

const getCountryCheckErr = function (data, customMsg) {
  if (data.status) {
    throw new Error(`${customMsg} ${data.status}`);
  }
};

const getJSON = url => fetch(url).then(response => response.json());

const getCountryData = country => {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      getCountryCheckErr(data, 'The country not found');
      const neighbour = data[0].borders && data[0].borders[0];
      renderCountry(data[0]);

      if (!neighbour) throw new Error(`There are no neighbours`);
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(data => {
      getCountryCheckErr(data, 'The neighbour not found');
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `The number of attempts more than 3 ${response.status}`
        );
      }
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.country} ${data.city}`);
      getCountryData(`${data.country}`);
    })
    .catch(err => console.log(err.message));
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     const coords = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     };
    //     resolve(coords);
    //   },
    //   err => reject('Not able to get your current position')
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

btn.addEventListener('click', function () {
  getPosition()
    .then(pos => {
      whereAmI(pos.coords.latitude, pos.coords.longitude);
    })
    .catch(err => console.log(err));
});

*/

/**
 * Creating promises manually
 */
/*
// Promise constructor has executor function with resolve and reject
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// Resolve promises immediately
Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));
*/

/**
 * The Event Loop in Practice
 */
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const getMyCoords = position => {
  const crd = position.coords;
  whereAmI(crd.latitude, crd.longitude);
};

const getCountryCheckErr = function (data, customMsg) {
  if (data.status) {
    throw new Error(`${customMsg} ${data.status}`);
  }
};

const getJSON = url => fetch(url).then(response => response.json());

const getCountryData = country => {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      getCountryCheckErr(data, 'The country not found');
      const neighbour = data[0].borders && data[0].borders[0];
      renderCountry(data[0]);

      if (!neighbour) throw new Error(`There are no neighbours`);
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(data => {
      getCountryCheckErr(data, 'The neighbour not found');
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `The number of attempts more than 3 ${response.status}`
        );
      }
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.country} ${data.city}`);
      getCountryData(`${data.country}`);
    })
    .catch(err => console.log(err.message));
};

btn.addEventListener('click', function () {
  whereAmI(-33.933, 18.474);
});

//navigator.geolocation.getCurrentPosition(getMyCoords);
*/
///////////////////////////////////////
// https://restcountries.com/v2/

/**
 * Promises and the Fetch API
 */

// const getCountryData = function (country) {
//   // Each promise has a then method to consume that promise
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       // to get data from response, each response has json() but it asynchronous as well. Is should be consumed as well.
//       return response.json();
//     })
//     // Consume promise returned by json()
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = country => {
//   // Each promise has a then method to consume that promise
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response =>
//       // to get data from response, each response has json() but it asynchronous as well. Is should be consumed as well.
//       response.json()
//     )
//     // Consume promise returned by json()
//     .then(data => {
//       getCountryCheckErr(data, 'The country not found');
//       const neighbour = data[0].borders?.borders[0];
//       console.log(neighbour);
//       renderCountry(data[0]);

//       if (!neighbour) throw new Error(`There are no neighbours`);
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       getCountryCheckErr(data, 'The neighbour not found');
//       renderCountry(data, 'neighbour');
//     })
//     // catch any errors from promise chain. Return promise
//     .catch(err => {
//       renderError(`Something went wrong ${err.message}. Try again!`);
//       // finally method will be called no matter of result of promise. Works only on primises
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });
/*
const getCountryCheckErr = function (data, customMsg) {
  if (data.status) {
    throw new Error(`${customMsg} ${data.status}`);
  }
};

const getJSON = url => fetch(url).then(response => response.json());

const getCountryData = country => {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      console.log(data);
      getCountryCheckErr(data, 'The country not found');
      const neighbour = data[0].borders && data[0].borders[0];
      renderCountry(data[0]);

      if (!neighbour) throw new Error(`There are no neighbours`);
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(data => {
      console.log(data);
      getCountryCheckErr(data, 'The neighbour not found');
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');


});

*/
/**
 * Callback Hell
 */
/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndrNeighbour = function (country) {
  // Create object
  const request = new XMLHttpRequest();
  // Pass to that object type of request and url
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // Send the request
  request.send();
  // Add event listener when data come back
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    renderCountry(data);
    console.log(data);
    // Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    // Pass to that object type of request and url
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    // Send the request
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndrNeighbour('canada');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('1 second passed');
      setTimeout(() => {
        console.log('1 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

/**
 * Old way creating AJAX call
 */
/*
const getCountryData = function (country) {
  // Create object
  const request = new XMLHttpRequest();
  // Pass to that object type of request and url
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // Send the request
  request.send();
  // Add event listener when data come back
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('canada');
getCountryData('usa');
*/

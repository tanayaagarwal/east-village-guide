/*Homepage*/
const cloche = document.getElementById('cloche');
const nav = document.querySelector('.nav');

if (cloche && nav) {
    cloche.addEventListener('click', function() {
        this.classList.toggle('rotated');
    });
}

/*cusisine*/
const chineseImg = document.querySelector('.chinese');
const page1 = document.querySelector('.page-1');

console.log('Chinese image:', chineseImg);
console.log('Page 1:', page1);

if (chineseImg && page1) {
    chineseImg.addEventListener('mouseenter', function() {
        console.log('Mouse entered!');
        page1.classList.add('visible');
    });

    chineseImg.addEventListener('mouseleave', function() {
        console.log('Mouse left!');
        page1.classList.remove('visible');
    });
} 

const indianImg = document.querySelector('.indian');
const page2 = document.querySelector('.page-2');

console.log('indian image:', indianImg);
console.log('Page 2:', page2);

if (indianImg && page2) {
    indianImg.addEventListener('mouseenter', function() {
        console.log('Mouse entered!');
        page2.classList.add('visible');
    });

    indianImg.addEventListener('mouseleave', function() {
        console.log('Mouse left!');
        page2.classList.remove('visible');
    });
} 

const italianImg = document.querySelector('.italian');
const page3 = document.querySelector('.page-3');

console.log('italian image:', italianImg);
console.log('Page 3:', page3);

if (italianImg && page3) {
    italianImg.addEventListener('mouseenter', function() {
        console.log('Mouse entered!');
        page3.classList.add('visible');
    });

    italianImg.addEventListener('mouseleave', function() {
        console.log('Mouse left!');
        page3.classList.remove('visible');
    });
} 

const mexicanImg = document.querySelector('.mexican');
const page4 = document.querySelector('.page-4');

console.log('mexican image:', mexicanImg);
console.log('Page 4:', page4);

if (mexicanImg && page4) {
    mexicanImg.addEventListener('mouseenter', function() {
        console.log('Mouse entered!');
        page4.classList.add('visible');
    });

    mexicanImg.addEventListener('mouseleave', function() {
        console.log('Mouse left!');
        page4.classList.remove('visible');
    });
} 


const thaiImg = document.querySelector('.thai');
const page5 = document.querySelector('.page-5');

console.log('thai image:', thaiImg);
console.log('Page 5:', page5);

if (thaiImg && page5) {
    thaiImg.addEventListener('mouseenter', function() {
        console.log('Mouse entered!');
        page5.classList.add('visible');
    });

    thaiImg.addEventListener('mouseleave', function() {
        console.log('Mouse left!');
        page5.classList.remove('visible');
    });
} 

/*location*/
const boweryPin = document.querySelector('.bowery-pin');
const boweryPage = document.querySelector('.bowery');
console.log('Bowery pin:', boweryPin);
console.log('Bowery page:', boweryPage);

if (boweryPin && boweryPage) {
    boweryPin.addEventListener('mouseenter', function() {
        console.log('Bowery mouse entered!');
        boweryPage.classList.add('visible');
    });
    boweryPin.addEventListener('mouseleave', function() {
        console.log('Bowery mouse left!');
        boweryPage.classList.remove('visible');
    });
}

const alphabetPin = document.querySelector('.alphabet-city-pin');
const alphabetPage = document.querySelector('.alphabet-city');
console.log('Alphabet City pin:', alphabetPin);
console.log('Alphabet City page:', alphabetPage);

if (alphabetPin && alphabetPage) {
    alphabetPin.addEventListener('mouseenter', function() {
        console.log('Alphabet City mouse entered!');
        alphabetPage.classList.add('visible');
    });
    alphabetPin.addEventListener('mouseleave', function() {
        console.log('Alphabet City mouse left!');
        alphabetPage.classList.remove('visible');
    });
}

const ukranianPin = document.querySelector('.ukranian-village-pin');
const ukranianPage = document.querySelector('.ukranian-village');
console.log('Ukrainian Village pin:', ukranianPin);
console.log('Ukrainian Village page:', ukranianPage);

if (ukranianPin && ukranianPage) {
    ukranianPin.addEventListener('mouseenter', function() {
        console.log('Ukrainian Village mouse entered!');
        ukranianPage.classList.add('visible');
    });
    ukranianPin.addEventListener('mouseleave', function() {
        console.log('Ukrainian Village mouse left!');
        ukranianPage.classList.remove('visible');
    });
}

const eastPin = document.querySelector('.east-village-pin');
const eastPage = document.querySelector('.east-village');
console.log('East Village pin:', eastPin);
console.log('East Village page:', eastPage);

if (eastPin && eastPage) {
    eastPin.addEventListener('mouseenter', function() {
        console.log('East Village mouse entered!');
        eastPage.classList.add('visible');
    });
    eastPin.addEventListener('mouseleave', function() {
        console.log('East Village mouse left!');
        eastPage.classList.remove('visible');
    });
}

const pages = document.querySelectorAll('[class^="page"]');
const fastener = document.querySelector('.fastener');

/* Code adapted from https://stackoverflow.com/questions/52153424/how-to-use-event-listener-to-toggle-class-to-individual-list-item*/
pages.forEach(page => {
  page.addEventListener('mouseenter', function() {
    this.classList.add('rotated');
  });

  page.addEventListener('mouseleave', function() {
    this.classList.remove('rotated');
  });
});

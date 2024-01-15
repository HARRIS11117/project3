// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Lee Zii Jia',
    job: 'web developer',
    img: 'https://storage.googleapis.com/buro-malaysia-storage/beta.toffeetest.com/buro/2021/07/89a6a158-images_ca1-lee-zii-jia-malaysian-athlete.jpg',
    text: "The 25-year-old is the second Malaysian to win a BWF World Tour men's singles title since Lee Chong Wei. Lee Zii Jia is the most noteworthy men's singles talent produced by Malaysian badminton since the retirement of the three-time Olympics medalist Lee Chong Wei.",
  },
  {
    id: 2,
    name: 'Lin Dan',
    job: 'web designer',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lin_Dan.jpg/640px-Lin_Dan.jpg',
    text: 'Lin Dan boasts an amazing record, winning a host of major titles more than two times over. His victories include winning two gold medals in a row at the Beijing and London Olympics, two consecutive gold medals at the Asian Games, as well as holding the title of world champion for three years in a row, with five world champion titles in total. Hailed as “The King of Badminton,” he commands the court with ruthlessly efficient footwork, unparalleled momentum, and a smash that stops other players in their tracks.',
  },
  {
    id: 3,
    name: 'Lee Chong Wei',
    job: 'intern',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Lee_Chong_Wei_Indonesia_Open_2016.jpg',
    text: 'is a Malaysian former professional badminton player. As a singles player, Lee was ranked first worldwide for 349 weeks, including a 199-week streak from 21 August 2008 to 14 June 2012.',
  },
  {
    id: 4,
    name: 'Kevin Sanjaya Sukamojlo',
    job: 'the boss',
    img: 'https://www.yonex.com/media/wysiwyg/Athletes/Badminton/Sukamuljo_Short_202003.jpg',
    text: 'Kevin S. Sukamuljo is an Indonesian mens doubles player partnered with Marcus Gideon. The pair are known as the "Minions" of badminton for their energetic and agile presence on court. They dominate the doubles scene having won 27 BWF World Tour and Super Series titles, including two consecutive YONEX All England Open titles and three consecutive DAIHATSU YONEX Japan Open titles. The pair have held onto the world No. 1 spot since September 2017. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// start of the review
startBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});

// end of the document

endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});

/*notes: 1- (.menu_link_active) is a clasa i have created to highlight the links.
 */


//global variables striaght forward nothing to explain here.

const navList = document.getElementById('navbar__list');
const sectionList = document.querySelectorAll('section');
const pageHeader = document.querySelector('.page__header');

//listItems to store all the links inside it.
let linkList = [];

//Task 1 building the nav bar
function createNavBar() {
  let documentFragment = document.createDocumentFragment();
  
  //looping inside the sectionList to create li for each.
  sectionList.forEach(function(section) {
    let listItem = document.createElement('li');
    listItem.classList.add('menu__link');
    listItem.textContent = section.getAttribute('data-nav');
    //adding the link to the list than appending to the fragment.
    linkList.push(listItem);
    documentFragment.appendChild(listItem);

    //Task 3 scroll to the section when the link is clicked.
    //this done by adding event listener to every link created 
    listItem.addEventListener('click', function(ev) {
      ev.preventDefault();
      section.scrollIntoView(true);

      //used to highlight the clicked link.
      listItem.classList.add('menu_link_active');
    });
    //*****************************

  });
  navList.append(documentFragment);
}

//calling the function.
createNavBar();
//*******************************


//task 2 highlight the curent section in the veiw.
// I have used a normal for loop to get the index in both the section list and linkList.
//notice that sectionList must be the same as linkList and it must be in the same order.
document.addEventListener('scroll', function() {
  //detect if it a phone or desktop to make the function down work
  //note that this is expermental values and could change and its not fixed.
  let innerHeight = window.innerWidth < 800 ? window.innerHeight : window.innerHeight - 500;

  for (let i = 0; i < sectionList.length; i++) {

    let bounding = sectionList[i].getBoundingClientRect();

    if (bounding.top >= -100 && bounding.top <= innerHeight) {

      sectionList[i].classList.add('your-active-class');
      linkList[i].classList.add('menu_link_active');
      console.log(i + 'is active');

    } else {
      sectionList[i].classList.remove('your-active-class');
      linkList[i].classList.remove('menu_link_active');
    }
  }
});
//************************

//EXTRA....

//this featuer works only for phones to remove the header after 1.5 secondes of idle 
/*
document.addEventListener('touchstart', removeHeaderAfter);
document.addEventListener('touchmove', removeHeaderAfter)

let timeOutId;

function removeHeaderAfter() {
  pageHeader.style.display = '';

  //if timeOutId is undefined the clearTimeOut function wont work and return nothing and this behaviour what i want.
  clearTimeout(timeOutId);
  timeOutId = setTimeout(() => {
    pageHeader.style.display = 'none';
  }, 1500);
}
*/
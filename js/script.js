/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/

/*global variables*/
const itemsPerPage = 9; /* per example screenshots */

const studentList = document.querySelector('.student-list'); /* grab student list and place in variable

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {

   let startIndex = ( page * 9)-9;

   let endIndex = page * 9;

   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML('beforeend', `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details"> 
           <span class="date">${list[i].registered.date}</span>
         </div>
       </li>
         `);

      }

   };


};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let numOfPages = Math.ceil(list.length / itemsPerPage);

   let linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
      linkList.insertAdjacentHTML('beforeend',`
         <li>
            <button type="button">${i}</button>
         </li> 
      `);
   };

   const typeBtn = document.querySelector('[type = "button"]')

   typeBtn.className = 'active';

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {

         const lastActive = document.querySelector('.active');
         const newActive = e.target;

         newActive.className = 'active';
         lastActive.className = '';

         let openPage = newActive.textContent;
         showPage(list, openPage);
      };
   });
};

showPage(data, 1);

addPagination(data);

// Call functions


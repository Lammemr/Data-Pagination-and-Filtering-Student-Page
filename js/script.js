/*global variables*/
const itemsPerPage = 9; /* per example screenshots */
const studentList = document.querySelector('.student-list'); /* grab student list and place in variable */

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {

   let startIndex = ( page * itemsPerPage)-itemsPerPage;
   let endIndex = page * itemsPerPage;

   studentList.innerHTML = ''; /* create a space for the below data to be appended to */
 
   for (let i = 0; i < list.length; i++) {   /* for loop goes through the given list and appends the information into the html file */
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
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let numOfPages = Math.ceil(list.length / itemsPerPage); /* Calculate number of pages based on list length */
   let linkList = document.querySelector('.link-list'); 

   linkList.innerHTML = ''; /* create a space for the buttons to be appended to */

   for (let i = 1; i <= numOfPages; i++) { /* append a button with the below number, starting with 1 to the html */
      linkList.insertAdjacentHTML('beforeend',`
         <li>
            <button type="button">${i}</button>
         </li> 
      `);
   };

   const typeBtn = document.querySelector('[type = "button"]') /* grab first button and place in variable */

   typeBtn.className = 'active'; /* first always starts as active */

   linkList.addEventListener('click', (e) => { /* on button click, give target button 'active' class, remove class from previous active button */
      if (e.target.tagName === 'BUTTON') {

         const lastActive = document.querySelector('.active'); /* place current active button in variable */
         const newActive = e.target; /* place new button that was clicked into variable */

         newActive.className = 'active'; /* changing target to active */
         lastActive.className = ''; /* remove active from previous button */

         let openPage = newActive.textContent;
         showPage(list, openPage);
      };
   });
};

showPage(data, 1);

addPagination(data);

// Call functions


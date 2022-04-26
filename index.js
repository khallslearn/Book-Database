let myLibrary = [];

function Book(title,author,pages,seen) {
  this.title = title;
  this.author= author;
  this.pages= pages;
  this.seen=seen;
  this.addBookToLibrary = function() {
    myLibrary.push({title,author,pages,seen})
  }
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('new').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Question";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Answer";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Title:";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = title;


row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Author:";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = author;


row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);


// Creating and adding data to forth row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Pages";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = pages;


row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);
// Creating and adding data to fifth row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Own:";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = seen;


row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
tbody.appendChild(row_5);

//removal button
  
let buttony = document.createElement('button')
buttony.innerHTML = "Remove"
buttony.onclick = function()
{
  table.remove()
}
tbody.appendChild(buttony)
var checkbox = document.createElement('input');
              
// Assigning the attributes
// to created checkbox
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('Finished Reading:'));
tbody.appendChild(label)
tbody.appendChild(checkbox)
//TABLE END// 
}
//class

/*const book1 =new Book("Naruto","Kishimoto",1092,"Yes I have seen");
book1.addBookToLibrary();
const book2 = new Book ("One Piece","Oda",1100,"Yes")
book2.addBookToLibrary();*/

//adding button//
function farmer() {let title = document.getElementById('title').value;
let author = document.getElementById("author").value;
let pages = document.getElementById('pages').value;
const seen = document.getElementById('seen').value;
new Book(title,author,pages,seen);
myLibrary.push({title,author,pages,seen});
  for (let i = 0; i < myLibrary.length; i++) {
     myLibrary[i];
      
    
    
    
  }
    
  }



  
  
console.log(myLibrary);

function getCheckboxStatus(){
  var status = document.getElementById("seen").checked;
  if (status) {
     value = "Yes";
  } else {
     value = "No";
  }};

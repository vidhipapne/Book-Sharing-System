
//technical


const list1 = document.querySelector('#d1');
function render(doc){
    let tr = document.createElement('tr');
    let name= document.createElement('td');
    let author = document.createElement('td');
    let category = document.createElement('td');
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.setAttribute('href', doc.data().url); 
    a.setAttribute('class', "download"); 

    name.textContent = doc.data().name;
    author.textContent = doc.data().author;
    category.textContent = doc.data().category;
    a.textContent = 'download';

    tr.appendChild(name);
    tr.appendChild(author);
    tr.appendChild(category);
    tr.appendChild(td);
    td.appendChild(a);
    list1.appendChild(tr); 
}
db.collection('books').where('category','==','technical').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        render(doc);
    });
});

//Behaviour
const list2 = document.querySelector('#d2');
function render(doc){
   let tr = document.createElement('tr');
   let name= document.createElement('td');
   let author = document.createElement('td');
   let category = document.createElement('td');
   let td = document.createElement('td');
   let a = document.createElement('a');
   a.setAttribute('href', doc.data().url); 
   a.setAttribute('class', "download"); 

   name.textContent = doc.data().name;
   author.textContent = doc.data().author;
   category.textContent = doc.data().category;
   a.textContent = 'download';

   tr.appendChild(name);
   tr.appendChild(author);
   tr.appendChild(category);
   tr.appendChild(td);
   td.appendChild(a);
   list2.appendChild(tr); 
}
db.collection('books').where('category','==','behaviour').get().then(snapshot => {
   snapshot.docs.forEach(doc => {
       render(doc);
   });
});

//accounts
const list3 = document.querySelector('#d3');
function render(doc){
   let tr = document.createElement('tr');
   let name= document.createElement('td');
   let author = document.createElement('td');
   let category = document.createElement('td');
   let td = document.createElement('td');
   let a = document.createElement('a');
   a.setAttribute('href', doc.data().url); 
   a.setAttribute('class', "download"); 

   name.textContent = doc.data().name;
   author.textContent = doc.data().author;
   category.textContent = doc.data().category;
   a.textContent = 'download';

   tr.appendChild(name);
   tr.appendChild(author);
   tr.appendChild(category);
   tr.appendChild(td);
   td.appendChild(a);
   list3.appendChild(tr); 
}
db.collection('books').where('category','==','accounts').get().then(snapshot => {
   snapshot.docs.forEach(doc => {
       render(doc);
   });
});

//maths
const list4 = document.querySelector('#d4');
function render(doc){
   let tr = document.createElement('tr');
   let name= document.createElement('td');
   let author = document.createElement('td');
   let category = document.createElement('td');
   let td = document.createElement('td');
   let a = document.createElement('a');
   a.setAttribute('href', doc.data().url); 
   a.setAttribute('class', "download"); 

   name.textContent = doc.data().name;
   author.textContent = doc.data().author;
   category.textContent = doc.data().category;
   a.textContent = 'download';

   tr.appendChild(name);
   tr.appendChild(author);
   tr.appendChild(category);
   tr.appendChild(td);
   td.appendChild(a);
   list4.appendChild(tr); 
}
db.collection('books').where('category','==','maths').get().then(snapshot => {
   snapshot.docs.forEach(doc => {
       render(doc);
   });
});

//web development
const list5 = document.querySelector('#d5');
function render(doc){
   let tr = document.createElement('tr');
   let name= document.createElement('td');
   let author = document.createElement('td');
   let category = document.createElement('td');
   let td = document.createElement('td');
   let a = document.createElement('a');
   a.setAttribute('href', doc.data().url); 
   a.setAttribute('class', "download"); 

   name.textContent = doc.data().name;
   author.textContent = doc.data().author;
   category.textContent = doc.data().category;
   a.textContent = 'download';

   tr.appendChild(name);
   tr.appendChild(author);
   tr.appendChild(category);
   tr.appendChild(td);
   td.appendChild(a);
   list5.appendChild(tr); 
}
db.collection('books').where('category','==','webdevelopment').get().then(snapshot => {
   snapshot.docs.forEach(doc => {
       render(doc);
   });
});


//Management
const list6 = document.querySelector('#d6');
function render(doc){
   let tr = document.createElement('tr');
   let name= document.createElement('td');
   let author = document.createElement('td');
   let category = document.createElement('td');
   let td = document.createElement('td');
   let a = document.createElement('a');
   a.setAttribute('href', doc.data().url); 
   a.setAttribute('class', "download"); 

   name.textContent = doc.data().name;
   author.textContent = doc.data().author;
   category.textContent = doc.data().category;
   a.textContent = 'download';

   tr.appendChild(name);
   tr.appendChild(author);
   tr.appendChild(category);
   tr.appendChild(td);
   td.appendChild(a);
   list6.appendChild(tr); 
}
db.collection('books').where('category','==','management').get().then(snapshot => {
   snapshot.docs.forEach(doc => {
       render(doc);
   });
});

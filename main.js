/*
To Do List Dom notes

*Users have the ability to add new to do items
-form
-text input box and submit - (get input from the user and add it to the list they click submit)
-document.createElement to create the list items
-appendChild to add to our list


*user have the ability to view to-do items
-list to keep track of our to-do items
-querySelectorAll (or bubbling) can be utilized to access the array of your list items


HTML
-empty list
-form
-buttons
-labels/input

JS
-list items

*Allow users to clear all to-do items
*/

//query Selectors
let addText = document.querySelector('#addText')
let addButton = document.querySelector('#addButton')
let removeItem = document.querySelector('#removeItem')
let removeAll = document.querySelector('#removeAll')
let myEmptyList = document.querySelector('#ulEmptyList')

//event listener to add items & line-through

addButton.addEventListener('click', function(event){
    event.preventDefault();
    //want to add current text to emptyList
    //console.log("event working")
    let listitem= document.createElement('li')
    listitem.innerText = addText.value 
    myEmptyList.appendChild(listitem)

    listitem.addEventListener('click', function(){
        if(listitem.style.textDecoration === 'line-through'){
            listitem.style.textDecoration = ''
            istitem.innerText = addText.value 
        } else if (listitem.style.textDecoration === ''){
            listitem.style.textDecoration = 'line-through'
            listitem.classList.add('.completed')
            console.log(listitem.classList)
        }
    })
addText.value = ""
})

//event listener to remove all items

removeAll.addEventListener('click', function(){
    orderedlist.removeAll('li')
})

//remove items not working currently

// removeItem.addEventListener('click', function(event){
//     event.preventDefault
//     let completed = document.querySelectorAll('.completed')

//     completed.foreach(item => {item.remove()})

//     })

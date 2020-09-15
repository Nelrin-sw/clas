// <li class="collection-item" id="new-item" title ="NewItem"> A New List<a class="secondary-content"><i class="material-icons"> grade</i><a></Li>

// const  li = document.createElement('li')
// li.className = 'collection-item'
// li.id ='new-item'
// li.setAttribute('title', 'New Item')
// li.appendChild(document.createTextNode('Honey'))

// // create a tag
// const link = document.createElement('a')
// link.className ="secondary-content"

// // add icon
// link.innerHTML = '<i class="material-icons">grade</i>';
// li.appendChild(link)
// document.querySelector('ul.collection').appendChild(li)


// removing and replacing elements

const oldHeading = document.getElementById('name-title')
const newHeading = document.createElement('h2')
newHeading.id = 'name-title';
newHeading.appendChild(document.createTextNode('Newtitle'));
const header = document.querySelector('.collection-header')
header.replaceChild(newHeading, oldHeading)




import data from './data.js'

const itemsContainer = document.getElementById('items')

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {   //for loop, increment before using variable
    // create a new div element and give it a class name
    let newDiv = document.createElement('div'); //html div element
        newDiv.className = 'item' // adds class name to new div

    //create image element
    let img = document.createElement('img');  //create image tag
    // this will change each time we go through the loop. Can you explain why? There are many images within the index which are all referenced to a set of other attributes.
    img.src = data[i].image  //add attributes to image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)

    let desc = document.createElement('P')
    desc.innerText =data[i].desc  //space error??
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price 
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    itemsContainer.appendChild(newDiv)  //put new div inside items container
}

const cart = []

function addItem(name, price) {
    const item = { name: name, price: price, qty: 1 }
    cart.push(item)
}

function showItems() {
    console.log( "You have " + cart.length + " in your cart")
}

addItem('apple', 0.99)
addItem('Orange', 1.29)
addItem('Opinion', 0.02)
addItem('frisbee', 10.02)

showItems()



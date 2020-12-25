// { "id":0, "image":"https://exampleImage.com/","title":"Lacoste", "description": "this is a very fancy shoe", "price": 1999 }
// get product to edit from localStorage "edit-product" which only contains one object, the one we target when pressing edit button
let productToEdit = JSON.parse(localStorage.getItem('edit-product'))

// set title
document.getElementById('title').value = productToEdit.title
// set description
document.getElementById('description').value = productToEdit.description
// set price
document.getElementById('price').value = productToEdit.price

// function that handles submit
const submitHandler = (event) => {
	// prevents sumbit button to reload the page (not submit the form)
	event.preventDefault()

	// get products from localStorage "products" and parse to an array
	let products = JSON.parse(localStorage.getItem('products'))

	// create a new object based on values of the inputs in the HTML form
	// using spreadoperator "...productEdit" to get id image title description and price from productToEdit
	// and pass its structure into the new object we are creating.
	// anything after the spread operator will add to the object unless keys already exists
	// then it overwrites... (title, description, price)

	let editedProduct = {
		...productToEdit,
		title: document.getElementById('title').value,
		description: document.getElementById('description').value,
		price: document.getElementById('price').value
	}

	// since index in products is same as id of the chosen product we can say
	// take the index in the products array that is same as id of the product we want to edit
	// and set its value to the new object we created

	// example products[2]
	products[productToEdit.id] = editedProduct

	// then save the mainpulated version of the products array back in local storage
	localStorage.setItem('products', JSON.stringify(products))
}

// event listener for submit button
document
	.getElementById('submit-button')
	.addEventListener('click', submitHandler)

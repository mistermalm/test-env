// funktion som renderar produkter
const renderProduct = (product, index) => {
	return `<div class="product" id="${Number(index)}">
            <li class="image"><img src="${product.image}" alt="image"></li>
            <li class="title">${product.title}</li>
            <li class="desc">${product.description}</li>
            <li class="price">${Number(product.price)}</li>
            <li class"add-to-cart">
                <button id="add-to-cart-button">Add To Cart</button>
            </li>
			<li class="edit">
				<button class="edit-button" id="${index}">Edit</button>
			</li>
        </div>`
}

// refererar till products diven
let productsDiv = document.getElementById('products')
// hämtar data från local storage
let products = JSON.parse(localStorage.getItem('products'))
// kollar om det inte finns någon data i local storage
if (products == null) {
	productsDiv.innerHTML = `No products found...`
} else {
	products.map((product, index) => {
		let productUl = document.createElement('ul')
		productUl.innerHTML = renderProduct(product, index)
		productsDiv.appendChild(productUl)
	})
}

const editButtonHandler = (event) => {
	let productInfo = event.target.parentNode.parentNode.children

	let editObject = {
		id: Number(event.target.id),
		image: productInfo[0].children[0].src,
		title: productInfo[1].innerText,
		description: productInfo[2].innerText,
		price: Number(productInfo[3].innerText)
	}

	localStorage.setItem('edit-product', JSON.stringify(editObject))
	location.href = '/localStorageShop/edit.html'
}
let editButton = document.querySelectorAll('.edit-button')
for (let i = 0; i < editButton.length; i++) {
	editButton[i].addEventListener('click', editButtonHandler)
}

const createProduct = (e) => {
	e.preventDefault()
	var id
	lsProducts = JSON.parse(localStorage.getItem('products'))

	if (lsProducts == null) {
		id = 0
	} else {
		id = lsProducts.length
	}

	let product = {
		id,
		image: document.getElementById('img-src').value,
		title: document.getElementById('title').value,
		description: document.getElementById('description').value,
		price: Number(document.getElementById('price').value),
		quantity: Number(document.getElementById('quantity').value)
	}

	let ls = JSON.parse(localStorage.getItem('products'))
	if (ls == null) {
		localStorage.setItem('products', JSON.stringify([product]))
	} else {
		let newArr = [...ls, product]
		localStorage.setItem('products', JSON.stringify(newArr))
	}
	location.reload()
}

document
	.getElementById('create-button')
	.addEventListener('click', createProduct)

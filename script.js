const items = [
	{ name: 'bike', price: 100},
	{ name: 'tv', price: 200},
	{ name: 'album', price: 10},
	{ name: 'book', price: 5},
	{ name: 'phone', price: 500},
	{ name: 'computer', price: 1000},
	{ name: 'keyboard', price: 25},
	{ name: 'chair', price: 50}
]

const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal
}, 0 )

console.log(total);

const nums = [1, 2, 3, 4]

const includenum = items.includes(5)

console.log(includenum)
export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings?sandwich.fillings:'no fillings'
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.city?person.city==='Manchester':'place info missing'
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	const BUS_CAPACITY = 40
	if(people > BUS_CAPACITY) {
		return ((Math.floor(people/BUS_CAPACITY))+(people%BUS_CAPACITY>0?1:0))
	}
	else {
		return Math.ceil(people/BUS_CAPACITY)
	}
}
export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	return arr.filter(function isSheep(item) {
		return item==='sheep'}).length
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.address.postCode?person.address.postCode.substring(0,1)==='M'&&!isNaN(parseInt(person.address.postCode.substring(1,2))):'no postcode found'
}

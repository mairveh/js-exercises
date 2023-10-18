export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	const squaredNums = nums.map((num) => Math.pow(num, 2))
	return squaredNums
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	const camelCaseWord = words.map((word) => (word.substring(0,1).toUpperCase())+word.substring(1,word.length)).join('')
	return camelCaseWord.substring(0,1).toLowerCase()+camelCaseWord.substring(1,camelCaseWord.length)
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	const initialValue = 0
	return (people.map((person) => person.subjects.length)).reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	return menu.some((item) => item.ingredients.includes(ingredient))
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
	const duplicateNumberList = []
	arr1.forEach(element => {
		if(arr2.includes(element)) {
			if(!duplicateNumberList.includes(element)) duplicateNumberList.push(element)
		}
	})
	return duplicateNumberList.sort()
}

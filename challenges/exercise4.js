export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	return nums.indexOf(n)===-1|| nums.indexOf(n)===(nums.length-1)?null:nums[nums.indexOf(n)+1]
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	let zeroCounter = 0
	let oneCounter = 0
	Array.from(str).forEach(char => {
		char==='1'?oneCounter++:zeroCounter++
	})
	return {
		1: oneCounter,
		0: zeroCounter,
	}
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	return parseInt(Array.from(n.toString()).reverse().join(''))
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
	const sumAmount = 0
	return arrs.flat(2).reduce((accumulator, currentValue) => accumulator+currentValue, sumAmount)
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	if (arr.length>1) [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]; 
	return arr
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
	return Object.values(haystack).map((value) => value.toString().toLowerCase().split(' ')).flat().includes(searchTerm.toLowerCase())
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	const strObj = {}
	const strArr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ')
	strArr.forEach((item) => 
		{
			if(!strObj[item]) strObj[item] = 1
			else ++(strObj[item])
		}
	)
	return strObj
};

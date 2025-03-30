const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = []
    let tmp = []
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if(sum > n) {
			res.push(tmp);
            tmp = [];
            sum = arr[i]
		}
		tmp.push(arr[i])
	}

    return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

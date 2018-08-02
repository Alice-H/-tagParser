var text = 'this is a<1>test</1>file，test<2>text</2>';

let tags = [];

let autoNum = 0;
let caculChar = 0;

for (i=0; i < text.length; i++) {

	let word = text.charAt(i);
	let k = i + 1;

	while ( word === '<') {
		let nextWord = text.charAt(i+1);
		caculChar = caculChar + 1;
		switch (nextWord) {
			case '/':
				while ( nextWord !== '>') {
					k = k+1;
					caculChar = caculChar + 1;
					nextWord = text.charAt(k);
				}
				caculChar = caculChar + 2;
				tags[(autoNum-1)].end = k - caculChar + 1;
			break;
			default:
			  while ( nextWord !== '>') {
					k = k+1;
					caculChar = caculChar + 1;
					nextWord = text.charAt(k);
				}

				if (i+1 < k) {
					autoNum = autoNum + 1;
					tags.push({
						"id" : autoNum,
						"number" : text.substring(i+1,k),
						"start" : k - caculChar + 1,
					});
				};
		}

		word = '';
	}

}
console.log(tags);

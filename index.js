let sendGetRequestBtnEl = document.getElementById('sendGetRequestBtn');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById('httpResponse');
//console.log(sendGetRequestBtnEl, requestStatusEl, httpResponseEl);

sendGetRequestBtnEl.onclick = function () {
	let url = 'https://gorest.co.in/public-api/users';

	let options = {
		method: 'GET',
	};

	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (jsonData) {
			let code = jsonData.code;
			requestStatusEl.textContent = code;
			//console.log(code);

			let stringData = JSON.stringify(jsonData);
			httpResponseEl.textContent = stringData;
			// console.log(stringData);
		});
};

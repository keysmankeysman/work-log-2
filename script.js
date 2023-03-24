console.log('script.js')

let btnStatus = document.querySelector('#btn-status'),
	btnName = document.querySelector('#btn-name'),
	allWorkers = document.querySelectorAll('.table-worker'),
	// checkboxes = document.querySelectorAll('input[name="status"]:checked');
	checkboxes = document.querySelectorAll('input[name="status"]');


// let selectedStatuses = ['inwork', 'stop', 'rework', 'verified', 'done']
let selectedStatuses = []

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('click', () => {
		if (selectedStatuses.includes(checkbox.value)) {
			let index = selectedStatuses.findIndex(el => el === checkbox.value)
			selectedStatuses.splice(index, 1)
		} else {
			selectedStatuses.push(checkbox.value)
		}
	})
})

function filterStatus(value) {

}

// 	allWorkers.forEach(el => {
// 		let innerBody = el.querySelectorAll('.table-body')
// 		innerBody.forEach((body) => {
// 			if (body.querySelector('.table-body__status').innerHTML === 'В работе') {
// 				body.classList.add('hidden')
// 			}
// 		})
// 	})

// btnStatus.addEventListener('click', () => {
// 	allWorkers.forEach(el => {
// 		let innerBody = el.querySelectorAll('.table-body')
// 		innerBody.forEach((body) => {
// 			if (body.querySelector('.table-body__status').innerHTML === 'В работе') {
// 				body.classList.add('hidden')
// 			}
// 		})
// 	})
// })
btnName.addEventListener('click', () => {

})



	



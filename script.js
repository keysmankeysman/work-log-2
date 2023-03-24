let btnStatus = document.querySelector('#btn-status'),
	btnName = document.querySelector('#btn-name'),
	allWorkers = document.querySelectorAll('.table-worker'),
	// checkboxes = document.querySelectorAll('input[name="status"]:checked');
	checkboxes = document.querySelectorAll('input[name="status"]');


// let selectedStatuses = ['inwork', 'stop', 'rework', 'verified', 'done']
let selectedStatuses = []

const statuses = {
	inwork: 'В работе',
	stop: 'Остановлено',
	rework: 'Переделка',
	verified: 'Проверено',
	done: 'Пройден',
}

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('click', () => {
		if (selectedStatuses.includes(checkbox.value)) {
			let index = selectedStatuses.findIndex(el => el === checkbox.value)
			selectedStatuses.splice(index, 1)
			if (!selectedStatuses.length) {
				showAllTableBody()
			}
		} else {
			selectedStatuses.push(checkbox.value)
			filterStatus(checkbox.value) 
		}
	})
})

function filterStatus(value) {
	console.log('filterStatus')
	console.log(value)

	allWorkers.forEach(el => {
		let innerBody = el.querySelectorAll('.table-body')
		innerBody.forEach((body) => {
			if (body.querySelector('.table-body__status').innerHTML === statuses[value]) {
				console.log('класс добавлен')
				body.classList.add('hidden')
			}
		})
	})
}

function showAllTableBody () {
	console.log('изначальное состояние')
	allWorkers.forEach(el => {
		let innerBody = el.querySelectorAll('.table-body')
		innerBody.forEach((body) => {
			body.classList.remove('hidden')
		})
	})
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



	



let btnName = document.querySelector('#btn-name'),
	allWorkers = document.querySelectorAll('.table-worker'),
	inputSearch = document.querySelector('#searchByName'),
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
	if (inputSearch.value) {
		allWorkers.forEach(worker => {
			// let innerCaption = worker.querySelector('.table-caption')
			let innerCaptionHTML = worker.querySelector('.table-caption').innerHTML
			if (innerCaptionHTML.includes(inputSearch.value)) {
				worker.classList.add('hidden')
			}

            // body.classList.add('hidden')
			// let innerBody = el.querySelectorAll('.table-body')
			// innerBody.forEach((body) => {
			// 	if (body.querySelector('.table-body__status').innerHTML === statuses[value]) {
			// 		console.log('класс добавлен')
			// 		body.classList.add('hidden')
			// 	}
			// })
		})
	} else {
		showAllWorkers()
	}
})

function showAllWorkers () {
	allWorkers.forEach(worker => {
		worker.classList.remove('hidden')
	})
}


// inputSearch.addEventListener('change', (event) => {
// 	console.log('изменилось')
// 	console.log(event)
// })

	



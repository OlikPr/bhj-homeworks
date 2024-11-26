function updatePollUI(pollData) {
	let pollTitleElement = document.getElementById('poll__title');
	let pollAnswersElement = document.getElementById('poll__answers');

	pollTitleElement.textContent = pollData.data.title;
	pollAnswersElement.innerHTML = '';

	pollData.data.answers.forEach(function (answer) {
		let answerButton = document.createElement('button');
		answerButton.classList.add('poll__answer');
		answerButton.textContent = answer;
		answerButton.addEventListener('click', function () {
			alert('Спасибо, ваш голос засчитан!');
		});
		pollAnswersElement.appendChild(answerButton);
	});
}

function loadPoll() {
	fetch('https://students.netoservices.ru/nestjs-backend/poll')
		.then(response => response.json())
		.then(pollData => {
			updatePollUI(pollData);
		})
		.catch(error => {
			console.error('Ошибка при загрузке опроса:', error);
		});
}

document.addEventListener('DOMContentLoaded', loadPoll);
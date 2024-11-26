const tooltips = document.querySelectorAll('.has-tooltip');
const tooltipContainer = document.querySelector('.tooltip');

tooltips.forEach((tooltip) => {
	tooltip.addEventListener('click', (event) => {
		event.preventDefault();

		const tooltipText = tooltip.getAttribute('title');
		const tooltipPosition = tooltip.getBoundingClientRect();

		if (tooltipContainer.classList.contains('tooltip_active') && tooltipContainer.textContent === tooltipText) {
			tooltipContainer.classList.remove('tooltip_active');
		} else {
			tooltipContainer.textContent = tooltipText;
			tooltipContainer.style.top = tooltipPosition.top + window.pageYOffset + 'px';
			tooltipContainer.style.left = tooltipPosition.left + window.pageXOffset + 'px';
			tooltipContainer.classList.add('tooltip_active');

			tooltips.forEach((otherTooltip) => {
				if (otherTooltip !== tooltip) {
					otherTooltip.classList.remove('has-tooltip_active');
				}
			});

			tooltip.classList.add('has-tooltip_active');
		}
	});
});

document.addEventListener('click', (event) => {
	if (!event.target.classList.contains('has-tooltip')) {
		tooltipContainer.classList.remove('tooltip_active');
		tooltips.forEach((tooltip) => {
			tooltip.classList.remove('has-tooltip_active');
		});
	}
});
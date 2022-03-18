(function () {
	var threshold = Math.round(screen.height * 0.7);
	var endThreshold = Math.round(screen.height * 0.5);
	var divider = 100;

	document.addEventListener("scroll", function (e) {
		document.querySelectorAll(".screenshot-container").forEach((el) => {
			var rect = el.getBoundingClientRect();
			var deviceEl = el.querySelector(".device");
			var textEl = el.querySelector(".text");

			var value = (rect.top - endThreshold) / 5;

			if (value > 32 && value < threshold * 0.5) {
				if (el.classList.contains("left")) {
					deviceEl.style.left = `${-value}px`;
				} else if (el.classList.contains("right")) {
					deviceEl.style.right = `${-value}px`;
				}
			}
			if (value > 0 && value < threshold * 0.5) {
				if (el.classList.contains("left")) {
					textEl.style.right = `${-value}px`;
				} else if (el.classList.contains("right")) {
					textEl.style.left = `${-value}px`;
				}

				var opSubract = value > 1 ? value / divider : 0;
				textEl.style.opacity = 1 - opSubract;
				deviceEl.style.opacity = 1 - opSubract;
			}
		});
	});
})();

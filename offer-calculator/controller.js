/** CONTROLLER — КОНТРОЛЛЕР
 * Интерпретирует действия пользователя
 * Оповещает модель о необходимости изменений
 * Обеспечивает «связи» между пользователем и моделью.
 * Направляет данные от пользователя к системе и наоборот.
 * Использует модель и представление для реализации необходимого действия.
 */
const step0 = () => {
	steps.load[0](runTheGame(location.href));
	elems.h1.onclick = reloadPage;
	elems.pre.onclick = copyToClipboard;
	keyBinding(true);
	elems.accept.onclick = () => {
		steps.unload[0]();
	};
};
const step1 = () => {
	steps.load[1]();
	elems.select.onclick = (e) => {
		let target = e.target;
		if (target.tagName === 'OPTION') {
			const [txt] = target.innerText.split(' ');
			elems.accept.innerText = txt;
			elems.accept.className = 'btn a';
			setTimeout(() => {
				elems.accept.className = '';
			}, 500);
		}
	};
	elems.accept.onclick = () => {
		const takeOutData = getDataUser.preset();
		setDataUser.setUserPreset(takeOutData);
		steps.unload[1]();
	};
};
const step2 = () => {
	steps.load[2]();
	elems.reject.onclick = () => {
		steps.unload[2]();
	};
	elems.accept.onclick = () => {
		steps.unload[2](1);
		steps.load[2](2);
		elems.accept.onclick = nextStep;
	};
	const nextStep = () => {
		const name = getDataUser.clientName();
		setDataUser.setUserClientName(name);
		steps.unload[2](2);
	};
};
const step3 = (answer) => {
	if (answer) steps.load[3](answer);
	else steps.load[3]();
};

const keyBinding = (state) => {
	if (!state) {
		document.onkeypress = '';
	} else {
		document.onkeypress = (e) => {
			if ((e.ctrlKey || e.metaKey) && [121, 13, 110, 8, 27, 114].includes(e.keyCode)) {
				const mouseClick = new MouseEvent('click');

				switch (e.keyCode) {
					case 121:
					case 13:
						elems.accept.dispatchEvent(mouseClick);
						return;
					case 110:
					case 8:
					case 27:
						elems.reject.dispatchEvent(mouseClick);
						return;
					case 114:
						elems.h1.dispatchEvent(mouseClick);
						break;
					default:
				}
			}
		};
	}
};

window.onload = step0;
window.onresize = onResize;

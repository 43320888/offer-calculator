/** VIEW — ПРЕДСТАВЛЕНИЕ
 * Реагирует на изменение модели
 * Получает необходимые данные из модели
 * Обновляет редактор пользователя
 *
 * Не обрабатывает введённые данные пользователя
 */
const elems = {
	bg: document.querySelector('article'),
	header: document.querySelector('header'),
	h1: document.querySelector('h1'),
	pre: document.createElement('pre'),
	h2: document.createElement('h2'),
	field: document.createElement('fieldset'),
	leg: document.createElement('legend'),
	accept: document.createElement('button'),
	reject: document.createElement('button'),
	text: document.createElement('textarea'),
	select: document.createElement('select'),
};

const bg = () => `rgb(${getRnd(0, 115) + 140},${getRnd(0, 40) + 215},${getRnd(0, 115) + 140})`;

const copyToClipboard = (event) => {
	const range = document.createRange();
	range.selectNode(event.currentTarget);
	window.getSelection().addRange(range);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
};

const appendTextDefer = (proposalArray, deferLimit, dataState) => {
	const delay = [0, deferLimit];
	const node = elems.pre;
	const proposalArrayCopy = proposalArray.slice();
	let counter = proposalArray.length;
	function delayingWrite(html) {
		if (counter-- === 1) node.dataset.state = dataState;
		node.innerHTML += html;
	}
	while (proposalArrayCopy.length > 0) {
		const html = proposalArrayCopy.shift();
		const rnd = getRnd(delay[0], delay[1]);
		delay[0] += deferLimit;
		delay[1] += deferLimit;

		setTimeout(() => delayingWrite(html), rnd);
	}
};
const reloadPage = () => {
	if (confirm('Reload?')) location.reload();
};
const onResize = () => {
	elems.bg.style.minHeight = `${document.documentElement.clientHeight}px`;
	placeTheCenter(elems.bg.children[1], elems.header.offsetHeight + elems.leg.offsetHeight);
};

const placeTheCenter = (node, t = 0, l = 0) => {
	const html = document.documentElement;
	let mt = node.offsetHeight;
	let ml = node.offsetWidth;

	mt = html.clientHeight / 2 - mt / 2 - t;
	ml = html.clientWidth / 2 - ml / 2 - l;

	if (mt < t) mt = 0;
	else if (ml < l) ml = 0;

	node.style.marginTop = `${mt}px`;
	node.style.marginLeft = `${ml}px`;
};

const removeAttributes = (node) => {
	const attributes = [...node.attributes];
	const attributesKeys = [];

	attributes.forEach((attribute) => {
		attributesKeys.push(attribute.name);
	});

	while (attributesKeys.length) {
		node.removeAttribute(attributesKeys.pop());
	}
};

const steps = {
	load: [
		(proposal) => {
			document.body.appendChild(elems.bg);
			elems.bg.style.minHeight = `${document.documentElement.clientHeight}px`;
			elems.bg.style.background = bg();

			elems.h1.className = 'fi fo a';
			elems.h1.dataset.style = 'first-in';
			elems.header.appendChild(elems.h1);

			setTimeout(() => {
				elems.pre.className = 'fi fo a';
				elems.pre.dataset.style = 'first-in';
				elems.bg.appendChild(elems.pre);
				elems.pre.dataset.state = 'sample-defer';
			}, 50);

			setTimeout(() => {
				elems.accept.className = 'fi fo a';
				elems.accept.dataset.style = 'first-in';
				elems.bg.appendChild(elems.accept);
				elems.accept.innerText = '☝Create☝';
				elems.accept.style.margin = `${elems.h1.offsetTop}px`;
				elems.accept.style.width = `${elems.h1.clientWidth}px`;
			}, 100);

			setTimeout(() => {
				appendTextDefer(proposal, 50, 'sample');
			}, getRnd(164, 1688));
		},
		() => {
			elems.bg.style.background = bg();

			elems.field.className = 'fi fo si so a';
			elems.field.dataset.style = 'first-in';

			elems.leg.innerText = '8 quick steps:';

			elems.h2.innerText = 'Select a category of tips';

			elems.select.size = 20;
			elems.select.innerHTML = '<optgroup label="logbook"><option disabled="disabled">Web development</option></optgroup><optgroup label="Events"><option disabled="disabled">Copywriting</option><option disabled="disabled">SEO (Search Engine Optimization)</option></optgroup><optgroup label="Filmography"><option disabled="disabled">Video production</option></optgroup><optgroup label="Sound engineering"><option disabled="disabled">Audio Production</option></optgroup><optgroup label="Hacking"><option value="scriptsAndUtilities">Scripts & Utilities</option></optgroup><optgroup label="Artistry"><option disabled="disabled">Animation</option><option disabled="disabled">Illustration</option><option disabled="disabled">Drawing SVG / 3D / Canvas</option><option disabled="disabled">3D Modeling & CAD</option><option disabled="disabled">Web & Mobile Design</option></optgroup><optgroup label="General"><option value="basic" selected>Basic</option><option disabled="disabled">Common</option></optgroup>';

			elems.accept.innerText = "Basic";
			elems.accept.style.margin = `${elems.h1.offsetTop}px`;

			elems.field.appendChild(elems.leg);
			elems.field.appendChild(elems.h2);
			elems.field.appendChild(elems.select);
			elems.field.appendChild(elems.accept);

			elems.bg.appendChild(elems.field);
			placeTheCenter(elems.field, elems.header.offsetHeight + elems.header.offsetTop);
		},
		(step) => {
			switch (step) {
				case 2:
					elems.bg.style.background = bg();
					elems.h2.innerText = 'Put the client\'s name here';
					elems.field.insertBefore(elems.text, elems.accept);
					elems.text.style.width = '100%';
					elems.text.autofocus = true;
					elems.text.placeholder = dataUser.client.name;
					break;

				default:
					elems.bg.style.background = bg();

					elems.leg.innerText = 'First step:';

					elems.h2.innerText = 'Do you know the customer\'s name?';

					elems.field.insertBefore(elems.reject, elems.accept);

					elems.reject.innerText = 'No';
					elems.accept.innerText = 'Yes';

					elems.field.dataset.style = 'first-in';
					placeTheCenter(elems.field, elems.header.offsetHeight + elems.header.offsetTop);
					break;
			}
		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
	],
	unload: [
		() => {
			elems.pre.dataset.style = 'first-out';

			setTimeout(() => {
				elems.accept.dataset.style = 'first-out';
			}, 50);
			setTimeout(() => {
				removeAttributes(elems.pre);
				elems.pre.remove();
				elems.pre.innerText = '';

				removeAttributes(elems.accept);

				step1();
			}, 550);
		},
		() => {
			elems.field.dataset.style = 'first-out';
			setTimeout(() => {
				elems.select.remove();
				removeAttributes(elems.accept);
				step2();
			}, 500);
		},
		(step) => {
			switch (step) {
				case 1:
					elems.reject.remove();
					break;
				case 2:
					alert(' выгружаю представление');
					step3();
					break;
				default:
					elems.field.dataset.style = 'first-out';
					setTimeout(() => {
						elems.accept.remove();
						elems.reject.remove();
						step3();
					}, 500);
					break;
			}
		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
		() => {

		},
	],

};

const getDataUser = {
	preset() {
		try {
			const options = elems.select.options;
			const selectedIndex = elems.select.options.selectedIndex;
			const value = options[selectedIndex].value;
			return value;
		} catch (error) {
			return false;
		}
	},
	clientName() {

	}
}
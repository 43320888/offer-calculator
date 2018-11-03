/** MODEL — МОДЕЛЬ
 * Cовокупность функций для доступа к данным
 * Это свойства, методы, работа с БД
 *
 * отвечает на запросы
 * изменяет своё состояние
 *
 * не умеет визуализировать
 * не взаимодействует с пользователем
 */
const proposal = [];
const dataUser = {
	freelancer: {
		name: '',
		surname: '',
	},
	client: {
		name: '',
		surname: '',
		fullName: '',
	},
	locale: {
		city: 'Saint-Petersburg',
		utc: +3,
	},
	preset: 'default',
};

const getRnd = (min, max) => {
	let mn = min;
	let mx = max;
	mn = Math.ceil(mn);
	mx = Math.floor(mx);
	return Math.floor(Math.random() * (mx - mn)) + mn;
};

const generateFullName = (userEdits) => {

	if (userEdits) {
		let name = '';
		let surname = '';
		let fullName = '';
		switch (userEdits.includes(' ')) {
			case true:
				const userEditsArray = userEdits.split(' ');
				name = userEditsArray[0];
				surname = userEditsArray[1];
				fullName = `${name} ${surname}`;
				return {
					name,
					surname,
					fullName,
				};

			default:
				return {
					name: userEdits,
					surname: userEdits,
					fullName: userEdits,
				};
		}
	} else {
		let country = Object.keys(namesData)[getRnd(0, Object.keys(namesData).length)];
		country = namesData[country];
		const gender = Object.keys(country)[getRnd(0, 2)];
		const names = country[gender];
		const surnames = country.surnames;

		const name = names[getRnd(0, names.length)];
		const surname = surnames[getRnd(0, surnames.length)];
		const fullName = `${name} ${surname}`;

		return {
			name,
			surname,
			fullName,
		};
	}
};

const updateProposal = () => {
	proposal.length = 0;
	proposal.push(dataQueries.getGreeting(dataUser.client));
	proposal.push(dataQueries.getSignature(dataUser.freelancer));
	proposal.push(dataQueries.getLocale(dataUser.locale));
};

const dataQueries = {
	getClientChecking(answer) {
		return data.clientChecking(answer);
	},
	getProjectEvaluates() {
	},
	getGreeting(name) {
		const greeting = data.greetings[getRnd(0, data.greetings.length)];
		switch (typeof greeting) {
			case 'function':
				return greeting(name);
			case 'object':
				return greeting[0](dataUser.freelancer);
			default:
				return greeting;
		}
	},
	getQualiphication() {
	},
	getInterview() {
	},
	getEpilog() {
	},
	getSignature(freelancer) {
		const signature = data.signatures[getRnd(0, data.signatures.length)];
		switch (typeof signature) {
			case 'function':
				return signature(freelancer);
			default:
				return signature;
		}
	},
	getLocale(utc) {
		const locale = data.locales[getRnd(0, data.locales.length)];

		return locale(utc);
	},
};

const runTheGame = (set) => {
	if (set.includes('ProSr')) {
		dataUser.freelancer = {
			name: 'Prokhor',
			surname: 'Vasil\'yev',
		};
		dataUser.client.fullName = 'Hiring Manager';
	} else {
		dataUser.freelancer = generateFullName();
		dataUser.client = generateFullName();
	}
	updateProposal();
	return proposal;
};
const setDataUser = {
	setUserPreset(presetValue) {
		if (presetValue) dataUser.preset = presetValue;
		else dataUser.preset = 'basic';
	},
	setUserClientName(name) {
		if (name || !!name.length) dataUser.client = generateFullName(name);
		else dataUser.client.name = 'Hiring Manager';
	}
};

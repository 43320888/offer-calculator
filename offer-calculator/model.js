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
	client: {
		name: '',
	},
	preset: '',
	placeholders: {
		names: {
			Greece: {
				men: [
					'Georgios',
					'Ioannis',
					'Konstantinos',
					'Kostas',
					'Dimitrios',
					'Nikolaos',
					'Panagiotis',
					'Vasileios',
					'Christos',
					'Athanasios',
					'Michail',
				],
				women: [
					'Maria',
					'Eleni',
					'Aikaterini',
					'Vasiliki',
					'Basiliki',
					'Sophia',
					'Angeliki',
					'Georgia',
					'Dimitra',
					'Konstantina',
					'Paraskevi',
					'Paraskeui',
				],
				surnames: [
					'Horváth',
					'Kovács',
					'Szabó',
					'Tóth',
					'Varga',
					'Kiss',
					'Molnár',
					'Németh',
					'Farkas',
					'Balogh',
					'Papp',
					'Takács',
					'Juhász',
					'Lakatos',
					'Mészáros',
					'Oláh',
					'Simon',
					'Rácz',
					'Fekete',
				],
			},
			Francais: {
				men: [
					'Gabriel',
					'Adam',
					'Raphaël',
					'Louis',
					'Arthur',
					'Paul',
					'Alexandre',
					'Victor',
					'Mohamed',
					'Joseph',
				],
				women: [
					'Louise',
					'Emma',
					'Alice',
					'Chloé',
					'Jeanne',
					'Inès',
					'Sarah',
					'Léa',
					'Charlotte',
					'Anna',
				],
				surnames: [
					'Martin',
					'Bernard',
					'Thomas',
					'Robert',
					'Richard',
					'Petit',
					'Durand',
					'Leroy',
					'Moreau',
					'Simon',
					'Laurent',
					'Lefebvre',
					'Michel',
					'Garcia',
					'David',
					'Bertrand',
					'Roux',
					'Vincent',
					'Fournier',
					'Morel',
					'Girard',
					'André',
					'Lefèvre',
					'Mercier',
					'Dupont',
					'Lambert',
					'Bonnet',
					'François',
					'Martinez',
				],
			},
			Finnland: {
				men: [
					'Onni',
					'Elias',
					'Leo',
					'Väinö',
					'Oliver',
					'Eetu',
					'Eino',
					'Noel',
					'Leevi',
					'Niilo',
				],
				women: [
					'Sofia',
					'Aino',
					'Eevi',
					'Venla',
					'Emma',
					'Aada',
					'Pihla',
					'Ella',
					'Helmi',
					'Emilia',
				],
				surnames: [
					'Korhonen',
					'Virtanen',
					'Mäkinen',
					'Nieminen',
					'Mäkelä',
					'Hämäläinen',
					'Laine',
					'Heikkinen',
					'Koskinen',
					'Järvinen',
					'Lehtonen',
					'Lehtinen',
					'Saarinen',
					'Salminen',
					'Heinonen',
					'Niemi',
					'Heikkilä',
					'Kinnunen',
					'Salonen',
					'Turunen',
					'Salo',
					'Laitinen',
					'Tuominen',
					'Rantanen',
					'Karjalainen',
					'Jokinen',
					'Mattila',
					'Savolainen',
					'Lahtinen',
					'Ahonen',
				]
			},
			GB: {
				men: [
					'Oliver',
					'George',
					'Harry',
					'Jack',
					'Jacob',
					'Noah',
					'Charlie',
					'Muhammad',
					'Thomas',
					'Oscar',
				],
				women: [
					'Olivia',
					'Amelia',
					'Emily',
					'Isla',
					'Ava',
					'Jessica',
					'Isabella',
					'Lily',
					'Ella',
					'Mia',
				],
				surnames: [
					'Smith',
					'Jones',
					'Taylor',
					'Brown',
					'Williams',
					'Wilson',
					'Johnson',
					'Davies',
					'Robinson',
					'Wright',
					'Thompson',
					'Evans',
					'Walker',
					'White',
					'Roberts',
					'Green',
					'Hall',
					'Wood',
					'Jackson',
					'Clarke',
				],
			},
		},
	},

};

const getRnd = (min, max) => {
	let mn = min;
	let mx = max;
	mn = Math.ceil(mn);
	mx = Math.floor(mx);
	return Math.floor(Math.random() * (mx - mn)) + mn;
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

const runTheGame = () => {
	const proposalDefault = [
		'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto rem molestias nulla minima. Delectus vitae rem nemo debitis possimus exercitationem magni quos provident architecto dolores rerum, placeat iusto fuga.</p>',
		'<p>Quaerat aspernatur sed fugiat sequi est delectus dignissimos eligendi autem doloremque ea quasi at a reprehenderit amet dolorum sit nulla, molestias deserunt hic animi modi provident. Enim explicabo asperiores hic!</p>',
		'<p>Doloribus ea voluptatem neque, nihil qui modi dolor enim tempore ipsam eaque eius aperiam repellendus sequi dolorem assumenda itaque sed, eum, distinctio incidunt quidem dolore possimus corrupti consequuntur. Velit, nesciunt?</p>',
		'<p>Porro consequuntur in blanditiis ipsa distinctio, nihil a aperiam quibusdam omnis eum ducimus quos aspernatur numquam reprehenderit! Vel vitae quisquam commodi aperiam veniam, impedit in ea sed! Sequi, nostrum quod?</p>',
		'<p>Vitae voluptatem rerum nihil voluptas fugiat odit sapiente modi provident quod, cupiditate adipisci itaque perferendis esse harum tempora sint fuga. Numquam, vero sit! Maiores quidem quisquam aut illo consequatur. Numquam!</p>',
	];
	const dataDefault = {
		client: {
			name: 'Hiring Manager',
		},
		freelancer: {
			name: 'Prokhor',
			surname: 'Vasil\'yev',
		},
		locale: {
			city: 'Saint—Petersburg',
			utc: +3,
		},
	};
	proposalDefault.push(dataQueries.getGreeting(dataDefault.client.name));
	proposalDefault.push(dataQueries.getSignature(dataDefault.freelancer));
	proposalDefault.push(dataQueries.getLocale(dataDefault.locale));
	return proposalDefault;
};
dataUser.handlers = {
	setUserPreset(presetValue) {
		if (presetValue) dataUser.preset = presetValue;
		else dataUser.preset = 'basic';
	},
	setUserClientName(name) {
		debugger;
		if (name || !!name.length) dataUser.client.name = name;
		else dataUser.client.name = 'Hiring Manager';
	}
};

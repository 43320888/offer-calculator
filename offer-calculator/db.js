/** DB — БАЗА ДАННЫХ
 *  Её величество
 */
const data = {
	clientChecking: answer => `Answering your question: ${answer}`,
	projectEvaluates: {
		basic: [''],
		scriptsAndUtilities: [''],
	},
	greetings: [
		name => `Мr. ${name}\n\n`,
		name => `Dear ${name}\n\n`,
		name => `Dear ${name}.\n\n`,
		name => `Dear Mr. ${name}\n\n`,
		name => `Hello ${name}.\n`,
		'Hello, ',
		'Hello.\n',
		'Hello,\n\n',
		'Greetings! ',
		name => `Hi ${name}. `,
		'Hi. ',
		'Hi my name is Prokhor.\n\n',
		'Hi,\n\n',
		'Hello Sir,\n\n',
		'Dear Sir,\n\n',
	],
	qualiphications: {
		whyMe: {
			basic: [''],
			scriptsAndUtilities: [''],
		},
		knowledge: {
			basic: [''],
			scriptsAndUtilities: [''],
		},
		experience: {
			basic: [''],
			scriptsAndUtilities: [''],
		},
		feedback: {
			basic: [''],
			scriptsAndUtilities: [''],
		},
	},
	interview: {
		questions: {
			basic: [''],
			scriptsAndUtilities: [''],
		},
		offers: [''],
		communicationMethods: [''],
	},
	epilogs: {
		interests: [''],
		timeForecasts: [''],
		guarantees: {
			qualityAssurance: [''],
			guaranteedResults: [''],
			priceGuarantee: [''],
			guaranteesNoBugs: [''],
			freeDemos: [''],
		},
		additionalOptions: {
			basic: [''],
			scriptsAndUtilities: [''],
		},
		availabilityForWork: [''],
	},
	signatures: [
		freelancer => `Thank you.\n\n${freelancer.name} ${freelancer.surname[0]}.`,
		'Thank you.',
		freelancer => `Best regards.\n${freelancer.name}`,
		freelancer => `Thank you for time and consideration.\n\nWith Regards,\n\n${freelancer.name} ${freelancer.surname}`,
		freelancer => `Best regards,\n${freelancer.name}`,
		freelancer => `Thank you!\nLooking forward.\n${freelancer.name}`,
		freelancer => `_____________________________\nBest regards,
		${freelancer.name} ${freelancer.surname[0]}`,
		freelancer => `Thank you!\n\nRegards,\n${freelancer.name} ${freelancer.surname}\nSenior Software Engineer | Web Engineering`,
		'Thank you',
		freelancer => `Thanks,\n${freelancer.name}`,
		freelancer => `Regards\n${freelancer.name}`,
		freelancer => `Thanks and Regards,\n${freelancer.name} ${freelancer.surname}`,
		freelancer => `Let me know,\n${freelancer.name} ${freelancer.surname}`,
		'Thanks',
		freelancer => `Thanks for your time and consideration.\n\nKind Regards,\n${freelancer.name}`,
	],
	locales: [
		locale => `City:       ${locale.city}\nLocal time: ${new Date().getUTCHours() + locale.utc}:${new Date().getUTCMinutes()}\n${new Date().getUTCDate()} ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date().getUTCMonth()]} ${new Date().getUTCFullYear()}`,
		locale => `${locale.city}\n${new Date().getUTCHours() + locale.utc}:${new Date().getUTCMinutes()} ${new Date().getUTCDate()} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date().getUTCMonth()]} ${new Date().getUTCFullYear()}`,
		locale => `${new Date().getUTCHours() + locale.utc}:${new Date().getUTCMinutes()} ${new Date().getUTCDate()} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date().getUTCMonth()]} ${new Date().getUTCFullYear()}\n${locale.city}`,
	],
};

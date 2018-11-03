const tabs = document.querySelector('.offer-calculator ul');
let activeTab = tabs.firstElementChild;
activeTab.dataset.state = 'active';
tabs.onclick = (e) => {
	if (activeTab !== e.target && e.target.tagName === 'LI') {
		activeTab.dataset.state = 'visited';
		e.target.dataset.state = 'active';
		activeTab = e.target;
	}
};

import { initRouter } from './router.js';

initRouter();

const navigation = document.querySelector('.nav-menu');

if (navigation) {
	const mobileBreakpoint = window.matchMedia('(max-width: 48rem)');

	function syncNavigation() {
		navigation.open = !mobileBreakpoint.matches;
	}

	syncNavigation();
	mobileBreakpoint.addEventListener('change', syncNavigation);
}

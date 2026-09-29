import { views } from './views.js';
import { initValidation } from './validation.js';

export function initRouter() {
	const mainContent = document.getElementById('conteudo');
	if (!mainContent) return;
	const headerTitle = document.querySelector('header h1');
	const headerSubtitle = document.querySelector('header > p');
	const pageDetails = {
		'/': {
			heading: 'ONG Esperança',
			subtitle: 'Transformando vidas através da educação e tecnologia.',
			title: 'ONG Esperança'
		},
		'/projetos': {
			heading: 'Projetos e Doações',
			subtitle: 'Conheça as nossas iniciativas e ajude-nos a transformar vidas.',
			title: 'Projetos e Doações - ONG Esperança'
		},
		'/cadastro': {
			heading: 'Cadastro de Voluntários',
			subtitle: 'Junte-se a nós preenchendo o formulário abaixo.',
			title: 'Cadastro - ONG Esperança'
		}
	};

	function getRoute(pathname) {
		const page = pathname.split('/').pop();
		if (page === 'projetos' || page === 'projetos.html') return '/projetos';
		if (page === 'cadastro' || page === 'cadastro.html') return '/cadastro';
		return '/';
	}

	function renderPage(pathname, hash = '') {
		const route = getRoute(pathname);
		const details = pageDetails[route];
		mainContent.innerHTML = views[route];
		if (route === '/cadastro') initValidation();
		if (headerTitle) headerTitle.textContent = details.heading;
		if (headerSubtitle) headerSubtitle.textContent = details.subtitle;
		document.title = details.title;

		document.querySelectorAll('nav a[data-link]').forEach((link) => {
			const url = new URL(link.href);
			if (getRoute(url.pathname) === route && !url.hash) {
				link.setAttribute('aria-current', 'page');
			} else {
				link.removeAttribute('aria-current');
			}
		});

		if (hash) {
			document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
		} else {
			mainContent.focus();
		}
	}

	document.body.addEventListener('click', (event) => {
		const link = event.target.closest('a[data-link]');
		if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		if (link.origin !== location.origin || link.target === '_blank') return;

		event.preventDefault();
		const url = new URL(link.href);
		history.pushState(null, '', url);
		renderPage(url.pathname, url.hash);
	});

	window.addEventListener('popstate', () => {
		renderPage(location.pathname, location.hash);
	});

	renderPage(location.pathname, location.hash);
}

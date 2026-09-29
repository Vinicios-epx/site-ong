const campanhas = [
	{
		titulo: "Inclusão Digital Jovem",
		descricao: "Fornecemos computadores e aulas de programação para jovens em situação de vulnerabilidade.",
		meta: "R$ 15.000"
	},
	{
		titulo: "Cestas Básicas Mensais",
		descricao: "Garantimos a segurança alimentar de 50 famílias cadastradas no nosso programa de apoio.",
		meta: "R$ 8.000"
	},
	{
		titulo: "Reforma da Biblioteca",
		descricao: "Ajude-nos a comprar novos livros e a estruturar um ambiente de leitura adequado e acolhedor.",
		meta: "R$ 5.000"
	},
	{
		titulo: "Oficinas de Arte",
		descricao: "Materiais para aulas semanais de pintura e teatro, estimulando a criatividade infantil.",
		meta: "R$ 3.000"
	}
];

export const views = {
  '/': `
	<section id="sobre-nos">
		<h2>Quem Somos</h2>
		<img class="banner-image" src="img/banner.jpg" alt="Crianças sorrindo em uma sala de aula utilizando computadores">
		<p>Somos uma organização sem fins lucrativos dedicada a proporcionar um futuro melhor para jovens em situação de vulnerabilidade social. Acreditamos que a educação transforma o mundo.</p>
	</section>

	<section id="contato">
		<h2>Fale Conosco</h2>
		<address>
			<p><strong>Endereço:</strong> Rua da Paz, 123 - Centro, São Paulo/SP</p>
			<p><strong>E-mail:</strong> <a href="mailto:contato@ongesperanca.org.br">contato@ongesperanca.org.br</a></p>
			<p><strong>Telefone:</strong> (11) 98765-4321</p>
		</address>
	</section>
  `,

  '/projetos': `
	<section class="projetos-destaque" id="campanhas-ativas">
		<h2>Campanhas Ativas</h2>
		<div class="alert-info-box">
			<h3>Informação Importante</h3>
			<p>Todas as doações realizadas são convertidas diretamente em melhorias estruturais e compra de materiais para os projetos da ONG.</p>
		</div>
		<p class="availability-note" id="doacao-indisponivel">Doações online ainda não estão disponíveis.</p>

		<div class="grid-container">
			${campanhas.map(campanha => `
				<article class="card-projeto">
					<span class="badge badge-success">Campanha Ativa</span>
					<h3>${campanha.titulo}</h3>
					<p>${campanha.descricao}</p>
					<p><strong>Meta:</strong> ${campanha.meta}</p>
					<button type="button" disabled aria-describedby="doacao-indisponivel">Doar Agora</button>
				</article>
			`).join('')}
		</div>
	</section>
  `,

  '/cadastro': `
	<section class="volunteer-note">
		<div class="volunteer-note-heading">
			<div class="volunteer-note-icon" aria-hidden="true">♥</div>
			<h2>Ação Voluntária Responsável</h2>
		</div>
		<p>O voluntariado é um compromisso transformador. Antes de continuar, certifique-se de que sua rotina e disponibilidade estão preparadas para fazer a diferença na vida de quem precisa.</p>
	</section>

	<section>
		<h2>Formulário de Inscrição</h2>
		<div class="alert-error-box" id="form-errors" role="alert" tabindex="-1" hidden>
			<p>Revise os campos destacados antes de continuar:</p>
			<ul id="form-error-list"></ul>
		</div>
		<p class="form-note">O cadastro ainda não está conectado a um serviço de envio. Não informe uma senha usada em outros serviços.</p>

		<form id="cadastro-form" action="#" method="post" novalidate>
			<fieldset>
				<legend>Dados Pessoais</legend>
				<label for="nome">Nome Completo:</label>
				<input type="text" id="nome" name="nome" placeholder="Digite o seu nome" autocomplete="name" required>
				<label for="data_nascimento">Data de Nascimento:</label>
				<input type="date" id="data_nascimento" name="data_nascimento" autocomplete="bday" required>
				<label for="cpf">CPF (Apenas números):</label>
				<input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" inputmode="numeric" autocomplete="off" minlength="11" maxlength="14" pattern="([0-9]{11}|[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})" title="Informe os 11 números do CPF." required>
				<label for="senha">Crie uma Senha:</label>
				<input type="password" id="senha" name="senha" placeholder="Mínimo de 8 caracteres" autocomplete="new-password" minlength="8" required>
			</fieldset>

			<fieldset>
				<legend>Contacto e Endereço</legend>
				<label for="email">E-mail:</label>
				<input type="email" id="email" name="email" placeholder="exemplo@email.com" autocomplete="email" required>
				<label for="celular">Celular (com DDD):</label>
				<input type="tel" id="celular" name="celular" placeholder="(00) 00000-0000" autocomplete="tel" required>
				<label for="cep">CEP:</label>
				<input type="text" id="cep" name="cep" placeholder="00000-000" inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{5}-?[0-9]{3}" title="Informe um CEP válido com 8 números." required>
			</fieldset>

			<button type="submit">Enviar</button>
		</form>
		<p class="form-status" id="form-status" role="status" aria-live="polite" hidden></p>
	</section>

	<section aria-labelledby="acoes-titulo">
		<h2 id="acoes-titulo">Ações</h2>
		<div class="action-buttons">
			<button type="button" id="show-toast">Mostrar toast</button>
			<button type="button" id="show-alert">Mostrar alerta</button>
			<button type="button" id="open-modal">Abrir modal</button>
		</div>
		<div class="action-alert" id="action-alert" role="alert" hidden>
			<p>Este é um alerta de exemplo.</p>
			<button type="button" class="alert-dismiss" aria-label="Fechar alerta">Fechar</button>
		</div>
	</section>

	<div class="toast" id="action-toast" role="status" aria-live="polite" aria-atomic="true" hidden></div>

	<dialog class="action-dialog" id="action-dialog" aria-labelledby="dialog-title">
		<h2 id="dialog-title">Mensagem</h2>
		<p>Este modal foi aberto com sucesso.</p>
		<form method="dialog">
			<button type="submit">Fechar</button>
		</form>
	</dialog>
  `
};

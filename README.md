# 🌍 Portal Web - [ONG ESPERANÇA]

Este repositório contém o código-fonte do site da nossa ONG, desenvolvido para a Experiência Prática 4 de Desenvolvimento Front-End. 

O foco principal deste código é garantir que a plataforma de impacto social seja acessível para todas as pessoas, rápida e fácil de ser mantida por outros programadores.

## 🏗️ Como o código está estruturado?
* **HTML Semântico:** O esqueleto do site utiliza tags adequadas (`<header>`, `<main>`, `<section>`, `<nav>`) para garantir que tecnologias assistivas, como leitores de ecrã, consigam interpretar o conteúdo corretamente, cumprindo as diretrizes de acessibilidade WCAG 2.1 (Nível AA).
* **CSS Responsivo e Acessível:** A estilização foi pensada para se adaptar a qualquer dispositivo (telemóveis, tablets e desktops). Tivemos cuidado redobrado com o contraste de cores e tamanhos de fonte para garantir uma boa legibilidade.
* **Otimização:** Ficheiros organizados e otimizados para garantir um carregamento rápido em ambiente de produção.

## 🌿 Organização e Controlo de Versões
Para garantir que o código não se quebra durante o desenvolvimento, utilizamos uma estratégia de branches baseada no GitFlow:
* `main`: Contém apenas o código final, estável e revisto. É a versão que vai para produção (para o ar).
* `develop`: É o nosso ambiente de integração. Todas as novas funcionalidades são testadas aqui antes de irem para a `main`.

Também mantemos um histórico limpo utilizando Commits Semânticos (`feat:` para novas secções, `fix:` para correção de bugs no CSS/HTML, `docs:` para documentação).

## 💻 Para testar este código localmente
Se for um avaliador ou outro programador e quiser rodar este projeto na sua máquina:
1. Faz o clone do repositório: `git clone https://github.com/Vinicios-epx/site-ong.git`
2. Acede à pasta do projeto: `cd site-ong`
3. Abre o ficheiro `index.html` diretamente no teu navegador para visualizar a interface.

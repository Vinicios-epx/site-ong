export function initValidation() {
	const form = document.querySelector("#cadastro-form");
	if (!form) return;

	const dadosGuardados = localStorage.getItem("novo_voluntario");
	if (dadosGuardados) {
		const dados = JSON.parse(dadosGuardados);
		form.nome.value = dados.nome || "";
		form.data_nascimento.value = dados.data_nascimento || "";
		form.cpf.value = dados.cpf || "";
		form.email.value = dados.email || "";
		form.celular.value = dados.celular || "";
		form.cep.value = dados.cep || "";
	}

	const inputs = [...form.querySelectorAll("input")];
	const errorBox = document.querySelector("#form-errors");
	const errorList = document.querySelector("#form-error-list");
	const status = document.querySelector("#form-status");

	if (typeof IMask !== "undefined") {
		if (form.cpf) IMask(form.cpf, { mask: "000.000.000-00" });
		if (form.cep) IMask(form.cep, { mask: "00000-000" });
		if (form.celular) IMask(form.celular, { mask: "(00) 00000-0000" });
	}

	function getValidationMessage(input) {
		if (input.validity.valueMissing) return "Preencha este campo.";
		if (input.validity.typeMismatch) return "Informe um endereço de e-mail válido.";
		if (input.validity.patternMismatch && input.id === "cpf") {
			return "Informe os 11 números do CPF.";
		}
		if (input.validity.patternMismatch) return "Informe um CEP válido com 8 números.";
		if (input.validity.tooShort) return `Informe pelo menos ${input.minLength} caracteres.`;
		return "Verifique o valor informado.";
	}

	function updateErrors() {
		const invalidInputs = inputs.filter((input) => !input.validity.valid);

		inputs.forEach((input) => {
			if (input.validity.valid) {
				input.removeAttribute("aria-invalid");
			} else {
				input.setAttribute("aria-invalid", "true");
			}
		});

		errorList.replaceChildren();
		invalidInputs.forEach((input) => {
			const label = form.querySelector(`label[for="${input.id}"]`);
			const fieldName = label ? label.textContent.trim().replace(/:\s*$/, "") : input.name;
			const item = document.createElement("li");
			item.textContent = `${fieldName}: ${getValidationMessage(input)}`;
			errorList.append(item);
		});

		errorBox.hidden = invalidInputs.length === 0;
		return invalidInputs.length === 0;
	}

	form.addEventListener("input", () => {
		if (!errorBox.hidden) updateErrors();
	});

	form.addEventListener("change", () => {
		if (!errorBox.hidden) updateErrors();
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		status.hidden = true;

		if (!updateErrors()) {
			errorBox.focus();
			return;
		}

		const formData = {
			nome: form.nome.value,
			data_nascimento: form.data_nascimento.value,
			cpf: form.cpf.value,
			email: form.email.value,
			celular: form.celular.value,
			cep: form.cep.value
		};

		localStorage.setItem("novo_voluntario", JSON.stringify(formData));

		status.textContent = "Cadastro realizado com sucesso! Os dados foram guardados no navegador.";
		status.hidden = false;
		form.reset();
	});

	initActionButtons();
}

function initActionButtons() {
	const toast = document.querySelector("#action-toast");
	const showToastButton = document.querySelector("#show-toast");

	if (toast && showToastButton) {
		let toastTimeout;
		showToastButton.addEventListener("click", () => {
			toast.textContent = "Esta é uma notificação de exemplo.";
			toast.hidden = false;
			window.clearTimeout(toastTimeout);
			toastTimeout = window.setTimeout(() => {
				toast.hidden = true;
			}, 3500);
		});
	}

	const actionAlert = document.querySelector("#action-alert");
	const showAlertButton = document.querySelector("#show-alert");
	const dismissAlertButton = actionAlert?.querySelector(".alert-dismiss");

	if (actionAlert && showAlertButton && dismissAlertButton) {
		showAlertButton.addEventListener("click", () => {
			actionAlert.hidden = false;
		});
		dismissAlertButton.addEventListener("click", () => {
			actionAlert.hidden = true;
			showAlertButton.focus();
		});
	}

	const actionDialog = document.querySelector("#action-dialog");
	const openModalButton = document.querySelector("#open-modal");

	if (actionDialog && openModalButton) {
		openModalButton.addEventListener("click", () => {
			actionDialog.showModal();
		});
		actionDialog.addEventListener("close", () => {
			openModalButton.focus();
		});
	}
}

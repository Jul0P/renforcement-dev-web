import { validateMessage, replyTo } from "./brain.js";
import { renderMessages } from "./view.js";

const formulaire = document.querySelector("#chat-form");
const champ = document.querySelector("#message");
const liste = document.querySelector("#messages");
const statut = document.querySelector("#status");
const boutonEffacer = document.querySelector("#effacer");
const versionElt = document.querySelector("#version");
const historique = [];

const sauvegarde = localStorage.getItem("capweb.historique");
if (sauvegarde) {
	try {
		const messages = JSON.parse(sauvegarde);
		if (!Array.isArray(messages)) {
			throw new Error("Historique invalide");
		}
		historique.push(...messages);
		renderMessages(historique, liste);
	} catch {
		statut.textContent = "La conversation sauvegardée est abîmée";
	}
}

formulaire.addEventListener("submit", (event) => {
	event.preventDefault();

	const resultat = validateMessage(champ.value);
	if (!resultat.ok) {
		statut.textContent = resultat.error;
		champ.focus();
		return;
	}

	historique.push({ role: "user", text: resultat.value });
	historique.push({ role: "assistant", text: replyTo(resultat.value) });
	localStorage.setItem("capweb.historique", JSON.stringify(historique));
	renderMessages(historique, liste);

	champ.value = "";
	statut.textContent = "";
	champ.focus();
});

boutonEffacer.addEventListener("click", () => {
	if (confirm("Effacer la conversation ?")) {
		historique.length = 0;
		localStorage.removeItem("capweb.historique");
		renderMessages(historique, liste);
	}
});

// Version du serveur local, échec discret si indisponible.
fetch("/version.json", { headers: { accept: "application/json" } })
	.then((reponse) => (reponse.ok ? reponse.json() : null))
	.then((donnees) => {
		if (donnees && typeof donnees.version === "string" && versionElt) {
			versionElt.textContent = `version ${donnees.version}`;
		}
	})
	.catch(() => {});

import { validateMessage, replyTo } from "./brain.js";

const formulaire = document.querySelector("#chat-form");
const champ = document.querySelector("#message");
const liste = document.querySelector("#messages");
const statut = document.querySelector("#status");
const versionElt = document.querySelector("#version");

formulaire.addEventListener("submit", (event) => {
	event.preventDefault();

	const resultat = validateMessage(champ.value);
	if (!resultat.ok) {
		statut.textContent = resultat.error;
		champ.focus();
		return;
	}

	const ligne = document.createElement("li");
	ligne.textContent = `Vous : ${resultat.value}`;
	liste.append(ligne);

	const reponse = document.createElement("li");
	reponse.textContent = `Cap Web : ${replyTo(resultat.value)}`;
	liste.append(reponse);

	champ.value = "";
	statut.textContent = "";
	champ.focus();
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

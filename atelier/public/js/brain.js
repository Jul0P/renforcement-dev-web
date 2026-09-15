export function validateMessage(raw) {
	if (typeof raw !== "string") {
		return { ok: false, error: "Le message doit être du texte" };
	}

	const value = raw.trim();
	if (value === "") {
		return { ok: false, error: "Le message ne doit pas être vide" };
	}

	if (value.length > 280) {
		return { ok: false, error: "Le message ne doit pas dépasser 280 caractères" };
	}

	return { ok: true, value };
}

export function replyTo(message) {
	const texte = message.trim().toLowerCase();

	if (texte === "salut" || texte === "bonjour") {
		return "Bonjour, je suis Cap Web.";
	}

	if (texte === "aide") {
		return "Je peux répondre à salut, bonjour, aide et test.";
	}

	if (texte === "test") {
		return "Test reçu.";
	}

	return "Je n'ai pas encore de réponse pour ce message.";
}

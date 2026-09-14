// Diagnostic d'entrée — Inscription à un atelier.
// Complétez les deux fonctions. Fichier testé séparément avec Node.
// Ne pas ajouter d'import : gardez de simples export function.

export function estValide(texte) {
	// TODO : retourner true si texte est une chaîne dont la longueur
	// après trim() est entre 3 et 40 inclus, false sinon.
	// Exemples : "Léa" -> true, "  AB  " -> false, "" -> false.
	if (typeof texte !== "string") {
		return false;
	}

	const longueur = texte.trim().length;
	return longueur >= 3 && longueur <= 40;
}

export function extraireActifs(elements) {
	// TODO : retourner un nouveau tableau avec les noms trimmés des
	// éléments où active === true et name est une chaîne non vide après trim().
	// Ne pas modifier le tableau d'origine.
	// Exemple : [{name:"Aïcha",active:true},{name:"",active:true},{name:"Bob",active:false}] -> ["Aïcha"].
	if (!Array.isArray(elements)) {
		return [];
	}

	return elements
		.filter(
			(element) => element?.active === true && typeof element.name === "string",
		)
		.map((element) => element.name.trim())
		.filter((name) => name.length > 0);
}

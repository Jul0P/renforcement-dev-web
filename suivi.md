# Suivi J1 — Cap Web

Note ton avancée après chaque TP. Reste factuel, sans données personnelles. Ce fichier te sert pour la capsule et le bilan.

## TP00 — Diagnostic

- Hypothèse : effet de cascade et largeur fixe
- Action : HTML, CSS corrigé et les fonctions JS sont complétées
- Résultat : la page s'affiche, le formulaire est accessible avec le clavier et pas de débordement de 360 px comme attendu
- Point non compris : aucun

## TP01 — Démarrer

- Hypothèse : si le JS ne charge pas le titre et le texte HTML sont affichés mais le statut reste vide
- Action : version de Node vérifiée, la page et les balises `main`, `h1` et `p#status` contrôlées
- Résultat : le serveur est disponible sur `http://127.0.0.1:3000/`, le JS renvoie bien : Votre point de départ est prêt
- Point non compris : aucun

## TP02 — HTML

- Hypothèse : remplacer `main` par `div` ne change pas le visuel mais supprime le repère dans le DOM
- Action : `header`, `main` et `footer`, `h1` déplacé, section liée, liste `messages` et statut
- Résultat : un seul `h1`, section liée à `h2#titre-chat`, `ul#messages` vide et `p#status` conservé
- Point non compris : aucun

## TP03 — Formulaire

- Hypothèse : Dans un text area, Enter ajoute une nouvelle ligne et n'envoie pas directement le formulaire
- Action : formulaire `chat-form` ajouté, textarea et bouton Envoyer ajouté et JS fourni recopié
- Résultat : le formulaire, le statut à l'envoi du form est `Interface prête ; les réponses arrivent au J2` et la version est ``dev`
- Point non compris : aucun

## TP04 — Responsive

- Hypothèse :
- Action :
- Résultat :
- Point non compris, test 360 / 1280 :

## Commandes essayées

Note chaque commande avec son dossier de lancement et son résultat exact. Exemple d'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```

Mes essais :

- Dossier : racine étudiante
- Commande et résultat : `node --version` : `v24.20.0`
- Problème exact si blocage : aucun

- Dossier : racine étudiante
- Commande et résultat : `git branch --show-current` : `travail/jpar/j1`
- Problème exact si blocage : aucun

- Dossier : `atelier`
- Commande et résultat : `npm start` : `Cap Web prêt sur http://127.0.0.1:3000/`
- Problème exact si blocage : aucun

Si Node ou Git bloque, note le message exact et continue en local sans attendre. Le double-clic sur `diagnostic/index.html` ne remplace pas le serveur pour les modules et l'envoi du TP03.

## Auto-revue finale

- Ce qui s'affiche bien :
- Ce qui reste fragile au clavier ou à 360 px :
- Ce que je veux revoir en capsule :

## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)

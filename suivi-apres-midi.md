# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom :
- Binôme :
- Atelier utilisé (le mien, celui du binôme, la reprise) :

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP…

- J'ai prédit :
- Nous avons fait :
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :

### TP07

- J'ai prédit : le message envoyé doit apparaître dans la liste sans recharger la page
- Nous avons fait : le champ est lu, on refuse le texte vide, on crée un `li` et on ajoute le message avec `textContent`
- J'ai observé : un message s'affiche avec `Vous :` et un message vide affiche une erreur
- J'ai compris : `event.preventDefault()` empêche le rechargement et `textContent` écrit du texte sans interpréter le HTML
- Je n'ai pas compris : aucun
- Réponse à la question « Dans le suivi » du TP : `textContent` affiche le contenu comme du texte et avec `innerHTML` le navigateur aurait interprété la balise et le mot serait devenu gras

### TP08

- J'ai prédit : il fallait mettre les réponses ailleurs que dans `app.js`
- Nous avons fait : on a créé `brain.js` avec une fonction qui vérifie le message et une fonction qui choisit une réponse simple
- J'ai observé : `salut`, `BONJOUR`, `aide` et `test` donnent une réponse de Cap Web et un message inconnu donne juste une réponse par défaut
- J'ai compris : on sépare les responsabilités
- Je n'ai pas compris : rien
- Réponse à la question « Dans le suivi » du TP : `brain.js` ne doit pas utiliser `document`, il doit juste traiter du texte. Si le serveur envoyait tous les fichiers du dossier, on pourrait accéder à des fichiers qui ne devraient pas être publics donc la liste blanche évite ça.

### TP09

- J'ai prédit : on allait déplacer l'affichage dans un autre fichier
- Nous avons fait : on a créé `view.js` puis on a mis les messages dans un tableau `historique`
- J'ai observé : la discussion marche comme avant mais maintenant `app.js` ne crée plus les ``li`
- J'ai compris : le tableau garde les messages dans l'ordre et `renderMessages` refait l'affichage à partir de ce tableau
- Je n'ai pas compris : je trouvais bizarre de remplacer toute la liste avec `replaceChildren` mais cela garde l'affichage cohérent du tableau
- Réponse à la question « Dans le suivi » du TP : `app.js` relie le formulaire, le cerveau et l'affichage. `brain.js` vérifie le texte et choisit la réponse. `view.js` transforme la liste des messages en éléments visibles dans la page.

### TP10

- J'ai prédit : si on recharge la page, la conversation peut revenir grâce au stockage du navigateur
- Nous avons fait : on enregistre `historique` dans `localStorage`, on le relit au démarrage et on a ajouté un bouton pour effacer
- J'ai observé : le code ne dépend pas du serveur pour garder les messages, c'est le navigateur qui les garde
- J'ai compris : le stockage local permet de conserver l'état de l'application indépendamment du serveur.
- Je n'ai pas compris : aucun
- Réponse à la question « Dans le suivi » du TP : je prédis que la conversation apparaît dans un autre onglet si c'est la même adresse `http://127.0.0.1:3000`. En navigation privée, je pense qu'elle ne reprend pas celle de la fenêtre normale. Sur `http://localhost:3000`, je pense que ça ne sera pas la même sauvegarde car ce n'est pas la même origine que `127.0.0.1`.

### TP11

- J'ai prédit : les tests vérifient `brain.js`
- Nous avons fait : on a créé `tests/brain.test.js` avec des tests sur les messages vides, les espaces, la limite de 280 caractères et les réponses
- J'ai observé : quand tout est correct, `npm test` passe les tests
- J'ai compris : un test sert à connaître vite une petite règle cassée même si le code à l'air normal
- Je n'ai pas compris : rien
- Réponse à la question « Dans le suivi » du TP : le test rouge disait `AssertionError [ERR_ASSERTION]: Expected values to be strictly equal: false !== true` la limite était dépassée car 280 caractères devaient passer mais la fonction répondait fals.

### TP12

- J'ai prédit : Vérifier le projet et qu'on sait l'expliquer
- Nous avons fait : vérification du projet
- J'ai observé : aucun changement, tous les tps précédents sont dans git avec un commit par TP
- J'ai compris : .
- Je n'ai pas compris : .
- Réponse à la question « Dans le suivi » du TP : pas de question

### TP13

- J'ai predit : .
- Nous avons fait : les défis
- J'ai observe : .
- J'ai compris : .
- Je n'ai pas compris : rien
- Reponse a la question "Dans le suivi" du TP : pas de question

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ? `textContent` affiche juste du texte. Avec `innerHTML` le navigateur peut lire des balises HTML donc ce serait moins sûr si le message vient d'un utilisateur.
2. Pourquoi trois fichiers plutôt qu'un seul ? `app.js` gère la page, `brain.js` gère les règles de réponse et `view.js` gère l'affichage. C'est plus simple à relire qu'un seul gros fichier.
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ? Je dois relire le code, le tester, lancer `npm test`. Vérifier également qu'il respecte les directives (dans un cadre plus professionnel).

## Aides utilisées

- Indices, aide-mémoire, voisins : consignes des TP et tests avec `npm test`
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse : Github Copilot avec l'autocomplétion et pour la reformulation des phrases. J'ai vérifié avec les consignes et `npm test`.

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

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :

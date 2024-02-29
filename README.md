# TpNode
creer un nouveau projet "endpoints"
se positionner sur ce projet dans le terminale
installer express avec la commande "npm install express"
ouvir votre etditeur de texte avec la commande  "code ." dans le terminal ou utilisez la methode classe pour ouvrir un projet dans votre editeur
saisissez votre code, l'enregistrez, puis revenez dans le terminal et taper "node non_de_votre_fichier.js" pour lancer le serveur
allez dans postman et essayer d'exécuter votre code : 
    Pour ajouter une tâche : Envoyez une requête POST à http://localhost:3000/add avec le corps JSON { "task": "Nouvelle_tâche" }.

    Pour supprimer une tâche : Envoyez une requête DELETE à http://localhost:3000/deleteTask/0 pour supprimer la première tâche (remplacez 0 par l'index de la tâche que vous souhaitez supprimer).

    Pour afficher les tâches : Envoyez une requête GET à http://localhost:3000/getTasks.

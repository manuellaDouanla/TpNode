const express = require('express');
const bodyParser = require('body-parser');

const expr = express();
const port = 3000;

expr.use(bodyParser.json());

// Tableau de tâches (à remplacer par une base de données dans un contexte réel)
let tasks = ["Manuella", "Kelly", "Nam's"];

// Endpoint pour ajouter une tâche
expr.post('/add', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.json({ message: 'Ajout réussit', tasks });
});

expr.delete('/delete/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        res.json({ message: 'Supression OK', tasks });
    } else {
        res.status(404).json({ message: 'Id non trouvé' });
    }
});

expr.get('/get', (req, res) => {
    res.json({ tasks });
});

expr.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

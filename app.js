// app.js

// Importation des fonctions depuis les autres modules
const { ajouterContact, listerContacts } = require('./contactService');
const formaterContact = require('./utilis/format');

// Ajout de quelques contacts
ajouterContact('Maryam', '123456789');
ajouterContact('Abdderahim', '32987711345');

// Affichage des contacts formatés
listerContacts().forEach(c => console.log(formaterContact(c)));

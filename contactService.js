// contactService.js

// Tableau pour stocker les contacts
const contacts = [];

// Fonction pour ajouter un contact
function ajouterContact(nom, telephone) {
    contacts.push({ nom, telephone });
}

// Fonction pour lister tous les contacts
function listerContacts() {
    return contacts;
}

// Exporter les fonctions pour les utiliser dans app.js
module.exports = { ajouterContact, listerContacts };

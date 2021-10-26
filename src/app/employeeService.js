const EMPLOYEE = '_EMPLOYEE';

export function ValideErrors(errors) {
    this.errors = errors;
}

export default class EmployeeService {

    // Fonction pour valider si les champs obligatoires ont été renseignés.
    validate = (employee) => {
        const errors = [];

        if(!employee.surname){
            errors.push('Le champ "Nom" est obligatoire.');
        }
        
        if(!employee.name){
            errors.push('Le champ "Prenom" est obligatoire.');
        }
        
        if(!employee.age){
            errors.push('Le champ "Date de naissance" est obligatoire.');
        }
        
        if(!employee.title){
            errors.push('Le champ "Titre" est obligatoire.');
        }

        if(errors.length > 0) {
            throw new ValideErrors(errors);
        }
    }

    // Récupère la liste des Employés dans localStorage.
    returnEmployees = () => {
        const employees = localStorage.getItem(EMPLOYEE);
        if(!employees) {
            return [];                                                      //Renvoie une baie vide si l'emplacement de stockage est vide.
        }
        return JSON.parse(employees);
    }

    // Trouver l'index du Nom reçu par paramètre.
    findIndex = (surname) => {
        let index = null;        
        this.returnEmployees().forEach( (employee, i) => {
            if(employee.surname === surname) {
                index = i;                
            }
        });
        return index;
    }

    // Fonction pour supprimer un Employé
    del = (surname) => {        
        const index = this.findIndex(surname);
        if(index !== null) {
            const employees = this.returnEmployees();            
            employees.splice(index, 1);                                     // Supprimer un élément du tableau avec l'index égal à variable Index            
            localStorage.setItem(EMPLOYEE, JSON.stringify(employees));      // Enregistrer la chaîne des employés dans localStorage
            return employees
        }
    }

    // Fonction pour enregistrer l'employé dans localStorage
    save = (employee) => {
        this.validate(employee);
        
        let employees = localStorage.getItem(EMPLOYEE);                     // Reçoit les données du localStorage de la clé _EMPLOYEE

        // Vérifie si l'employé est vide, s'il est vide, l'instancie avec un Array vide, sinon, il transforme le String en un Array JSON
        if(!employees) {
            employees = [];
        } else {
            employees = JSON.parse(employees);
        }

        const index = this.findIndex(employee.surname)
        if(index === null) {
            // Si la variable Index est NULL, il ajoute l'Employé reçu en tant que paramètre à l'intérieur du Tableau
            employees.push(employee);            
        } else {
            // Si la variable n'est pas NULL, remplacez les valeurs du tableau.
            employees[index] = employee;
        }
        
        localStorage.setItem(EMPLOYEE, JSON.stringify(employees));          // Enregistrer la chaîne des employés dans localStorage
    }
}
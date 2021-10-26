import React from "react";
import Card from '../components/card'; 
import EmployeeTable from "../components/employeeTable";
import EmployeeService from '../app/employeeService';
import { withRouter, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { bindActionCreators, compose } from "redux";
import { connect } from 'react-redux';
import { list, save, del } from '../store/employeeReducer';

class Home extends React.Component {

    // Crée un état Employé vide de type Array.
    state = {
        employees: []
    };

    // Constructeur utilisé pour instancier une classe EmployeeService et la stocker dans une variable.
    constructor() {
        super();                                   // Fonction obligatoire lors de l'extension de React.Component.
        this.service = new EmployeeService();
    }

    // Fonction React standard utilisée pour effectuer une action après la création du composant.
    // Récupère la liste des employés et met à jour l'état du tableau Employees.
    componentDidMount() {
        const employees = this.service.returnEmployees();
        this.setState({ employees });
    }

    //
    prepareEdit = (surname) => {
        this.props.history.push(`/enregistrer/${surname}`);
    }

    // Fonction qui met à jour le etat de l'employé après la suppression d'un élément.
    del = (surname => {
        const employees = this.service.del(surname); 
        this.setState({ employees });
    })

    // useEffect(() => {
    //     props.list();
    // }, [])

    // Affiche la page avec la liste des employés.
    render(props) {
        return (
            <>
                <Card header="Employés inscrits">
                    <EmployeeTable 
                        employees={ this.state.employees } 
                        editAction={ this.prepareEdit }
                        deleteAction={ this.del }
                    />               
                </Card>
                <Link to="/enregistrer">                                                                {/*L'utilisation du composant LINK du React-router-dom*/}
                    <Button variant="contained"><AddIcon />&nbsp;Enregistre un employé</Button>         {/*L'utilisation du bouton Material-UI*/}
                </Link>   
            </>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employees.employees
})

const mapDispatchToProps = dispatch => bindActionCreators({list, save, del}, dispatch)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Home);
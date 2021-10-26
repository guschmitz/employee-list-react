import React from "react";
import Card from './card'; 
import EmployeeService from "../app/employeeService";
import { withRouter } from 'react-router-dom'; 
import {     
    Button, 
    Box, 
    Grid, 
    FormControl, 
    InputLabel, 
    Select,
    MenuItem,
    TextField
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import BathtubIcon from '@mui/icons-material/Bathtub';

import { bindActionCreators, compose } from "redux";
import { connect } from 'react-redux';
import { showMessage, hideMessage } from '../store/msgReducer';


// Créer un état initial avec des valeurs par défaut.
const inicialState = {
    surname : '',
    name: '',
    age: '',
    title: '', 
    success: false,
    errors: [],
    updating: false
}

// const useStyles = makeStyles((theme) => ({
//     textField: {
//       marginRight: theme.spacing(2),
//     },
//   }));

class Registration extends React.Component{

    // Crée un état avec les valeurs de inicialState.
    state = inicialState;

    //const classes = useStyles();

    // Constructeur utilisé pour instancier une classe EmployeeService et la stocker dans une variable.
    constructor() {
        super();                                     // Fonction obligatoire lors de l'extension de React.Component.
        this.service = new EmployeeService();
    }

    // La fonction onChange reçoit un événement E et met à jour l'état avec les valeurs envoyées via l'événement.
    onChange = (e) => {
        const input = e.target.value;
        const fieldName = e.target.name;
        this.setState({ [fieldName]: input });
    }

    // Fonction pour calculer l'âge.
    // calculateAge(age) {
    //     console.log(age)
    //     return 1
    // }

    // La fonction onSubmit reçoit un événement E et met à jour l'état avec les valeurs envoyées via l'événement.
    onSubmit = (e) => {
        e.preventDefault();
        const employee = {
            surname : this.state.surname,
            name: this.state.name,            
            age: this.state.age,
            title: this.state.title
        };
        try {
            this.service.save(employee);
            this.clearFields();
            this.setState({ success : true });
        } catch(erro) {
            const errors = erro.errors;
            this.setState({ errors: errors });
        }
    }

    // Insère les valeurs par défaut dans l'état actuel.
    clearFields = () => {
        this.setState(inicialState);
    }

    // Fonction React standard utilisée pour effectuer une action après la création du composant.    
    componentDidMount() {
        const surname = this.props.match.params.surname;        // Récupérer le Nom avec l'aide du Params.

        if(surname) {
            const result = this.service.returnEmployees().filter(employee => employee.surname === surname);       //Récupérer l'employé qui a le même Nom récupéré de Params.

            // Si vous entendez un employé du même nom, les valeurs de cet employé seront insérées dans le statut et la propriété Updating sera changée en True.
            if(result.length === 1){
                const employeeFound = result[0];
                this.setState({ ...employeeFound, updating: true });
            }
        }
    }

    // Affiche l'écran d'enregistrement des employés.
    render() {
        return (
            <Card header={ this.state.updating ? 'Mise à jour d\'un employé' :  'Enregistrer un employé' }>         {/*Utiliser le composant Card.*/}
                <form id="form-employee" onSubmit={ this.onSubmit }>              
                    { this.state.success &&                    
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Congratulations!</strong> Inscription effectuée avec succès!
                        </div>                    
                    }                     
                    { this.state.errors.length > 0 &&                        
                        this.state.errors.map( msg => {
                            return (
                                <div class="alert alert-dismissible alert-danger">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Error!</strong> {msg}
                                </div>   
                            )
                        })
                    }
                    <Grid container>
                        <Grid item md={6}>                            
                            <TextField 
                                // className={classes.textField}
                                label="Nom :"
                                type="text"
                                name="surname"                                
                                disabled={ this.state.updating }
                                onChange={ this.onChange }
                                value={ this.state.surname }
                                fullWidth
                            />                            
                        </Grid>
                        <Grid item md={6}>                        
                            <TextField 
                                label="Prenom :"
                                type="text"
                                name="name"
                                onChange={ this.onChange } 
                                value={ this.state.name } 
                                fullWidth
                            />                            
                        </Grid>     
                    </Grid>
                    <Grid container>
                        <Grid item md={6}>                            
                            <TextField 
                                label="Date de naissance :"
                                name="age" 
                                onChange={ this.onChange } 
                                value={ this.state.age }
                                fullWidth
                            />                                                     
                        </Grid>
                        

                        {/* import AdapterDateFns from '@mui/lab/AdapterDateFns';
                        import LocalizationProvider from '@mui/lab/LocalizationProvider';
                        import DatePicker from '@mui/lab/DatePicker';
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Basic example"
                                name="age" 
                                value={ this.state.age }
                            /> 
                        </LocalizationProvider>*/}

                        <Grid item md={6}>
                            <FormControl fullWidth>
                                <InputLabel>Titre :</InputLabel>
                                <Select onChange={ this.onChange } value={ this.state.title } name="title" label="Titre">
                                    <MenuItem value="">Sélectionner...</MenuItem>
                                    <MenuItem value="Infographiste">Infographiste</MenuItem>
                                    <MenuItem value="Programmeur">Programmeur</MenuItem>
                                    <MenuItem value="Vendeur">Vendeur</MenuItem>
                                </Select>
                            </FormControl>                           
                        </Grid>     
                    </Grid>
                    
                    <Box m={2}>                        
                        <Button r={2}
                            type="submit"
                            variant="contained"
                            color="success">
                                <CheckIcon />&nbsp;
                                { this.state.updating ? 'Mise à jour' :  'Enregistrer' }
                        </Button>                       
                        <Button 
                            onClick={ this.clearFields }
                            variant="contained"
                            color="warning">
                                <BathtubIcon />&nbsp;
                                Nettoyer
                        </Button>
                    </Box>
                </form>                
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    message: state.message.msg,
})

const mapDispatchToProps = dispatch => bindActionCreators({showMessage, hideMessage}, dispatch)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Registration);
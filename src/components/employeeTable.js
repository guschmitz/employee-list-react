import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Composant de rendu de la table des employés sur la page d'affichage.
// L'exportation est déclarée dans la déclaration de fonction.
export default (props) => (
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nom</strong></TableCell>
            <TableCell><strong>Prenom</strong></TableCell>
            <TableCell><strong>Date de naissance</strong></TableCell>
            <TableCell><strong>Titre</strong></TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
            {
                props.employees.map( (employee, index) => {
                    return (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{employee.surname}</TableCell>
                            <TableCell>{employee.name}</TableCell>
                            <TableCell>{employee.age}</TableCell>
                            <TableCell>{employee.title}</TableCell>
                            <TableCell>
                                
                                <Button 
                                    onClick={ () => props.editAction(employee.surname) } 
                                    variant="contained"
                                    color="secondary">
                                        <EditIcon />&nbsp;
                                        Éditer
                                </Button>                                                       {/*L'utilisation du bouton Material-UI*/}
                                <Button 
                                    onClick={ () => props.deleteAction(employee.surname) } 
                                    variant="contained"
                                    color="error">
                                        <DeleteIcon />&nbsp;
                                        Suprimir
                                </Button>                                                       {/*L'utilisation du bouton Material-UI*/}                                
                            </TableCell>
                        </TableRow>
                    )
                })
            }
        </TableBody>
      </Table>
    </TableContainer>


    // <table className="table table-hover">
    //     <thead>
    //         <tr>
    //             <th>Nom</th>
    //             <th>Prenom</th>
    //             <th>Date de naissance</th>
    //             <th>Titre</th>
    //             <th></th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             props.employees.map( (employee, index) => {
    //                 return (
    //                     <tr key={index}>
    //                         <th>{employee.surname}</th>
    //                         <th>{employee.name}</th>
    //                         <th>{employee.age}</th>
    //                         <th>{employee.title}</th>
    //                         <th>
                                
    //                             <Button 
    //                                 onClick={ () => props.editAction(employee.surname) } 
    //                                 variant="contained"
    //                                 color="secondary">
    //                                     <EditIcon />&nbsp;
    //                                     Éditer
    //                             </Button>                                                       {/*L'utilisation du bouton Material-UI*/}
    //                             <Button 
    //                                 onClick={ () => props.deleteAction(employee.surname) } 
    //                                 variant="contained"
    //                                 color="error">
    //                                     <DeleteIcon />&nbsp;
    //                                     Suprimir
    //                             </Button>                                                       {/*L'utilisation du bouton Material-UI*/}                                
    //                         </th>
    //                     </tr>
    //                 )
    //             })
    //         }
    //     </tbody>
    // </table> 
)
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  
  function createData(poids) {
    return { poids };
  }
  
  const rows = [
    createData('-30 kg', '-30 kg', '-30 kg', '-30 kg', '-30 kg'),
    createData('-30 kg', '-30 kg', '-30 kg', '-30 kg', '-30 kg'),
    createData('-30 kg', '-30 kg', '-30 kg', '-30 kg', '-30 kg'),
    createData('-30 kg', '-30 kg', '-30 kg', '-30 kg', '-30 kg'),
    createData('-30 kg', '-30 kg', '-30 kg', '-30 kg', '-30 kg'),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
const TableWoman = () => {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Benjamines</StyledTableCell>
              <StyledTableCell>Minimes</StyledTableCell>
              <StyledTableCell>Cadettes</StyledTableCell>
              <StyledTableCell>Juniors</StyledTableCell>
              <StyledTableCell>Seniors</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.poids}>
                <StyledTableCell component="th" scope="row">
                <Link color="inherit" to="">{row.poids}</Link>
                </StyledTableCell>
                <StyledTableCell><Link color="inherit" to="">{row.poids}</Link></StyledTableCell>
                <StyledTableCell><Link color="inherit" to="">{row.poids}</Link></StyledTableCell>
                <StyledTableCell><Link color="inherit" to="">{row.poids}</Link></StyledTableCell>
                <StyledTableCell><Link color="inherit" to="">{row.poids}</Link></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default TableWoman;
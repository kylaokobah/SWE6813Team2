import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Paper } from '@mui/material';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, } from '@mui/material';
import { Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditUser from '../Forms/EditUser';

import { firestoreDb, storageDb } from '../../database/firebase';
import { collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from "firebase/storage";


const LandingPage = () => {
  let css = Styles();
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  // handleClose Modal
  const handleClose = () => {
    setOpenModal(false);
  };


  // Firestore Get Database
  const usersCollectionRef = collection(firestoreDb, 'todos');
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);


  return (
    <Box className={css.userFormLists}>
      <Container maxWidth="md">
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                {/* PUT WHATEVER IN LANDING PAGE */}

              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Container>

    </Box>
  );
};

const Styles = makeStyles({
  /*userFormLists: {
    padding: '40px 0',
    background: '#E7EBF0',
  },*/
});

export default LandingPage;
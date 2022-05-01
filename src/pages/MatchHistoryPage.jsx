
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
  import Table from '@mui/material/Table'
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
  import Tabs from '@mui/material/Tabs';
  import Tab from '@mui/material/Tab';

import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
 import useAuthContext from "../hooks/useAuthContext"


const MatchHistoryPage = () => {
    const {
    state: { user },
      } = useContext('');

  const { data, isError, isLoading } = useQuery(
    'fetchMatchData', ''
  );
  const [matchType, setMatchType] = useState(0);
  const matchTypes = ['Twenty20', 'ODI', ''];

  const handleChange = (event, newValue) => setMatchType(newValue);

  if (isLoading)
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  if (isError) return <div>Error..</div>;

  const matches = data.matches
    .filter(({ squad }) => squad)
    .filter(({ type }) => !['Tests', 'First-class'].includes(type))
    .filter(({ type }) => type === matchTypes[matchType]);

  return (
    <>
      <Paper>
        <Tabs
          value={matchType}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Twenty20" />
          <Tab label="ODI" />
          <Tab label="Others" />
        </Tabs>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {matches.map((match) => (
              <TableRow key={match.unique_id}>
                <TableCell component="th" scope="row">
                  <Typography variant="h6" gutterBottom>
                    {match['team-1']} vs {match['team-2']}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {new Date(match.dateTimeGMT).toDateString()}{' '}
                    {new Date(match.dateTimeGMT).toLocaleTimeString()}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  {user && match.matchStarted && (
                    <Link to={`/match/${match.unique_id}`}>
                      <Button variant="contained" color="primary">
                        Calculate Points
                      </Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


export default MatchHistoryPage;

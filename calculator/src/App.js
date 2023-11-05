import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { masterGrid, drugGrid, calculateCriminalHistoryScore, severityGroups } from './constants';

function App() {
  const [offense, setOffense] = useState('');
  const [criminalHistory, setCriminalHistory] = useState('');

  const handleSearch = () => {
    const historyScore = calculateCriminalHistoryScore(criminalHistory);
    // Use offense, masterGrid, and drugGrid to determine sentencing guidelines
    // ...
  };

  return (
    <Container maxWidth="sm" className="App">
      <header className="App-header">
        <Typography variant="h5" component="h1" gutterBottom>
          Sentencing Guidelines Search
        </Typography>
        <TextField
          label="Offense"
          variant="outlined"
          value={offense}
          onChange={(e) => setOffense(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Criminal History"
          variant="outlined"
          value={criminalHistory}
          onChange={(e) => setCriminalHistory(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
          color="primary"
          onClick={handleSearch}
          fullWidth
        >
          Calculate
        </Button>
      </header>
    </Container>
  );
}

export default App;

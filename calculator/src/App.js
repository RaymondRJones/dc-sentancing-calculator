import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { group_and_criminal_score_to_months, groupToHistoryScore, offenseToSeverityGroup } from './constants';

function App() {
  const [currentOffense, setCurrentOffense] = useState('');
  const [offenses, setOffenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sentenceRange, setSentenceRange] = useState('');

  // ... other functions remain the same
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addOffense = (offense) => {
    if (!offenses.includes(offense)) {
      setOffenses([...offenses, offense]);
    }
  };

  const calculateSentence = () => {
    let criminalHistoryScore = offenses.reduce((score, offense) => {
      const group = offenseToSeverityGroup[offense];
      return score + groupToHistoryScore[`Group ${group}`];
    }, 0);
  
    const currentOffenseGroup = offenseToSeverityGroup[currentOffense];
    const ranges = group_and_criminal_score_to_months[`Group ${currentOffenseGroup}`];
  
    // Find the correct range
    let matchedRange = null;
    for (const [range, sentence] of Object.entries(ranges)) {
      const [min, max] = range.split(' to ').map(parseFloat);
      if ((criminalHistoryScore >= min && criminalHistoryScore <= max) ||
          (range.endsWith('+') && criminalHistoryScore >= min)) {
        matchedRange = sentence;
        break;
      }
    }
  
    // matchedRange will be a string like "90 - 180" or "138+"
    // You might want to further process it to fit your needs.
    setSentenceRange(matchedRange ? `${matchedRange} months` : 'Score range not found');
  };
  
  const filteredOffenses = Object.keys(offenseToSeverityGroup)
    .filter((offense) => offense.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Sentencing Guidelines Calculator
        </Typography>
        <TextField
          label="Search Offenses"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <List component="nav" aria-label="search results">
          {filteredOffenses.map((offense) => (
            <ListItem
              key={offense}
              button
              onClick={() => addOffense(offense)}
              disabled={offenses.includes(offense)}
            >
              <ListItemText primary={offense} />
              <AddCircleOutlineIcon color={offenses.includes(offense) ? "disabled" : "primary"} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">
          Added Offenses:
        </Typography>
        <List dense>
          {offenses.map((offense, index) => (
            <ListItem key={offense + index}>
              <ListItemText primary={offense} />
            </ListItem>
          ))}
        </List>
        <TextField
          label="Current Offense"
          variant="outlined"
          value={currentOffense}
          onChange={(e) => setCurrentOffense(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          startIcon={<CalculateIcon />}
          variant="contained"
          color="primary"
          onClick={calculateSentence}
          fullWidth
          sx={{ mt: 2 }}
        >
          Calculate
        </Button>
        {sentenceRange && (
          <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
            Sentencing Range: <strong>{sentenceRange}</strong>
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default App;


/*
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { group_and_criminal_score_to_months, groupToHistoryScore, offenseToSeverityGroup } from './constants';

function App() {
  const [currentOffense, setCurrentOffense] = useState('');
  const [offenses, setOffenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sentenceRange, setSentenceRange] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addOffense = (offense) => {
    if (!offenses.includes(offense)) {
      setOffenses([...offenses, offense]);
    }
  };

  const calculateSentence = () => {
    let criminalHistoryScore = offenses.reduce((score, offense) => {
      const group = offenseToSeverityGroup[offense];
      return score + groupToHistoryScore[`Group ${group}`];
    }, 0);
  
    const currentOffenseGroup = offenseToSeverityGroup[currentOffense];
    const ranges = group_and_criminal_score_to_months[`Group ${currentOffenseGroup}`];
  
    // Find the correct range
    let matchedRange = null;
    for (const [range, sentence] of Object.entries(ranges)) {
      const [min, max] = range.split(' to ').map(parseFloat);
      if ((criminalHistoryScore >= min && criminalHistoryScore <= max) ||
          (range.endsWith('+') && criminalHistoryScore >= min)) {
        matchedRange = sentence;
        break;
      }
    }
  
    // matchedRange will be a string like "90 - 180" or "138+"
    // You might want to further process it to fit your needs.
    setSentenceRange(matchedRange ? `${matchedRange} months` : 'Score range not found');
  };
  
  const filteredOffenses = Object.keys(offenseToSeverityGroup)
    .filter((offense) => offense.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container maxWidth="sm" className="App">
      <header className="App-header">
        <Typography variant="h5" component="h1" gutterBottom>
          Sentencing Guidelines Calculator
        </Typography>
        <TextField
          label="Search Offenses"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          margin="normal"
        />
        <List>
          {filteredOffenses.map((offense) => (
            <ListItem key={offense} button onClick={() => addOffense(offense)}>
              {offense}
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">
          Added Offenses:
        </Typography>
        <List>
          {offenses.map((offense) => (
            <ListItem key={offense}>
              {offense}
            </ListItem>
          ))}
        </List>
        <TextField
          label="Current Offense"
          variant="outlined"
          value={currentOffense}
          onChange={(e) => setCurrentOffense(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
          color="primary"
          onClick={calculateSentence}
          fullWidth
        >
          Calculate
        </Button>
        {sentenceRange && (
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Sentencing Range: {sentenceRange}
          </Typography>
        )}
      </header>
    </Container>
  );
}

export default App;
*/

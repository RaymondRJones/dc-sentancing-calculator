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
  Grid,
  IconButton,
  Snackbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { group_and_criminal_score_to_months, groupToHistoryScore, offenseToSeverityGroup } from './constants';

function App() {
  const [currentOffense, setCurrentOffense] = useState('');
  const [offenses, setOffenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sentenceRange, setSentenceRange] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addOffense = (offense) => {
    if (!offenses.includes(offense)) {
      setOffenses([...offenses, offense]);
      setSnackbarOpen(true);
    }
  };

  const handleDeleteOffense = (offense) => {
    setOffenses(offenses.filter((o) => o !== offense));
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

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          DC Sentencing Guidelines Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
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
                <ListItem key={offense} button onClick={() => addOffense(offense)} disabled={offenses.includes(offense)}>
                  <ListItemText primary={offense} />
                  <AddCircleOutlineIcon color={offenses.includes(offense) ? "disabled" : "primary"} />
                </ListItem>
              ))}
            </List>

          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              Added Offenses:
            </Typography>
            <List dense>
              {offenses.map((offense, index) => (
                <ListItem
                  key={offense + index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteOffense(offense)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
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
              disabled={offenses.length === 0}
            >
              Calculate
            </Button>
            {sentenceRange && (
              <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                Sentencing Range: <strong>{sentenceRange}</strong>
              </Typography>
            )}
            
          </Grid>
        </Grid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Offense added"
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          }
        />
      </Paper>
    </Container>
  );
}

export default App;

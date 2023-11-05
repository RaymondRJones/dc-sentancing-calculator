import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    document.title = "DC Sentencing";
  }, []); // The empty array causes this effect to only run on mount

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
        <Typography variant="body1" gutterBottom>
          This calculator is designed to assist defense lawyers and other legal professionals in understanding the sentencing ranges based on the District of Columbia Sentencing and Criminal Code. It reflects the guidelines provided by the <a href="https://scdc.dc.gov/page/sentencing-guidelines-manual-sccrc" target="_blank" rel="noopener noreferrer">Sentencing Commission for the District of Columbia</a> for 2023.
        </Typography>
        <Typography variant="body2" gutterBottom>
          <strong>How to Use the App:</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          1. On the left side, add all the charges the defendant has been convicted of. Note that only the most common offenses based on the DC chart are included.
        </Typography>
        <Typography variant="body2" gutterBottom>
          2. On the right side, input the current offense. Ensure that it exactly matches the name of the offense as listed on the left side to avoid errors.
        </Typography>
        <Typography variant="body2" gutterBottom>
          3. Press 'Calculate' to determine the criminal history score, the current offense category, and the recommended sentencing range.
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

import './App.css';
import { Paper, Typography } from '@mui/material';

function App() {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <Typography variant="h2" gutterBottom>
        Slam
      </Typography>
      <Typography>
        The slam is a down-tempo chromatic pattern of palm-muted power chords, first played in the song Liege of Inveracity by Suffocation (New York) back in 1991.
        The riff, which is only a few seconds long, spawned an entire sub-sub-genre, of which I'd say the earliest example of, speaking in terms of playing pure brutal
        slamming death metal, would be Internal Bleeding (also New York), notably with their first album Voracious Contempt from 1995.
      </Typography>
      <audio src=''>awe</audio>
    </Paper>
  )
}

export default App

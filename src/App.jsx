import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 800,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* Title */}
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              Slam
            </Typography>
          </Grid>

          {section(
            "The slam is a down-tempo chromatic pattern of palm-muted power chords, first played\
              in the song <strong>Liege of Inveracity</strong> by Suffocation (New York) back in\
              1991. The riff, which is only a few seconds long, spawned an entire sub-sub-genre, of\
              which I'd say the earliest example of, speaking in terms of playing pure brutal\
              slamming death metal, would be <strong>Internal Bleeding</strong> (also New York),\
              notably with their first album <em>Voracious Contempt</em> from 1995.",
            "/effigy_of_the_forgotten.jpg",
            "Effigy of the Forgotten",
            "Suffocation - Effigy of the Forgotten (1991)",
            "/sounds/liege_of_inveracity.mp3",
            "Suffocation - Liege of Inveracity (1991)"
          )}
          {section(
            "As I've described previously, its earliest form had what I'd describe as a 'polka' feel to it,\
              accentuating the off-beats. It's a very fun and bouncy piece of the death metal register, and I'd\
              say reflects well the hardcore punk influence on the New York death metal scene of the 90s, as a sort of\
              silly, death metal take on the hardcore breakdown.",
            "/voracious_contempt.jpg",
            "Voracious Contempt",
            "Internal Bleeding - Voracious Contempt (1995)",
            "/sounds/anointed_in_servitude.mp3",
            "Internal Bleeding - Anointed in Servitude (1995)"
          )}
          {section(
            "By 2012, the genre had gone through some micro-evolutions, with the advent of the mid-00s 'wigger slam',\
             Epicardiectomy's (Prague) infamous live show at Mountains of Death in 2010 is the culminating point of this offshoot,\
              which boasted heavy hip-hop style influence both on the demeanor and clothing of the artists. Overall, there was little\
               going on.",
            "/epicardiectomy.jpg",
            "Epicardiectomy",
            "Epicardiectomy, some time before 2012. More on these charming lads later."
            
          )}
        </Grid>
        <Typography variant="body1">
          Then, the status quo was broken.
        </Typography>
        {section(
          "Abominable Putridity (Moscow) release their second full-length, Anomalies of an Artificial Origin. No one until now had\
             thought to elevate the slam past its silly, bouncy origins and into more serious and technical territory. All \
             of a sudden, whiplashes of tremolo picks and signature changes hit thousands of long-haired bedroom dwellers. \
             The Russians had done it, in conjunction with the legendary Matti Way, well-known for having been the singer of\
              many popular bands in the greater brutal death metal milieu, including Disgorge. His wet, guttural delivery was \
              in my opinion some of the best work to have graced the world of slam, and what lightning in a bottle it was to have\
               it coincide with the greatest slam riffs to have been written.",
          "/anomalies_of_an_artificial_origin.jpg",
          "Anomalies of an Artificial Origin",
          "Abominable Putridity - Anomalies of an Artificial Origin (2012)",
          "/sounds/a_burial_for_the_abandoned.mp3",
          "Abominable Putridity - A Burial for the Abandoned (2012)"
        )}
        {section(
          'Today, Abominable Putridity is the most influential band in modern slam. While many early traits still remain,\
          and many bands still stay very true to the 90s forefathers, slam has in the past decade known a wild expansion,\
          most notably mixing with the modern child of 90s hardcore and death metal, deathcore, to form the microgenre of\
          dubious authenticity dubbed slamcore.',
          "/vulvodynia.jpg",
          "Vulvodynia",
          "Vulvodynia (South Africa) - influential slamcore band"
        )}
        {section(
          "Politically, there is no leaning in slam. Due to its origins in brutal death metal, its lyrics were originally both\
          about gore, and misogyny, in very over-the-top manners. However, thanks to slam's more technical turn, as well as the\
          sci-fi themes on Anomalies of an Artificial Origin, for a while many sci-fi bands started spawning, and technical death\
          metal was one of the first genres to start adopting slams into its music. I'd cite the legendary Spanish Wormed for that\
          , as a brilliant example..",
          "/exodromos.jpg",
          "Exodromos",
          "Wormed - Exodromos (2013)",
          "/sounds/nucleon.mp3",
          "Wormed - Nucleon (2013)"
        )}
        <Typography>
          As extreme metal fans are some of the most recursive individuals in music, these evolutions sometimes gain in-jokes.
          For instance, Epicardiectomy's infamous live show was so infamous because of the Eastern-European singer's stage banter,
          which included the line 'Show me your hammers! Show me, show me!'. He was inciting the audience to perform one of the
          somewhat slam-exclusive moves of pretending to hammer the air with your fist, very slowly. This has evolved into the hammer
          emoji being used in reaction to slams, and lyrics in songs I can't quite recall which refer to hammers.
        </Typography>
        <video
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            <source src={"/video/epicardiectomy.mp4"} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <Typography variant="caption">{"Epicardiectomy - Live at Mountains of Death (2010)"}</Typography>
        <Typography>
          In addition, elitism has also spawned in the genre as one could imagine, as the opposition between death metal and deathcore fans still exists, \
          decades beyond its relevance. As such, "not real slam" has been attributed to various forerunners of the slamcore microgenre, for being too deathcore\
          influenced. This is because slamcore often has a very low tempo for its slams, as opposed to the more traditional forms which are a more mid-tempo, \
          vaguely upbeat style, and likens them quite a bit to the much maligned deathcore breakdown. Obviously, many bands now reference this, with lines such as \
          "call the slam police", or "you guys ain't slam".
        </Typography>
        <video
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            <source src={"/video/within_destruction.mp4"} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <Typography variant="caption">{"Within Destruction - Human Defect (2018)"}</Typography>
      </Paper>
    </Box>
  );
}

function section(description, imagePath, imageName, imageCaption, soundPath, soundCaption) {
  return (
    <>
      {/* Description */}
      <Grid item xs={12}>
        <Typography
          variant="body1"
          paragraph
          dangerouslySetInnerHTML={{ __html: description }}
        ></Typography>
      </Grid>

      {/* Audio Player */}
      {
        soundPath ?
          <Grid item xs={12}>
            <Typography variant="caption">{soundCaption}</Typography>
            <audio controls style={{ width: '100%' }}>
              <source src={soundPath} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Grid> : null
      }


      {/* Image */}
      {imagePath ? <><Grid item xs={12}>
        <img
          src={imagePath}
          alt={imageName}
          style={{
            width: '100%',
            maxWidth: 400,
            height: 'auto',
            borderRadius: 8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
        />
      </Grid>
        <Typography variant="caption">{imageCaption}</Typography></> : null}

    </>
  );
}

export default App;

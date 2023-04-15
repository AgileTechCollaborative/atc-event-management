import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  CardMedia,
} from "@mui/material";
import { Box } from "@mui/system";
import "./styles/eventpage.css";
import Header from "./Header";

const EventPage = (props) => {
  return (
    <div>
      <Header currentUser={props.currentUser} />
      <div className="event-page">
        <Container>
          <Box mb={3}>
            <CardMedia
              className="banner"
              component="img"
              height="400"
              image="https://www.wikihow.com/images/thumb/6/6e/Organize-a-Class-Reunion-Step-1-Version-2.jpg/aid394962-v4-728px-Organize-a-Class-Reunion-Step-1-Version-2.jpg.webp"
              alt="Event banner"
            />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4" component="h1">
                    Codesmith Graduation Party
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Hosted by John Doe
                  </Typography>
                  <Box my={2}>
                    <Typography variant="body1">
                      Industry: Technology
                    </Typography>
                    <Typography variant="body1">
                      Event Type: Celebration
                    </Typography>
                    <Typography variant="body1">
                      Event Date: September 9, 2023
                    </Typography>
                    <Typography variant="body1">
                      Event Time: 6:00 PM - 9:00 PM
                    </Typography>
                    <Typography variant="body1">
                      Location: 123 Event Street, NYC
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    Event description goes here. This is where you would add
                    details about the event, what to expect, and any other
                    important information for attendees.
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="body1">
                      Total Attendees: 150
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h5" component="h2">
                    Get Tickets
                  </Typography>
                  <Typography variant="body1">Price: $10 - $20</Typography>
                  <Box my={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        backgroundColor: "#003366",
                        "&:hover": {
                          backgroundColor: "#00274d",
                        },
                        border: "none",
                        borderRadius: "4px",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "10px",
                        cursor: "pointer",
                        marginTop: "10px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default EventPage;

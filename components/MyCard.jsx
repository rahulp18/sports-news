import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';

import { useRouter } from 'next/router';
import { useStyles } from './styles';
const MyCard = ({ item }) => {
  const router = useRouter();
  const showDetails = (id) => {
    router.push(`/details/${id}`);
  };

  const classes = useStyles();
  return (
    <Container>
      <Card
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '9px 0px',
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: '100%' }}
          image={item.poster}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="subtitle2" gutterBottom>
              author name
            </Typography>
            <Typography variant="body2">{item.subTitle}</Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              size="small"
              onClick={() => showDetails(item._id)}
            >
              Readmore
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
};

export default MyCard;

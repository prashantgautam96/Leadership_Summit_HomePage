import * as React from 'react';

import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from "@material-ui/core/Grid";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Theme() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <div>
            
              <section >
                    <div className="container-fluid">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="text-center heading mb-lg-5 mb-md-5 mb-4"></div>
                        </ScrollAnimation>
                        <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "10vh" }}
          >
              <Grid item xs={4}>
              <ScrollAnimation animateIn="fadeInUp">
               <h1>Theme and Agendas</h1> 
              </ScrollAnimation>
            </Grid>
            
            <Grid item xs={4}>
              <ScrollAnimation animateIn="fadeInUp">
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            1
          </Avatar>
        }
        
        action={
          <CardActions disableSpacing>
       
       
       <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
        }
        title="Agenda 1 Name" 
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
        alt="Paella dish"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4}>
              <ScrollAnimation animateIn="fadeInUp">
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            2
          </Avatar>
        }
        
        action={
          <CardActions disableSpacing>
       
       
       <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
        }
        title="Agenda 2 Name" 
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
        alt="Paella dish"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4}>
              <ScrollAnimation animateIn="fadeInUp">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                       </p>
              </ScrollAnimation>
            </Grid>
           
            <Grid item xs={4}>
              <ScrollAnimation animateIn="fadeInUp">
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            3
          </Avatar>
        }
        
        action={
          <CardActions disableSpacing>
       
       
       <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
        }
        title="Agenda 3 Name" 
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
        alt="Paella dish"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
              </ScrollAnimation>
            </Grid>
            
            <Grid item xs={4}>
              <ScrollAnimation animateIn="fadeInUp">
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            4
          </Avatar>
        }
        
        action={
          <CardActions disableSpacing>
       
       
       <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
        }
        title="Agenda 4 Name" 
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
        alt="Paella dish"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
              </ScrollAnimation>
            </Grid>
           
          </Grid>
                        {/* <div className="row justify-content-center align-items-center mx-0">
                            <div className="col-md-4 col1">
                                <ScrollAnimation animateIn="fadeInLeft">
                                  <h1>Theme and Agendas</h1>
                                 </ScrollAnimation>
                            </div>
                            <div className="col-lg-6 col-md-8 col2">
                                <ScrollAnimation animateIn="fadeInRight">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                   */}
                    </div>
                </section>
          
        </div>
    )
}
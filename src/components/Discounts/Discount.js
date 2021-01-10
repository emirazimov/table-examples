import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: '300px',
    justifyContent: 'center',
    transition: 'transform(0.5s)',
    '&:hover': {
      backgroundColor: 'red',
      transition: '0.4s',
      transform: 'scale(1.3)',
      zIndex: '1',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '40px',
    justifyContent: 'center',
  },
});

export default function Discount() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.div}>
      <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom >
       
          В этом разделе для клиентов MESO представлены лучшие предложения на услуги и продукты наших партнёров. 
          Выберите интересующее вас предложение и перейдите на сайт для получения полной информации. Список партнёров и предложений 
          постоянно пополняется, поэтому периодически заглядывайте в этот раздел, возможно он поможет вам сэкономить десятки и сотни тысяч рублей.
          
      </Typography>
      
      <Card  item xs={12} sm={6} md={4} style={{backgroundColor: "black",color: "white"}} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Точка
        </Typography>
        <br/>
        <Typography className={classes.pos}  style={{color: "white"}} color="textSecondary">
          банк для предпринимателей и предприятий
        </Typography>
        
      </CardContent>
      <CardActions >
        <Button style={{color: "white"}} size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card  item xs={12} sm={6} md={4} style={{backgroundColor: "red",color: "white"}} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="h2">
          ПРИМИ КАРТУ
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          Преврати свой смартфон Samsung в онлайн-кассу за 1500 сом
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card  item xs={12} sm={6} md={4} style={{backgroundColor: "green",color: "white"}} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          ПРИМИ КАРТУ
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          Онлайн-касса 3-в-1 для курьеров и служб доставки за 20 000 сом
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card  item xs={12} sm={6} md={4} style={{backgroundColor: "blue",color: "white"}} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          СофтБаланс 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          Скидка 10% на услуги по промокоду MESO
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card  item xs={12} sm={6} md={4} style={{backgroundColor: "yellow",color: "black"}} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          МодульБанк
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          Тариф "Ничего лишнего" за 0 сом
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card  item xs={12} sm={6} md={4} style={{backgroundColor: "black",color: "white"}} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          Power BI
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          Станьте эффективнее с Power BI за 1 день и 3000 сом
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color: "white"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </div>
  );
}
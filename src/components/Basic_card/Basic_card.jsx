import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Input from '../Input/Input.jsx';
import './input_box.css'

const Input = (props) =>{
    return <input type="text" placeholder={props.placeholder} className='input_box' />
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, width: 300  }}>
      <CardContent>
        <Input placeholder='Username'/>
      </CardContent>
      <CardContent>
        <Input placeholder='Password'/>
      </CardContent>
      <CardActions>
      <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
}

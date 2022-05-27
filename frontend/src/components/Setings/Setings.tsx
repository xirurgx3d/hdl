import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { RouteEnv } from '../../constants/constRouter';
import { useStyles } from '../../styled/material_styles';
import SetingAdress from './SetingAdress/SetingAdress';
import SetingPhone from './SetingPhone/SetingPhone';

const Setings = () =>{

	return (
		<>
			<SetingAdress />
			<SetingPhone />
		</>
		
	)
}
export default Setings
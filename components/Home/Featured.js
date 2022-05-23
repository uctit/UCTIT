import {
	Box,
	Grid,
	Paper,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Image from 'next/image'
import service from '../App/Functions/service';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			backgroundColor: theme.palette.secondary.light,
		},
		section: {
			textAlign: 'center',
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(10),
			paddingLeft: theme.spacing(6),
			paddingRight: theme.spacing(6),
		},
		sectionTitle: {
			fontSize: '36px',
			fontWeight: 'bold',
			textAlign: 'center',
			color: theme.palette.primary.main,
			marginTop: theme.spacing(5)
		},
		sectionSubtitle: {
			fontSize: '28px',
			color: theme.palette.primary.main,
			marginBottom: theme.spacing(1.5)
		}
	}
});

const services = service.getServices();

const Featured = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>

			<Typography className={styles.sectionTitle}>Our IT Services</Typography>

			<Box>
				{services.map((service, index) => (
					<Grid key={index} container spacing={6} direction={index % 2 === 0 ? 'row' : 'row-reverse'} justifyContent='center' alignItems='center' className={styles.section} >
						<Grid item xs={12} lg={6} >
							<Typography className={styles.sectionSubtitle}>{service.title}</Typography>
							<Typography>{service.description}</Typography>
						</Grid>

						{service.picture && 
							<Grid item xs={12} lg={6}>
								<Paper elevation={0}>
									<Image src={service.picture} height='500vh' width='500vw' alt={service.shortdescription} />
								</Paper>
							</Grid>
						}
					</Grid>
				))}
			</Box>

		</Box >
	);
};

export default Featured;

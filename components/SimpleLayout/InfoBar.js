import { useState } from 'react'

import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
} from '@material-ui/core'

import Link from 'next/link';

import {
	ExpandMore,
	MenuOutlined
} from '@material-ui/icons';

import NavBarList from './NavBarList';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => {
	return {
		appbar: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: theme.spacing(0.5),
			backgroundColor: theme.palette.primary.main,
		},
		menuButton: {
			color: theme.palette.secondary.main,
			minWidth: theme.spacing(1)
		},
		title: {
			fontSize: 32,
			fontWeight: 'bold',
		},
		listitem: {
			cursor: 'pointer',
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4)
		}
	}
});

function NavBar({ title, items, breakpointUp }) {
	const styles = useStyles();

	const [state, setState] = useState({});
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleHover = (e, b) => {
		setState(() => {
			return { [e]: b };
		});
	}

	return (
		<Box>
			<AppBar
				className={styles.appbar}
				elevation={0}
			>
				<Toolbar>
					<Typography className={styles.title}>{title}</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar;

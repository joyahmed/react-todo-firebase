import React, { useState } from 'react';
import {
	Avatar,
	Grid,
	Modal,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Button
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

import db from './firebase';

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

const Todo = props => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState();

	/* 	const handleOpen = () => {
		setOpen(true);
	}; */

	const updateTodo = () => {
		//update.the todo with the new input text
		db.collection('todos').doc(props.todo.id).set(
			{
				todo: input
			},
			{ merge: true }
		);
		setOpen(false);
	};
	return (
		<Grid container justifyContent="center">
			<Modal
				classsName={classes.modal}
				open={open}
				onClose={e => setOpen(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<div className={classes.paper}>
					<h1>I am a modal</h1>
					<input
						placeholder={props.todo.todo}
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<Button onClick={updateTodo}>Update Todo</Button>
				</div>
			</Modal>
			<Grid item xs={7}>
				<List>
					<ListItem>
						<ListItemAvatar>
							<Avatar></Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={props.todo.todo}
							secondary="Dummy deadline ⏰"
						/>
						<Button onClick={e => setOpen(true)}>Edit</Button>
						<DeleteForeverIcon
							color="danger"
							onClick={e => db.collection('todos').doc(props.todo.id).delete()}
						/>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
};

export default Todo;

import {
	Avatar,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText
} from '@material-ui/core';
import React from 'react';

const Todo = props => {
	return (
		<Grid container justify="center">
			<List>
				<ListItem>
					<ListItemAvatar>
						<Avatar></Avatar>
					</ListItemAvatar>
					<ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
				</ListItem>
			</List>
		</Grid>
	);
};

export default Todo;

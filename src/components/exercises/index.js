import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, IconButton } from 'material-ui';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import { Edit, Delete } from 'material-ui-icons';
import Form from './Form';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: 'auto',
  },
};

export default ({
  muscles,
  editMode,
  exercises,
  category,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome',
    description = 'Please select exercise from the list on the left',
  },
  onDelete,
  onEdit,
  onSelectEdit,
}) =>
  (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises], id) =>
          (!category || category === group ?
          (<Fragment key={group}>
            <Typography
              key={id}
              variant="headline"
              style={{ textTransform: 'capitalize' }}
            >
              {group}
            </Typography>

            <List component="ul">
              {exercises.map(({ id, title }) =>
                (<ListItem key={id} button>
                  <ListItemText
                    onClick={() => onSelect(id)}
                    primary={title}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => onSelectEdit(id)}>
                      <Edit />
                    </IconButton>

                    <IconButton onClick={() => onDelete(id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>

                </ListItem>))}
            </List>
          </Fragment>) :
           null))}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles.Paper} >
          { editMode ?
            <Form
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            /> :
            <Fragment>
              <Typography
                variant="display1"
              >
                {title}
              </Typography>
              <Typography
                variant="subheading"
                style={{ marginTop: 20 }}
              >
                {description}
              </Typography>
            </Fragment>
      }

        </Paper>
      </Grid>
    </Grid>);


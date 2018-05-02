import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';

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
  excercises,
  category,
  onSelect,
  excercise: {
    id,
    title = 'Welcome',
    description = 'Please select excercise from the list on the left',
  },
}) =>
  (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {excercises.map(([group, excercises], id) =>
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
              {excercises.map(({ id, title }) =>
                (<ListItem key={id} button>
                  <ListItemText
                    onClick={() => onSelect(id)}
                    primary={title}
                  />
                </ListItem>))}
            </List>
          </Fragment>) :
           null))}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles.Paper} >
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
        </Paper>
      </Grid>
    </Grid>);


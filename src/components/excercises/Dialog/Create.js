import React, { Fragment, Component } from 'react';
import { Button, Dialog, TextField, Select } from 'material-ui';
// import TextField from 'material-ui/TextField';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons'; // need to import separately // docs not working, do this way!
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  FormControl: {
    width: 500,
  },
});

export default withStyles(styles)(class extends Component {
  state = {
    open: false,
    excercise: {
      title: '',
      description: '',
      muscles: '',
    }
  }

  handleToggle = () => {
     this.setState({
       open: !this.state.open
     })
  }

  handleChange = name => ({target: {value}}) => {
    this.setState({
      excercise: {
        ...this.state.excercise,
        [name]: value,
      }
    });
  };

  handleSubmit = () => {
    // TODO: validation
    const { excercise } = this.state

    this.props.onCreate(excercise)
    })
  }

  render() {
    const {open, excercise: {title, description, muscles}} = this.state,
          {classes, muscles: categories} = this.props
    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        {/* <Button variant="fab" color="secondary" aria-label="edit" className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
      <Button variant="fab" disabled aria-label="delete" className={classes.button}>
        <DeleteIcon />
      </Button> */}

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a New Excercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
           Please fill out the form below.
           <form>
           <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
            className={classes.FormControl}
          >
            {categories.map(category => {
            <MenuItem value={category}>{category}</MenuItem>
            })}
          </Select>
          <br />
        </FormControl>
          <TextField
            multiline
            rows='4'
            label="Description"
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
           </form>
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant='raised'
              onClick={this.handleSubmit}>
                Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
)

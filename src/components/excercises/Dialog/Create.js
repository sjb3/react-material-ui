import React, { Fragment, Component } from 'react';
import { Button, Dialog } from 'material-ui';
// import TextField from 'material-ui/TextField';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons'; // need to import separately // docs not working, do this way!
// import Icon from 'material-ui/Icon';

export default class extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
     this.setState({
       open: !this.state.open
     })
  }

  render() {
    const {open} = this.state
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
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button color="primary" variant='raised'>
                Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}


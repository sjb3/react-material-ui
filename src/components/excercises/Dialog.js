import React, { Fragment, Component } from 'react';
import Form from './Form';
import { Button, Dialog } from 'material-ui';
// import TextField from 'material-ui/TextField';
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons'; // need to import separately // docs not working, do this way!

export default class extends Component {
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


  render() {
    const {open} = this.state,
          {muscles, onCreate} = this.props

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create  a New Excercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
           Please fill out the form below.
            <Form muscles={muscles} onSubmit={onCreate} />
            </DialogContentText>

          </DialogContent>

        </Dialog>
      </Fragment>
    );
  }
}


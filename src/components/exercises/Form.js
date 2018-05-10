import React, { Component } from 'react';

import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import { TextField, Select, Button } from 'material-ui';

// OK for now, but if you wanna customize the size of the Dialog, work on it later
const styles = theme => ({
  FormControl: {
    width: 300,
  },
  xsFormControl: {
    width: 250,
  },
});

export default withStyles(styles)(class Form extends Component {
  state = this.getInitialState()

  getInitialState() {
    const {exercise} = this.props;
    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  // UNSAFE way
  // componentWillReceiveProps({exercise}) {
  //   this.setState({
  //     ...exercise
  //   })
  // }
  static getDerivedStateFromProps({exercise}) {
    return exercise || null
  }


  handleChange = name => ({target: {value}}) =>
    this.setState({
        [name]: value,
    });


  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({

      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    })

    this.setState(this.getInitialState())
  }

  render() {

    const { title, description, muscles } = this.state,
          { classes, exercise, muscles: categories } = this.props;

    return (
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
            {categories.map(category =>
              <MenuItem key={category} value={category}>{category}</MenuItem>)}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <Button
              color="primary"
              variant='raised'
              onClick={this.handleSubmit}>
                {exercise ? 'Edit' : 'Create'}
          </Button>
      </form>
    );
  }
}
)


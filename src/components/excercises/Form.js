import React, { Component } from 'react';

import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import { TextField, Select, Button } from 'material-ui';

const styles = theme => ({
  FormControl: {
    width: 300,
  },
});

export default withStyles(styles)(class Form extends Component {
  state = this.getInitialState()

  getInitialState() {
    const {excercise} = this.props;
    return excercise ? excercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleChange = name => ({target: {value}}) =>
    this.setState({
        [name]: value,
    });


  handleSubmit = () => {
    // TODO: validate
    const { excercise } = this.state

    this.props.onSubmit({
      ...excercise,
      id: excercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
    })
  }

  render() {

    const { title, description, muscles } = this.state,
          { classes, muscles: categories } = this.props;

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
                Create
          </Button>
      </form>
    );
  }
}
)


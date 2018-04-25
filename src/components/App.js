import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './excercises';
import { muscles, excercises } from '../store.js';
// muscles are more static but excercises

class App extends Component {
  state = {
    excercises,
    excercise: {}
  }

  getExcercisesByMuscles()  {
    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
      const { muscles } = excercise

      excercises[muscles] = excercises[muscles] ?
      [...excercises[muscles], excercise] :
      [excercise]
      return excercises
    }, {})
  )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExcerciseSelected = id => {
    this.setState(({excercises}) => {
      excercise: excercises.find(ex => ex.id === id)
    })}

  render() {
    const excercises = this.getExcercisesByMuscles(),
    {category, excercise} = this.state
    return (
      <Fragment>
        <Header />
        <Excercises excercise={excercise} onSelect={this.handleExcerciseSelected} category={category} excercises={excercises} />
        <Footer category={category} muscles = {muscles} onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './excercises';
import { muscles, excercises } from '../store.js';
// muscles are more static but excercises; hence state which is changeable

class App extends Component {
  state = {
    excercises,
    excercise: {}
  }

  getExcercisesByMuscles()  {
    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
      const { muscles } = excercise

      excercises[muscles] = excercises[muscles]
      ? [...excercises[muscles], excercise]
      : [excercise]
      return excercises
    }, {})
    )
  }

  handleCategorySelecte = category => {
    this.setState({
      category
    })
  }

  handleExcerciseSelecte = id => {
    this.setState(({excercises}) => {
      excercises: excercises.find(ex => ex.id === id)
    })}

  handleExcerciseCreate = (excercise) => {
    this.setState(({excercises}) => ({
       excercises: [
         ...excercises,
         excercise
       ]
    }))
  }

  render() {
    const excercises = this.getExcercisesByMuscles(),
          { category, excercise  } = this.state
    // console.log('>>>>>>>', this.state.excercise.descriptopn)

    return (
      <Fragment>
        <Header muscles={muscles} onExcerciseCreate={this.handleExcerciseCreate} />
        <Excercises excercise={excercise} onSelect={this.handleExcerciseSelecte} category={category} excercises={excercises} />
        <Footer category={category} muscles = {muscles} onSelect={this.handleCategorySelecte}/>
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './excercises';
import { muscles, excercises } from '../store.js';
// muscles are more static but excercises; hence state which is changeable

class App extends Component {
  state = {
    excercises,
    excercise: {},
    editMode: false
  }

  getExcercisesByMuscles()  {
    const initialExcercises = muscles.reduce((excercises, category) => ({
      ...excercises,
      [category]: []
    }), {});

    // console.log( muscles, initialExcercises)

    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
      const { muscles } = excercise

      excercises[muscles] = [...excercises[muscles], excercise]
      return excercises
    }, initialExcercises)
    )
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExcerciseSelect = id => {
    this.setState(({excercises}) => ({
      excercise: excercises.find(ex => ex.id === id)
    }))
  }

  // same as using prevState, hence pass it as object
  handleExcerciseCreate = (excercise) =>
    this.setState(({excercises}) => ({
       excercises: [
         ...excercises,
         excercise
       ]
  }))


  handleExcerciseDelete = (id) =>
    this.setState(({excercises}) => ({
      excercises: excercises.filter(ex => ex.id !== id)
  }))

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  // this will update the excercise
  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
  }))

  render() {
    const excercises = this.getExcercisesByMuscles(),
          { category, excercise, editMode  } = this.state
    // console.log('>>>>>>>', this.state.excercise.descriptopn)

    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExcerciseCreate={this.handleExcerciseCreate} />
        <Excercises
          editMode={editMode}
          onDelete={this.handleExcerciseDelete}
          onEdit={this.handleExcerciseEdit}
          excercise={excercise}
          onSelect={this.handleExcerciseSelect}
          category={category}
          excercises={excercises}
          muscles={muscles}
          onSelectEdit={this.handleExcerciseSelectEdit}/>

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}/>
      </Fragment>
    );
  }
}

export default App;

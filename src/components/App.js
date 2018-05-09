import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './exercises';
import { muscles, exercises } from '../store.js';
// muscles are more static but exercises; hence state which is changeable

class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  }

  getExercisesByMuscles()  {
    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {});

    // console.log( muscles, initialExercises)

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = [...exercises[muscles], exercise]
      return exercises
    }, initialExercises)
    )
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id =>
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))


  // same as using prevState, hence pass it as object
  handleExerciseCreate = (exercise) =>
    this.setState(({exercises}) => ({
       exercises: [
         ...exercises,
         exercise
       ]
  }))

  handleExerciseDelete = (id) =>
    this.setState(({exercises, exercise, editMode}) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id == id ? {} : exercise
  }))

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  // this will update the exercise
  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
  }))

  render() {
    const exercises = this.getExercisesByMuscles(),
          { category, exercise, editMode  } = this.state
    // console.log('>>>>>>>', this.state.exercise.descriptopn)

    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate} />
        <Exercises
          editMode={editMode}
          onDelete={this.handleExerciseDelete}
          onEdit={this.handleExerciseEdit}
          exercise={exercise}
          onSelect={this.handleExerciseSelect}
          category={category}
          exercises={exercises}
          muscles={muscles}
          onSelectEdit={this.handleExerciseSelectEdit}/>

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}/>
      </Fragment>
    );
  }
}

export default App;

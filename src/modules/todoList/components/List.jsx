import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import CreateTask from '../containers/CreateTask'
import Task from './Task'

export default class TodoList extends React.Component {
  componentDidMount() {
    axios
      .get('tasks', {})
      .then(response => this.props.getTasks(response.data))
      .catch(error => console.log(error))
  }

  render() {
    // if (this.props.tasks[0]) {
    //   axios.post('task/update', { _id: this.props.tasks[0]._id })
    // }
    return (
      <div
        style={{
          width: '500px',
          backgroundColor: '#fff',
          margin: '0 auto',
          border: '1px solid gray',
        }}
      >
        <CreateTask />
        {this.props.tasks.map(item => <Task item={item} key={item._id} />)}
      </div>
    )
  }
}

TodoList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

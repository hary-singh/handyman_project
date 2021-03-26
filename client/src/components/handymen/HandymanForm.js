import { Component } from 'react';

class HandymanForm extends Component{
  state = { title:"", specialty:"", editing: false }
 
  

  componentDidMount(){
    if (this.props.id){
      const {id, title, specialty } = this.props
      this.setState({id, title, specialty})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id){
      const { updateHandyman, id, toggleForm } = this.props
      updateHandyman(id, this.state)
      toggleForm()
    } else {
      this.props.addHandyman(this.state)
    }
    this.setState({ title:"", specialty:"" })
  }

  render(){
    const { title, specialty } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          required
          placeholder="Name"
        />
        <input
          type="text"
          name="specialty"
          value={specialty}
          onChange={this.handleChange}
          required
          placeholder="Specialty"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default HandymanForm;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import styles from './PostForm.css';


export default class PostForm extends PureComponent {
  //handles the submit aspect of the UI therefore needs an onSubmit propType
  //state will include title and body
  //needs handleChange to listen to input fields

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form className={styles.PostForm} onSubmit={this.handleSubmit}>
        <input name="title" value={title} onChange={this.handleChange} />
        <textarea name="body" value={body} onChange={this.handleChange} ></textarea>
        <button>SUBMIT <FaCheck /></button>
      </form>
    );
  }
}

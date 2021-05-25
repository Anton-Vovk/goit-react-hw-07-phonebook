import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import styles from '../ContactForm/ContactForm.module.css';

const Filter = ({ filter, inputHandler }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <label className={styles.label}>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Search name"
          value={filter}
          className={styles.input}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

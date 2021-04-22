import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getFilter } from '../../redux/contactsItems/contacts-selectors';

import { changeFilter } from '../../redux/filter/filter-actions';

import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Filter:
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

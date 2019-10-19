import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import './input.scss';

const Input = ({ search, placeholder, onChange }) => {
  const classname = search ? 'search-field' : 'input-field';
  return (
    <div className="input">
      <input
        className={`${classname}`}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      {search ? <span className="search-icon"><FaSearch /></span> : null}
    </div>
  );
};
Input.defaultProps = {
  search: false,
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  search: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Input;

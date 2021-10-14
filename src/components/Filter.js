import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/filter.css';

class Filter extends Component {
  render() {
    const { filterName, onInputChange } = this.props;
    return (
      <div className="filtro">
        <h2>Filtros</h2>
        <input
          className="normal-input"
          placeholder="Filter by Name"
          name="filterName"
          onChange={ onInputChange }
          data-testid="name-filter"
          value={ filterName }
          type="text"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;

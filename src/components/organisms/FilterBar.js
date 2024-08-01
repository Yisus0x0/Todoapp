import React from 'react';
import FilterButton from '../molecules/FilterButton';

const FilterBar = ({ setFilter }) => (
  <div className="filters">
    <FilterButton onClick={() => setFilter('all')}>Todas</FilterButton>
    <FilterButton onClick={() => setFilter('active')}>Pendientes</FilterButton>
    <FilterButton onClick={() => setFilter('completed')}>Completadas</FilterButton>
  </div>
);

export default FilterBar;
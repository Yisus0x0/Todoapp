import React from 'react';
import Button from '../atoms/Button';

const FilterButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default FilterButton;
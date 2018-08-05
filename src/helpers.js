import React from 'react';
import uniqid from 'uniqid';

export const keyGenerator = (OriginalComponent, length) => {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(<OriginalComponent key={uniqid()} />);
  }
  return array;
};

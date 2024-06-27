import React from 'react';
// import './styles.less'

export const AIHelper = ({ label, ...props }) => {
  return (
    <div
      {...props}
    >
      {label}
    </div>
  );
};

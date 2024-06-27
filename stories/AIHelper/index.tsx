import React,{ useEffect } from 'react';
import './styles.less'
export interface AIHelperProps {
  label: string;
};

export const AIHelper: React.FC<AIHelperProps> = ({ label, ...props }) => {
  useEffect(() => {
    console.log('AIHelper?????');
  },[])
  return (
    <div
      {...props}
    >
      {label}
    </div>
  );
};

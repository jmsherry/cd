import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';

export default function Blurb(props) {
  const defaultStyles = {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1440px',
    backgroundSize: 'cover',
  };
  const overrides = props.styles;
  const style = {
    ...defaultStyles,
    ...overrides,
  };
  return (
    <div className="Blurb" style={style} />
  );
}

Blurb.propTypes = {
  styles: PropTypes.Shape.isRequired,
};

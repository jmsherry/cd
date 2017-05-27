import React from 'react';

export default function HomePage(props) {
  return (
    <div className="Jumbotron">
      <video className="video">
        <track kind="captions" {...props} />
      </video>
    </div>
  );
}

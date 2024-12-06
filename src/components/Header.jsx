import React from 'react';

function Header(){
  return (
    <div className="container-fluid bg-danger">
      <div className="container d-flex justify-content-end">
        <h1 className="fs-3 m-0 text-white" style={{ lineHeight: '29px', fontWeight: 600 }}>
          Paixão Rubro-Negra
        </h1>
      </div>
    </div>
  );
};

export default Header;


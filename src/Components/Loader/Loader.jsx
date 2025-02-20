import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return(<>
     <div className="container mt-4 d-flex justify-content-center align-items-center">
     <Bars
  height="80"
  width="80"
  color=" #2B6CB0 "
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  </>)
};

export default Loader;

import React from 'react';
import IndexSections from '../components/index';  // ✅ Fix import

const IndexPage = () => {
  return (
    <>
      <div className="">
        <IndexSections />  {/* ✅ Fix component usage */}
      </div>
    </>
  );
};

export default IndexPage;
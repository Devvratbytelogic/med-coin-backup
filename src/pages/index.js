import React from 'react';
import IndexSections from '../components/index';  // ✅ Fix import

const IndexPage = () => {
  return (
    <>
      <IndexSections />  {/* ✅ Fix component usage */}
    </>
  );
};

export default IndexPage;
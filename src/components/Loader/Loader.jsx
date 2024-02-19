import React from "react";
import { DNA } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex absolute h-full w-full top-0 left-0 items-center justify-center">
      <DNA
        visible={true}
        height="500"
        width="500"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader;

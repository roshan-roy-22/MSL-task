import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "../index.css";

function SyncLoaderr() {
  return (
    <div className="loader">
      <SyncLoader
        color="rgb(0, 123, 255)" // Change this to the blue color you prefer
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default SyncLoaderr;
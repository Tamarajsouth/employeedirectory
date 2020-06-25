import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="container">
      <header className="row">
        <h1 className="col text-center">Fellowship of the Ring Characters</h1>
      </header>
      <div className="row">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="drowbutton"
          >
            Sort
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={props.sortName}>
              Name
            </button>
          </div>
        </div>
      </div>
      <div className="row">{props.children}</div>
    </div>
  );
}

export default Wrapper;

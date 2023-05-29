import type { Component } from 'solid-js';
import API from "./api";

const Table: Component = () => {

    const persons = API.fetchPersons();

    return (
      <div>
  
      </div>
    );
  };
  
  export default Table;
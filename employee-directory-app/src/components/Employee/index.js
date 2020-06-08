import React from "react";
import "./style.css";
import { Button } from "@material-ui/core";

function Employee(props) {
  return (
    <div className="card">
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        <Button variant="outlined" color="secondary">
          Remove
        </Button>
      </span>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Employee;

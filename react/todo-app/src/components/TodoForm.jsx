import React from "react";
import { Button, Input } from "reactstrap";

export default function TodoForm() {
  return (
    <div>
      <label for="title">Title</label>
      <Input type="text" name="title" />
      <label for="description">Description</label>
      <Input type="textarea" name="description" />
      <label>Effort</label>
      <div>
        <label>Days:</label>
        <Input type="text" name="days" />
      </div>
      <div>
        <label>Hours:</label>
        <Input type="text" name="hours" />
      </div>
      <Button color="primary">Create</Button>
    </div>
  );
}

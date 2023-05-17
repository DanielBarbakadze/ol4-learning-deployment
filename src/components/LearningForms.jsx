import { useState } from "react";

import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const isValidName = (name) => {
  const maximumLength = 10;
  if (name.length > maximumLength) {
    return { result: false, error: "Maximum 10 characters" };
  }

  if (!name.match(/^[a-zA-Z]+$/)) {
    return { result: false, error: "Only letters" };
  }

  return { result: true, error: "" };
};

const LearningForms = () => {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");

  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    const { result: isValidField, error } = isValidName(name);

    if (!isValidField) {
      setError([{ field: "name", error }]);
    } else {
      setError([]);
    }

    e.preventDefault();

    console.log({
      name,
      select,
      radio,
    });
  };

  return (
    <div style={{ padding: "32px" }}>
      <h1>LearningForms</h1>

      {console.log({ error })}

      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label htmlFor="name">Name</Label>
          <Input
            invalid={error.find((err) => err?.field === "name")}
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormFeedback>
            {error.find((err) => err?.field === "name")?.error}
          </FormFeedback>
        </FormGroup>

        <Input type="submit" value="Submit" />
      </Form>
    </div>
  );
};

export default LearningForms;

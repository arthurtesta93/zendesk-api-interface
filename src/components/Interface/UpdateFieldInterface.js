import { useState } from "react";
import * as API from "../../services/Requests";
import DataDisplay from "./DataDisplay";
import { Form, Input, Button } from "antd";

function UpdateFieldInterface(props) {
  const [id, setID] = useState();
  const [response, setResponse] = useState({});

  const onSubmitRequest = () => {
    API.requestReducer(
      props.selectedField,
      props.ticketID,
      props.selectedInterface,
      props.selectedBrand,
      props.email,
      props.password,
      id
    ).then((res) => setResponse(res.data));
  };

  return (
    <>
      <>
        <Form.Item
          label={
            props.selectedField.charAt(0).toUpperCase() +
            props.selectedField.substr(1) +
            " ID"
          }
          name="text"
          rules={[
            {
              required: true,
              message:
                "Please input the ID of the selected entity to update the ticket.",
            },
          ]}
        >
          <Input onChange={(e) => setID(e.target.value)} />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          id="submit-button"
          onClick={() => onSubmitRequest()}
        >
          Submit
        </Button>
      </>

      <DataDisplay data={response} />
    </>
  );
}

export default UpdateFieldInterface;

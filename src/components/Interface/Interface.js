import { useState } from "react";
import { Form, Input, Select, Button, Popover, notification } from "antd";
import * as API from "../../services/Requests";

import UpdateFieldInterface from "./UpdateFieldInterface";
import DataDisplay from "./DataDisplay";
const { Option } = Select;

function Interface(props) {
  const [selectedField, setSelectedField] = useState("");
  const [ticketID, setTicketID] = useState();
  const [response, setResponse] = useState();

  const onSubmitRequest = () => {
    if (props.selectedInterface != "delete" && String(ticketID).includes(",")) {
      notification.info({
        message: "Warning",
        description: "Bulk operation unavailable for this request",
      });
      return;
    }
    API.requestReducer(
      selectedField,
      ticketID,
      props.selectedInterface,
      props.selectedBrand,
      props.email,
      props.password,
      props.id
    ).then((res) => setResponse(res.data));
  };

  return (
    <>
      {console.log(ticketID)}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ marginBottom: 32 }}
        initialValues={{ remember: false }}
        autoComplete="off"
      >
        <Popover
          content={
            "For bulk operations, separate input with a comma (e.g.: 1234,5678)"
          }
        >
          <Form.Item
            style={{ marginRight: 40 }}
            label="Ticket ID"
            value={ticketID}
            name="number"
            rules={[{ required: true, message: "Please input the ticket ID" }]}
          >
            <Input
              onChange={(e) =>
                /\s/g.test(e.target.value)
                  ? notification.info({
                      message: "Warning",
                      description:
                        "Please remove all blank spaces from the input field",
                    })
                  : setTicketID(e.target.value)
              }
            />
          </Form.Item>
        </Popover>
        {props.selectedInterface === "update" ? (
          <Form.Item
            label="Field:"
            name="field"
            rules={[
              {
                required: true,
                message: "Please select the ticket field to be updated",
              },
            ]}
          >
            <Select
              defaultValue="Select field to update"
              style={{ width: 120, marginLeft: 10 }}
              onChange={(value) => setSelectedField(value)}
            >
              <Option value="requester">Requester</Option>
              <Option value="assignee">Assignee</Option>
              <Option value="submitter">Submitter</Option>
              <Option value="organization">Organization</Option>
              <Option value="brand">Brand (Product)</Option>
            </Select>
          </Form.Item>
        ) : null}

        {props.selectedInterface === "update" && selectedField ? (
          <UpdateFieldInterface
            selectedField={selectedField}
            ticketID={ticketID}
            selectedInterface={props.selectedInterface}
            selectedBrand={props.selectedBrand}
            email={props.email}
            password={props.password}
            setResponse={setResponse}
          />
        ) : null}

        {props.selectedInterface === "info" ||
        props.selectedInterface === "delete" ? (
          <Button
            type="primary"
            htmlType="submit"
            id="submit-button"
            onClick={() => onSubmitRequest()}
          >
            Submit
          </Button>
        ) : null}
      </Form>

      {response ? <DataDisplay data={response} /> : null}
    </>
  );
}

export default Interface;

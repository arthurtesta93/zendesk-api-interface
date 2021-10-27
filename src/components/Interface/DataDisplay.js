import { Descriptions } from "antd";

export default function DataDisplay(props) {
  return (
    <Descriptions title="Ticket Info" bordered>
      <Descriptions.Item label="Title">
        {props.data.ticket.subject}
      </Descriptions.Item>
      <Descriptions.Item
        label="Status"
        contentStyle={
          props.data.ticket.status === "closed"
            ? { backgroundColor: "lightgreen" }
            : { backgroundColor: "lightpink" }
        }
      >
        {props.data.ticket.status}
      </Descriptions.Item>
      <Descriptions.Item label="Ticket ID">
        {props.data.ticket.id}
      </Descriptions.Item>
      <Descriptions.Item label="Description">
        {props.data.ticket.description}
      </Descriptions.Item>
      <Descriptions.Item label="Created at" span={1}>
        {props.data.ticket.created_at}
      </Descriptions.Item>
      <Descriptions.Item label="Updated at" span={1}>
        {props.data.ticket.updated_at}
      </Descriptions.Item>
      <Descriptions.Item label="Requester ID" span={1}>
        {props.data.ticket.requester_id}
      </Descriptions.Item>
      <Descriptions.Item label="Assignee ID" span={1}>
        {props.data.ticket.assignee_id}
      </Descriptions.Item>
      <Descriptions.Item label="Submitter ID" span={1}>
        {props.data.ticket.submitter_id}
      </Descriptions.Item>
      <Descriptions.Item label="Organization ID" span={1}>
        {" "}
        {props.data.ticket.organization_id}
      </Descriptions.Item>
      <Descriptions.Item label="Product ID" span={1}>
        {props.data.ticket.brand_id}
      </Descriptions.Item>
    </Descriptions>
  );
}

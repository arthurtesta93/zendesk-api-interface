import axios from "axios";

const NO_CORS_PROXY = "https://infinite-tor-10314.herokuapp.com/";

const ticketUpdate = async (
  selectedField,
  ticketID,
  selectedBrand,
  email,
  password,
  id
) => {
  const field = selectedField + "_id";
  const response = axios({
    method: "put",
    url:
      NO_CORS_PROXY +
      "https://" +
      selectedBrand +
      ".zendesk.com/api/v2/tickets/" +
      ticketID,
    data: {
      ticket: {
        [field]: id,
      },
    },
    headers: {
      Authorization:
        "Basic amVubnkud2VuZ0Bsb2Fkc21hcnQuY29tOnRvbXA5cmVlcipTQVVGLmJlY2g=",
      "Cache-Control": "no-cache",
      Accept: "*/*",
      "Accept-Enconding": "gzib, deflate, br",
    },
  });
  console.log(response);
  return response;
};

const ticketDelete = async (ticketID, selectedBrand /*email*/ /*password*/) => {
  const response = await axios({
    method: "delete",
    url:
      NO_CORS_PROXY +
      "https://" +
      selectedBrand +
      ".zendesk.com/api/v2/tickets" +
      ticketID,
    headers: {
      Authorization:
        "Basic amVubnkud2VuZ0Bsb2Fkc21hcnQuY29tOnRvbXA5cmVlcipTQVVGLmJlY2g=",
      "Cache-Control": "no-cache",
      Accept: "*/*",
      "Accept-Enconding": "gzib, deflate, br",
    },
  });
  return response;
};

const ticketInformation = async (
  ticketID,
  selectedBrand /*email*/ /*password*/
) => {
  const response = await axios({
    method: "get",
    url:
      NO_CORS_PROXY +
      "https://" +
      selectedBrand +
      ".zendesk.com/api/v2/tickets/" +
      ticketID,
    headers: {
      Authorization:
        "Basic amVubnkud2VuZ0Bsb2Fkc21hcnQuY29tOnRvbXA5cmVlcipTQVVGLmJlY2g=",
      "Cache-Control": "no-cache",
      Accept: "*/*",
      "Accept-Enconding": "gzib, deflate, br",
    },
  });
  return response;
};

export function requestReducer(
  selectedField,
  ticketID,
  selectedInterface,
  selectedBrand,
  email,
  password,
  id
) {
  console.log(
    selectedField,
    ticketID,
    selectedInterface,
    selectedBrand,
    email,
    password,
    id
  );
  switch (selectedInterface) {
    case "update":
      return ticketUpdate(
        selectedField,
        ticketID,
        selectedBrand,
        email,
        password,
        id
      );
    case "delete":
      return ticketDelete(ticketID, selectedBrand, email, password);
    case "info":
      return ticketInformation(ticketID, selectedBrand, email, password);
    default:
      console.log("request error");
  }
}

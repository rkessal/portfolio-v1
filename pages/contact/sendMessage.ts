export type Payload = {
  name: string;
  email: string;
  message: string;
};

type Response = {
  error: boolean;
  message: string;
};

const response: Response = {
  error: true,
  message: "",
};

const headers = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

export default function sendMessage(payload: Payload): Response {
  fetch("/api/contact", {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if (res.status === 200) {
        response.error = false;
        response.message = res.statusText;
      }
    })
    .catch((error) => {
      response.error = true;
      response.message = error.message;
    });

  return response;
}

import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import swal from "sweetalert";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/fa/user";
import { at } from "react-icons-kit/fa/at";
import { envelope } from "react-icons-kit/fa/envelope";
import { Card, FormField, SubmitFrame } from "../styles/components/FormStyles";

init("U8T3X6sHRW_5PpV9a");

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "U8T3X6sHRW_5PpV9a")
      .then(() => {
        swal({ text: "Email successfully sent!", icon: "success" });
      })
      .catch(() =>
        swal("Oops!", "Something went wrong!", "error", {
          icon: "error",
        })
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_nv24rbn";
    const serviceId = "service_9jg1snr";

    sendFeedback(serviceId, templateId, {
      message: message,
      from_name: name,
      reply_to: email,
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Card>
      <div
        role="form"
        className="contact-form"
        id="contact-01"
        lang="en-US"
        dir="ltr"
      >
        <form className="form" onSubmit={handleSubmit}>
          <div className="contact-form">
            <FormField className="form-field">
              <span className="form-control-wrap your-name">
                <input
                  type="text"
                  name="your-name"
                  size="40"
                  value={name}
                  className="form-control text validates-as-required input"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
              <label>
                <Icon icon={user}></Icon>
              </label>
            </FormField>
            <FormField className="form-field">
              <span className="form-control-wrap your-email">
                <input
                  type="email"
                  name="your-email"
                  size="40"
                  value={email}
                  className="form-control text email validates-as-required validates-as-email input"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <label>
                <Icon icon={at}></Icon>
              </label>
            </FormField>
            <FormField className="form-field">
              <span className="form-control-wrap your-message">
                <textarea
                  name="your-message"
                  cols="40"
                  rows="10"
                  value={message}
                  className="form-control textarea validates-as-required input"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </span>
              <label>
                <Icon icon={envelope}></Icon>
              </label>
            </FormField>
            <SubmitFrame className="submit-frame">
              <button className="btn btn-md submit" type="submit">
                <span>Send message</span>
              </button>
            </SubmitFrame>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Form;

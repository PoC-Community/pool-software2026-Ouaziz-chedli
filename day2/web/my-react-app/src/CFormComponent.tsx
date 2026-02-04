import { useState } from "react";

interface MessageProps {
  name: string;
  email: string;
  message: string;
}

function MessageComponent({ name, email, message }: MessageProps) {
  return (
    <div className="message">
      <h3 className="message-name">{name}</h3>
      <p className="message-email">{email}</p>
      <p className="message-content">{message}</p>
    </div>
  );
}

export function FormComponent() {
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueMessage, setInputValueMessage] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errorValue) {
      setErrorValue("Please fix the errors before submitting.");
      return;
    }
    if (!inputValueName || !inputValueEmail || !inputValueMessage) {
      setErrorValue("All fields are required.");
      return;
    }
    setErrorValue("");
    console.log("Name:", inputValueName);
    console.log("Email:", inputValueEmail);
    console.log("Message:", inputValueMessage);
    setMessages([
      ...messages,
      {
        name: inputValueName,
        email: inputValueEmail,
        message: inputValueMessage,
      },
    ]);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueEmail(value);
    setErrorValue(value.includes("@") ? "" : "Invalid email address");
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueMessage(event.target.value);
  };

  return (
    <>
      <h1>Contact Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValueName}
          onChange={handleNameChange}
          className="form-name-input"
        />
        <input
          type="email"
          value={inputValueEmail}
          onChange={handleEmailChange}
          className="form-email-input"
        />
        <input
          type="text"
          value={inputValueMessage}
          onChange={handleMessageChange}
          className="form-message-input"
        />
        {errorValue && <p style={{ color: "red" }}>{errorValue}</p>}
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
      {!messages.length && <p>No messages yet.</p>}
      {messages.length > 0 && (
        <div className="messages-list">
          {messages.map((msg, index) => (
            <MessageComponent
              key={index}
              name={msg.name}
              email={msg.email}
              message={msg.message}
            />
          ))}
        </div>
      )}
    </>
  );
}

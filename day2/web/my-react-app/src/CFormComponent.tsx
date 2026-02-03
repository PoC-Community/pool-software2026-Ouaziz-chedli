export function FormComponent() {
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueMessage, setInputValueMessage] = useState("");
  const [errorValue, setErrorValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", inputValueName);
    console.log("Email:", inputValueEmail);
    console.log("Message:", inputValueMessage);
  };

  const handleNameChange = (event) => {
    setInputValueName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setInputValueEmail(event.target.value);
    if (!event.target.value.includes("@")) {
      setErrorValue("Invalid email address");
    } else {
      setErrorValue("");
    }
  };

  const handleMessageChange = (event) => {
    setInputValueMessage(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="email" value={inputValueName} onChange={handleNameChange} />
      <input type="text" value={inputValueEmail} onChange={handleEmailChange} />
      <input
        type="text"
        value={inputValueMessage}
        onChange={handleMessageChange}
      />
      {errorValue && <p style={{ color: "red" }}>{errorValue}</p>}
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

// First of all let's create a file named LoginForm.js , inside it we will create a component called CreateForm and will use this component in our app.js file

function CreateForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [inputMail, setInputMail] = React.useState("inputStyling");
  const [inputPass, setInputPass] = React.useState("inputStyling");

  const pass = "1234";

  const handleSignIn = () => {
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || pass != password) {
      console.log("Please enter a valid email address or a pass valid");
      setInputMail("inputStyling invalid");
      setInputPass("inputStyling invalid");
      return;
    }
    setInputMail("inputStyling");
    setInputPass("inputStyling");
    setEmail("");
    setPassword("");
    console.log("You are signed in");
  };

  return (
    <>
      <div className="styles df">
        <h1 className="stylingheading">Sign In</h1>
        <div className="inputfields styling">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={inputMail}
          />
        </div>
        <div className="inputfields styling">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={inputPass}
          />
        </div>
        <div className="buttondivstyling buttonstyling">
          <button onClick={handleSignIn}>Submit</button>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CreateForm />);

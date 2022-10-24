import React from "react";
import { useState } from "react";
import { TextField} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Alert, Snackbar } from "@mui/material";
import { Container, Button} from 'react-bootstrap'

// import './auth.scss'


// import { Button, Card, Container } from 'react-bootstrap'
// import { IoPerson } from 'react-icons/fa'
// FormControlLabel, checkbox 


const theme = createTheme({
  palette: {
    primary: {
      main: "#FB9D12"
    }
  }
})

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [success , setSuccess] = useState(false);

  async function login(e) {
    e.preventDefault();

    const response = await fetch('https://whispering-escarpment-17768.herokuapp.com/', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json();

    switch (data.msg) {
      case "User with the given email doesn't exist":
        setError3(true);
        break;
      case "Wrong password":
        setError2(true);
        break;
      case "Success":

        window.location.href = "/";
        break;
      default:
        break;
    }
  }

  async function signUp(e) {
    e.preventDefault();

    const response = await fetch("https://whispering-escarpment-17768.herokuapp.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password
      })
    })

    const data = await response.json();

    switch (data.msg) {
      case "User with the given email already exists":
        setError1(true);
        break;
      case "User created successfully":
        setSuccess(true);
        break;
      default:
        break;
    }
  }


  function handleClose()
  {
    setError1(false);
    setError2(false);
    setError3(false);
    setSuccess(false);
  }

  return (
    <>
      <Container id="/auth" className = 'my-4'>
        <ThemeProvider theme={theme} className='mb-3'>
          <form className="d-flex flex-column  align-items-center " autoComplete="off" onSubmit={signIn ? login : signUp}>
            {
              !signIn && <>
                <TextField 
                  label="Enter name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  className="mb-2"
                />
                <TextField
                  label="Enter phone"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value) }}
                  className="mb-2"
                />
              </>
            }
            <TextField 
              label="Enter email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              className="mb-2"
            />
            <TextField
              label="Enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              className="mb-2"
            />
            {
              signIn && <a className="color-black mb-2" href="/">Forgot password ?</a>
            }
            <Button className='border-0 w-auto h-auto mb-3 btn btn-dark ' type="submit">
              {
                signIn ? "Sign in" : "Sign up"
              }
            </Button>

            { 
              signIn ? <>
                <h3 className="">
                  Don't have an account ? <span onClick={() => { setSignIn(!signIn) }}>Sign up</span>
                </h3>
                <h4>or Sign in with</h4>
                <div className="d-flex flex-row justify-content-center ">
                  <div  style={{ background: "#405498"}}>
                    <FaFacebookF className=" pr-5 br-4" />
                  </div>
                  <div className=" pr-2 " style={{ background: "#359BF1" }}>
                    <FaTwitter />
                  </div>
                  <div className="" style={{ background: "#E74639" }}>
                    <FaGoogle />
                  </div>
                </div>
              </>
                : <h3>Already have an account <span onClick={() => { setSignIn(!signIn) }}>Sign in</span></h3>
            }

          </form>
        </ThemeProvider>
        {
          error1 && <Snackbar open={error1} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error">
              User with the same email already exist !
            </Alert>
          </Snackbar>
        }
        {
          error2 && <Snackbar open={error2} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error">
              Wrong password !
            </Alert>
          </Snackbar>
        }
        {
          error3 && <Snackbar open={error3} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error">
              User with the given email doesn't exist !
            </Alert>
          </Snackbar>
        }
        {
          success && <Snackbar open={success} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="success">
              User created successfully !
            </Alert>
          </Snackbar>
        }
      </Container>
    </>
  )
}

export default Auth;




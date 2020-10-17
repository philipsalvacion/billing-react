import React from "react";
import { Input } from "reactstrap"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: ""
    }
  }

  render() {
    return (
      <>
      <Input />
      </>
    )
  }
}

export default SignIn;
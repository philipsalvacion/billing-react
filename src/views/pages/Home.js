import React from "react";
import { Input } from "reactstrap"

class Home extends React.Component {
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

export default Home;
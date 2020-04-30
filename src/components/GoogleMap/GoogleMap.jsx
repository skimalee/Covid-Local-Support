import React from "react";
import { Form } from "semantic-ui-react";
import { getGeocode } from "../../utils/geocodeService";
import { Background } from './style'

class GeocodeComponenet extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <Background>
        <Form
          onSubmit={() => {
            if (this.state.address) {
              let query = { address: this.state.address };
              getGeocode(query).then((res) => {
                console.log(res);
              });
            }
          }}
        >
          <Form.Input
            placeholder="Search location..."
            value={this.state.address}
            name="address"
            onChange={this.handleSearchChange}
          />
        </Form>
      </Background>
    );
  }
}
export default GeocodeComponenet;

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        console.log(error);
        this.setState({ error: error.message });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    const { latitude, longitude, error } = this.state;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`Latitude: ${latitude}`}</Text>
        <Text>{`Longitude: ${longitude}`}</Text>
        {error ? <Text>{`Error: ${error}`}</Text> : null}
      </View>
    );
  }
}

export default Geolocation;

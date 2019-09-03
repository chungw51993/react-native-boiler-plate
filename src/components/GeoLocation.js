import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class GeolocationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  render() {
    const {latitude, longitude, error} = this.state;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`Latitude: ${latitude}`}</Text>
        <Text>{`Longitude: ${longitude}`}</Text>
        {error ? <Text>{`Error: ${error}`}</Text> : null}
      </View>
    );
  }
}

export default GeolocationComponent;

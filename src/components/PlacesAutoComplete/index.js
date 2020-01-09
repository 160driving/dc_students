import React from 'react';
import { Text as Avenir, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GREY_TEXT, ERROR } from '_constants/colors';

import { Text } from '_components';

const GooglePlacesInput = ({
  onChange,
  error,
  renderIcon,
  value = {},
  label
}) => {
  const { description = '', lat = 0, lng = 0 } = value;
  const previousPlace = {
    description: value.description,
    geometry: { location: { lat, lng } }
  };
  return (
    <View>
      <Text style={{ marginBottom: 13, color: GREY_TEXT }}>{label}</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed="false" // true/false/undefined
        fetchDetails={true}
        // value={description}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details = null) => {
          const objectToSend = {
            ...details.geometry.location,
            description: data.description
          };
          onChange(objectToSend);
        }}
        textInputProps={{
          placeholder: description
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyCdrZmoWCpHEBLrAnkUPuqFQ3HjQ-Kj8wk',
          language: 'en' // language of the results
          // types: '(cities)' // default: 'geocode'
        }}
        styles={{
          textInputContainer: {
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'red',
            height: 47,
            backgroundColor: '#F5F5F5',
            borderRadius: 23.5,
            paddingHorizontal: 14,
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            backgroundColor: '#F5F5F5',
            marginLeft: 0,
            color: GREY_TEXT
          },
          poweredContainer: {
            height: 0
          },
          description: {
            fontWeight: 'bold'
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          }
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          key: 'AIzaSyCdrZmoWCpHEBLrAnkUPuqFQ3HjQ-Kj8wk',
          latlng: '48.8152937,2.4597668'
        }}
        predefinedPlaces={[previousPlace]}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3'
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
        debounce={100} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        renderRightButton={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 47,
              marginRight: 10
            }}>
            {renderIcon()}
          </View>
        )}
      />
      {!!error && (
        <Avenir
          style={{
            fontFamily: 'Avenir',
            color: ERROR,
            alignSelf: 'stretch',
            marginTop: 4,
            fontSize: 13
          }}>
          {error}
        </Avenir>
      )}
    </View>
  );
};

export default GooglePlacesInput;

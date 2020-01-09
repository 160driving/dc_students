import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid
} from 'react-native';

import { modalCloseButton, modalCloseIcon } from './styles';
import { closeIcon } from '_assets/img';
const ScannerComponent = Platform.select({
  android: () => require('react-native-barcode-scanner-google').default,
  ios: () => require('react-native-camera-kit').CameraKitCameraScreen
})();

class QrCodeScanner extends Component {
  constructor() {
    super();
    this.state = {
      qrCodeValue: '',
      startScanner: false,
      qrcode: ''
    };
  }

  componentDidMount() {
    this.openQrCodeScanner();
  }

  scanningDone = qrCode => {
    console.log('QR COBE: ', qrCode);
    const { onScanSuccess = () => {} } = this.props;

    onScanSuccess(qrCode);
  };

  openQrCodeScanner = () => {
    var that = this;
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera App Permission',
              message: 'Driving Club App needs to acces your camera'
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.setState({ startScanner: true });
          } else {
            alert('Camera permission denied');
            that.props.close();
          }
        } catch (err) {
          alert(`Camera permission error ${err}`, [
            {
              text: 'OK',
              onPress: () => {
                that.props.close();
              }
            }
          ]);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      that.setState({ startScanner: 'true' });
    }
  };

  render() {
    const { close = () => {} } = this.props;
    const { startScanner } = this.state;

    if (startScanner) {
      return (
        <View style={{ flex: 1 }}>
          {Platform.OS === 'ios' ? (
            <ScannerComponent
              showFrame={true}
              scanBarcode={true}
              laserColor={'#FF3D00'}
              frameColor={'#FF3D00'}
              colorForScannerFrame={'black'}
              onReadCode={event =>
                this.scanningDone(event.nativeEvent.codeStringValue)
              }
            />
          ) : (
            <ScannerComponent
              style={{ flex: 1 }}
              onBarcodeRead={({ data, type }) => this.scanningDone(data)}
            />
          )}

          <TouchableOpacity
            style={modalCloseButton}
            onPress={close}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
            <Image style={modalCloseIcon} source={closeIcon} />
          </TouchableOpacity>
        </View>
      );
    }

    return <View />;
  }
}

export default QrCodeScanner;

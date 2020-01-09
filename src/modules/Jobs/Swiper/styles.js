import { StyleSheet } from 'react-native';

//import { GREY_TEXT, BLUE } from '_constants/colors';
import {
  proportionHeight as ph,
  proportionWidth as pw
} from '_helpers/dimensions';

export const cardVerticalMargin = 50;

const button = {
  height: '100%',
  width: pw(145),
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center'
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },

  buttonsFooter: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  discardButton: {
    ...button,
    borderWidth: 2,
    borderColor: '#F26523'
  },
  applyButton: {
    ...button,
    backgroundColor: '#3ABE00'
  },
  discardText: {
    color: '#F26523'
  },
  applyText: {
    color: '#fff'
  },

  //carousel
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
});

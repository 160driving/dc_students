import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

//import { GREY_TEXT, BLUE } from '_constants/colors';
const { height, width } = Dimensions.get('window');

const cardWidth = width;
const cardHeight = 140;
const cardRadius = 40;
export const jobRequestCardShadow = {
  width: cardWidth,
  height: cardHeight,
  style: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inset: true,
  border: 5,
  color: '#000',
  backgroundColor: 'white',
  alignSelf: 'center',
  radius: cardRadius,
  x: 0,
  y: 5,
  opacity: 0.06
};

const button = {
  flex: 1,
  height: 42,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 24
};

export default StyleSheet.create({
  jobRequestContainer: {
    width: cardWidth,
    height: cardHeight,
    position: 'absolute'
  },
  jobRequestModal: {
    width: cardWidth,
    height: cardHeight,
    margin: 0,
    justifyContent: 'flex-start'
  },
  jobRequestCard: {
    width: cardWidth,
    height: cardHeight,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 24
  },
  jobRequestTitle: {
    color: '#54B7FC',
    fontSize: RFValue(14),
    marginBottom: 7
  },
  jobRequestSubTitle: {
    color: '#A3A3A3',
    fontSize: RFValue(14),
    marginBottom: 14
  },
  jobRequestButtons: {
    width: '100%',
    flexDirection: 'row'
  },
  jobRequestAccept: {
    ...button,
    backgroundColor: '#62C437'
  },
  jobRequestDecline: {
    ...button,
    marginHorizontal: 13,
    backgroundColor: '#F26523'
  },
  jobRequestInfo: {
    ...button,
    borderWidth: 2,
    borderColor: '#54B7FC'
  },
  jobRequestButtonText: {
    fontSize: RFValue(13),
    color: '#fff'
  },
  jobRequestInfoText: {
    fontSize: RFValue(13),
    color: '#54B7FC'
  }
});

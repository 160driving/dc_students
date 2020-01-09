import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

//import { GREY_TEXT, BLUE } from '_constants/colors';
const { height, width } = Dimensions.get('window');

const cardWidth = width - 50;
const cardHeight = height * 0.55;
const cardRadius = 37;

export default StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: cardRadius,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  firstBackCard: {
    transform: [{ rotate: '12deg' }],
    position: 'absolute'
  },
  secondBackCard: {
    transform: [{ rotate: '24deg' }],
    position: 'absolute'
  },
  cardContainer: {
    width: cardWidth - 5,
    height: cardHeight - 5,
    paddingHorizontal: 15,
    borderRadius: cardRadius,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    color: '#F26524',
    fontSize: RFValue(16),
    marginTop: 0
  },
  cityText: {
    color: 'rgba(116, 116, 116, 0.56)',
    marginBottom: 10,
    fontSize: RFValue(14)
  },
  cardText: {
    color: '#747474',
    marginBottom: 5,
    fontSize: RFValue(14)
  },

  listContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  listText: {
    fontSize: RFValue(14),
    color: '#676767'
  },
  listDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: '#F26523'
  },
  moreInfoButton: {
    position: 'absolute',
    bottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  moreInfoText: {
    color: '#F26523',
    fontSize: RFValue(14)
  }
});

export const cardShadow = {
  width: cardWidth,
  height: cardHeight,
  style: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inset: true,
  border: 10,
  color: '#000',
  backgroundColor: 'white',
  alignSelf: 'center',
  radius: 37,
  x: 0,
  y: 0,
  opacity: 0.06
};

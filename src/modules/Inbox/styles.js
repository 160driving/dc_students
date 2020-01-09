import { GREY_TEXT } from '_constants/colors';

const totalHoursStyle = {
  fontSize: 20,
  color: GREY_TEXT
};

const container = {
  flex: 1,
  paddingHorizontal: 20
};

const listContainer = {
  paddingBottom: 20
};

const cardStyle = {
  width: '100%',
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(112, 112, 112, 0.22)',
  marginTop: 30,
  paddingBottom: 20
};

const cardContainer = {
  flex: 1,
  flexDirection: 'row'
};

const disabledCard = {
  opacity: 0.63
};

const cardImageContainer = {
  justifyContent: 'center',
  width: 60
};

const emailIcon = {
  width: 24,
  height: 22,
  resizeMode: 'contain'
};

const portfolioIcon = {
  width: 24,
  height: 19,
  resizeMode: 'contain'
};

const envelopeIcon = {
  width: 24,
  height: 19,
  resizeMode: 'contain'
};

const cardTitle = {
  fontSize: 16,
  color: GREY_TEXT
};

const cardSubTitle = {
  fontSize: 15,
  color: GREY_TEXT
};

const cardTimeText = {
  fontSize: 14,
  color: GREY_TEXT,
  alignSelf: 'flex-end'
};

const subContainer = {
  marginTop: 5
};

export {
  container,
  listContainer,
  cardStyle,
  cardContainer,
  disabledCard,
  totalHoursStyle,
  cardImageContainer,
  emailIcon,
  portfolioIcon,
  envelopeIcon,
  cardTitle,
  cardSubTitle,
  cardTimeText,
  subContainer
};

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import { HomeIcon, JobsIcon, ChatIcon } from '_assets/img';
// import { BLUE } from '_constants/colors';

import {
  SplashScreen,
  Login,
  Profile,
  Dashboard,
  Test,
  Result,
  Category,
  QrCodeScanner,
  CategoryDetail,
  Settings,
  ChangePassword
  // Inbox,
  // Chat,
  // JobOffer
} from '../modules';

import // Welcome,
// CardExplanation,
// InboxInfo,
// Registration
// Swiper,
// JobDetails
'../modules/Jobs';

const LoginStack = createStackNavigator(
  {
    Login,
    QrCodeScanner
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const Home = createStackNavigator(
  {
    Dashboard,
    Category,
    CategoryDetail,
    Test,
    Result,
    Settings,
    ChangePassword
  },
  {
    headerMode: 'none'
  }
);

// const Jobs = createStackNavigator(
//   {
//     Registration,
//     Welcome,
//     CardExplanation,
//     InboxInfo,
//     Swiper,
//     JobDetails
//   },
//   {
//     headerMode: 'none'
//   }
// );

// const ChatStack = createStackNavigator(
//   {
//     Inbox,
//     Chat,
//     JobOffer
//   },
//   {
//     headerMode: 'none'
//   }
// );

// const TabNav = createBottomTabNavigator(
//   {
//     Home,
//     Jobs,
//     Chat: ChatStack
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ tintColor, focused }) => {
//         const { routeName } = navigation.state;
//         switch (routeName) {
//           case 'Home':
//             return (
//               <HomeIcon
//                 width={20}
//                 height={20}
//                 fill={focused ? BLUE : '#A0A0A0'}
//               />
//             );
//           case 'Jobs':
//             return (
//               <JobsIcon
//                 width={25}
//                 height={25}
//                 fill={focused ? BLUE : '#A0A0A0'}
//               />
//             );
//           case 'Chat':
//             return (
//               <ChatIcon
//                 width={20}
//                 height={20}
//                 fill={focused ? BLUE : '#A0A0A0'}
//               />
//             );
//           default:
//             break;
//         }
//       }
//       // tabBarOnPress: ({ defaultHandler }) => {
//       //   const firstLevelState = navigation.state;

//       //   if (firstLevelState.index !== 0) {
//       //   } else {
//       //     defaultHandler();
//       //   }
//       // }
//     })
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: '#FF6F00',
//       inactiveTintColor: '#263238'
//     }
//   }
// );

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      LoginStack,
      SplashScreen,
      Profile,
      Home
      // TabNav,
      // Jobs
    },
    {
      initialRouteName: 'SplashScreen'
    }
  )
);

export default AppContainer;

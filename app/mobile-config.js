// Set up app metadata
App.info({
  id: 'de.yauh.reactivehball',
  version: '0.0.1',
  name: 'ReactiveHBall',
  description: 'This is a mobile app for Meteor in Action',
  author: 'Stephan Hochhaus',
  email: 'stephan@yauh.com',
  website: 'http://yauh.de/building-mobile-apps-with-meteor-the-reactive-h-ball/'
});

// Set up icons
App.icons({
  // iOS
  'iphone': 'mobile-resources/ios/icon/Icon-60.png',
  'iphone_2x': 'mobile-resources/ios/icon/Icon-60@2x.png',
  'iphone_3x': 'mobile-resources/ios/icon/Icon-60@3x.png',
  'ipad': 'mobile-resources/ios/icon/Icon-72.png',
  'ipad_2x': 'mobile-resources/ios/icon/Icon-72@2x.png',

  // Android
  'android_ldpi': 'mobile-resources/android/icon/drawable-ldpi-icon.png',
  'android_mdpi': 'mobile-resources/android/icon/drawable-mdpi-icon.png',
  'android_hdpi': 'mobile-resources/android/icon/drawable-hdpi-icon.png',
  'android_xhdpi': 'mobile-resources/android/icon/drawable-xhdpi-icon.png'
});

// Set up launch screens
App.launchScreens({
  // iOS
  'iphone': 'mobile-resources/ios/splash/Default~iphone.png',
  'iphone_2x': 'mobile-resources/ios/splash/Default@2x~iphone.png',
  'iphone5': 'mobile-resources/ios/splash/Default-568h@2x~iphone.png',
  'iphone6': 'mobile-resources/ios/splash/Default-667h.png',
  'iphone6p_portrait': 'mobile-resources/ios/splash/Default-736h.png',
  'iphone6p_landscape': 'mobile-resources/ios/splash/Default-Landscape-736h.png',
  'ipad_portrait': 'mobile-resources/ios/splash/Default-Portrait~ipad.png',
  'ipad_portrait_2x': 'mobile-resources/ios/splash/Default-Portrait@2x~ipad.png',
  'ipad_landscape': 'mobile-resources/ios/splash/Default-Landscape~ipad.png',
  'ipad_landscape_2x': 'mobile-resources/ios/splash/Default-Landscape@2x~ipad.png',

  // Android
  'android_ldpi_portrait': 'mobile-resources/android/splash/drawable-port-ldpi-screen.png',
  'android_ldpi_landscape': 'mobile-resources/android/splash/drawable-land-ldpi-screen.png',
  'android_mdpi_portrait': 'mobile-resources/android/splash/drawable-port-mdpi-screen.png',
  'android_mdpi_landscape': 'mobile-resources/android/splash/drawable-land-mdpi-screen.png',
  'android_hdpi_portrait': 'mobile-resources/android/splash/drawable-port-hdpi-screen.png',
  'android_hdpi_landscape': 'mobile-resources/android/splash/drawable-land-hdpi-screen.png',
  'android_xhdpi_portrait': 'mobile-resources/android/splash/drawable-port-xhdpi-screen.png',
  'android_xhdpi_landscape': 'mobile-resources/android/splash/drawable-land-xhdpi-screen.png'
});

// Whitelisting URLs
App.accessRule('http://192.168.2.123:3000/*');
App.accessRule('http://hball.yauh.de/*');
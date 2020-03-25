import {AppRegistry} from 'react-native';
import createAppContainer  from './src/components/common/bottomTabs';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer );

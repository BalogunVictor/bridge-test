import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import QueryClientProviderWrapper from './src/providers/queryclient';

const Main = () => (
  <NavigationContainer>
    <QueryClientProviderWrapper>
    <App />
    </QueryClientProviderWrapper>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Main);

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure({ name: 'React Native Movies app' })
  .use(reactotronRedux()) 
  .connect()
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

const TestService = {
  getTestData: async () => {
    const config = await AsyncStorage.getItem('Config');
    const data = await JSON.parse(config);
    console.log(data.password);
    // const data = JSON.parse(config);
    // console.log(JSON.stringify(data, null, 4));
  },
};

export default TestService;

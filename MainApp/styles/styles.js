import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff54f',
    flexDirection: 'column',
    alignItems: 'center', // Vertical
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'normal',
    margin: 10,
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
    width: 200,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ff00',
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff1323',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warning_footer: {
    height: 50,
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

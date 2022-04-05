/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {locale} from '../../lang/locale';
import {centerElement, pageContainer, whiteColor} from '../../utils/Styles';

function Signin({navigation}: any) {
  return (
    <View style={[pageContainer, styles.signContainer]}>
      <Text style={styles.title}>{locale.lang.SignIn.title}</Text>
      <Text style={styles.desc}>{locale.lang.SignIn.description}</Text>

      <View style={[centerElement]}>
        <TouchableOpacity
          style={[centerElement, styles.button]}
          onPress={() => navigation.navigate('Repository')}>
          <Text style={[whiteColor, styles.buttonTitle]}>
            {locale.lang.SignIn.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#bb2d3b',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  desc: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    marginTop: '10%',
    backgroundColor: '#bb2d3b',
    paddingVertical: 18,
    paddingHorizontal: 150,
    width: '100%',
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default Signin;

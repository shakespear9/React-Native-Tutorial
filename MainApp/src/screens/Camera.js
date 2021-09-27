import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import LeenButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + 'TestPic.jng';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log(`IMAGE MOVE ${filePath} --- to --- ${newFilePath}`);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <LeenButton
          title="Capture"
          color="#1eb900"
          onPressFunction={captureHandle}
        />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center', //Horizontal
    justifyContent: 'flex-end', //Vertical
  },
});

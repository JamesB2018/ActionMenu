import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

export default class App extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    //Options to show in bottom action sheet.
    const optionArray = [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
      'Cancel',
    ];
    return (
      <View style={styles.container}>
        <Button
          onPress={this.showActionSheet}
          title="Open Button ActionSheet"
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          //Title of the Bottom Sheet
          title={'Which one do you like most ?'}
          //Options Array to show in bottom sheet
          options={optionArray}
          //Define cancel button index in the option array
          //this will take the cancel option in bottom and will highlight it
          cancelButtonIndex={4}
          //If you want to highlight any specific option you can use below prop
          destructiveButtonIndex={1}
          onPress={index => {
            //Clicking on the option will give you the index of the option clicked
            alert(optionArray[index]);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

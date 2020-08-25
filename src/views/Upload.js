import * as React from 'react';
import { Button, Image, View, Dimensions,Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class UploadScreen extends React.Component {
  state = {
    image: null,
    name : null,
    detail : null
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1}}>
       <Container>
       <Content>
          <Item regular >
            <Input placeholder='Nama' onChangeText={(text) => {this.setState({name : text})}}/>
          </Item>
          <Item regular >
            <Input placeholder='Detail' onChangeText={(text) => {this.setState({detail : text})}}/>
          </Item>
          <Button title="Image" onPress={this._pickImage} />
              {image && <Image source={{ uri: image }} style={{ width: Dimensions.get('window').width, height: 200 }} />}

          <Button title="Upload" onPress={this._Store} />
        </Content>
      </Container>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  _Store = async () => {
    let localuri= this.state.image;
    let fileType = localuri.substring(localuri.lastIndexOf(".") + 1);
    let type= 'image/'+fileType;
    let filename = localuri.split('/').pop();

    let formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('detail', this.state.detail);    
    formData.append('image', {uri:localuri,type:type,name:filename});

    console.log(formData);
    console.log(fileType);
    Alert.alert(filename);
    await fetch('http://192.168.1.12:8000/api/v1/Document/store', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => response.json)
    .then(Alert.alert('berhasil'))
    .catch((error) => {
      console.error(error);
    })
  }
}
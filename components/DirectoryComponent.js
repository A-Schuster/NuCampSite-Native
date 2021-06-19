import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites'




class Directory extends Component {
  constructor(props){
    super(props)
    this.state={
      campsites: CAMPSITES
    }
  }

  static navigationOptions = {
    title: 'Directory'
  };


  renderDirectoryItem = ({item}) => {
    const { navigate } = this.props.navigation;
    return (
        <ListItem
            title={item.name}
            subtitle={item.description}
            onPress={() => navigate('CampsiteInfo', {campsiteId: item.id})}
            leftAvatar={{ source: require('./images/react-lake.jpg')}}
        />
    );
  };
  render(){
    return (
        <FlatList
            data={this.state.campsites}
            renderItem={this.renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
}

export default Directory;
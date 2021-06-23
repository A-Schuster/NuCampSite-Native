import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from "react-redux"
import { baseUrl} from '../shared/baseUrl'

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  }
}



class Directory extends Component {

  static navigationOptions = {
    title: 'Directory'
  };


  renderDirectoryItem = ({item}) => {
    const { navigate } = this.props.navigation;
    return (
        <Tile
            title={item.name}
            caption={item.description}
            featured
            onPress={() => navigate('CampsiteInfo', {campsiteId: item.id})}
            imageSrc={{uri: baseUrl + item.image}}
        />
    );
  };
  render(){
    return (
        <FlatList
            data={this.props.campsites.campsites}
            renderItem={this.renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
}

export default connect(mapStateToProps)(Directory);
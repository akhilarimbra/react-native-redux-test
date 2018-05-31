import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'

import {
  CardSection
} from './widgets'
import * as actions from '../actions'

class ListItem extends Component {
  render() {
    const { library: { id, title, description }, selectLibrary } = this.props
    const { titleStyle } = styles

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(null, actions)(ListItem)

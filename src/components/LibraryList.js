import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'

import {
  Card,
  CardSection
} from './widgets'

class LibraryList extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)

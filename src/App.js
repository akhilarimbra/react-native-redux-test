import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import LibraryList from './components/LibraryList'
import {
  Header
} from './components/widgets'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title='#tech_stack' />
          <LibraryList />
        </View>
      </Provider>
    )
  }
}

export default App

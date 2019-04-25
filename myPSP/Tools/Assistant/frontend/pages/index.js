import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import TaskList from '../components/TaskList'
import appState from '../states/Reducers'

const Index = props => (
  <Provider store={createStore(appState)}>
    <Layout>
      <TaskList />
    </Layout>
  </Provider>
)

export default Index

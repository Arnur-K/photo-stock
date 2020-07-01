import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'
import SearchHistory from './components/SearchHistory/SearchHistory'
import Favorites from './components/Favorites/Favorites'

export default () => {
  return (
    <Switch>
      <Layout>
        <Route path='/' exact component={Main} />
        <Route path='/search-history' component={SearchHistory} />
        <Route path='/favorites' component={Favorites} />
      </Layout>
    </Switch>
  )
}
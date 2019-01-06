import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 0, active: true, name: 'Stock Archive', color: 'blue'},
    {key: 0, active: false, name: 'Made for Hackerearth Brainwaves 2019 with Django, React and Semantic UI.'}
]

const TopMenu = () => <Menu items={items} />

export default TopMenu
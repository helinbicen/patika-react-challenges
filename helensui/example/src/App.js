import React from 'react'

import { ExampleComponent, Button } from 'helensui'
import 'helensui/dist/index.css'

const App = () => {
  return (
  <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <Button type="primary" text="primary"/>
    <Button type="default" text="default"/>
    <Button type="dashed" text="dashed"/>
    <Button type="primary" text="text"/>
    <Button type="link" text="link"/>

    </div> )
}

export default App

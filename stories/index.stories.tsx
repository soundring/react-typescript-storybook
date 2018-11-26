import { storiesOf } from '@storybook/react'
import  {Button}  from '@material-ui/core'
import * as React from 'react'

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button type="primary">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
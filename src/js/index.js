import P5 from 'p5'

import '../css/index.scss'

const sketch = p => {
  p.setup = () => {
  }

  p.draw = () => {
    p.ellipse(50, 50, 80, 80)
  }
}

new P5(sketch) // eslint-disable-line

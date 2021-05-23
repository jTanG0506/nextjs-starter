import renderer from 'react-test-renderer'
import Home from '@/pages/index'

describe('Home', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import { isOlder, findById } from './helpers'

describe('Test HOF', () => {
  test('isOlder Function', () => {
    const person = { name: 'Wes', year: 1988 }
    expect(isOlder(19)(person.year)).toBeTruthy()
  })

  test('findById Function', () => {
    const post = { text: 'Love this!', id: 523423 }
    expect(findById(523423)(post.id)).toBeTruthy()
  })
})

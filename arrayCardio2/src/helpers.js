export const sum = (a, b) => a + b

export const isOlder = limitAge => birthYear =>
  new Date().getFullYear() - birthYear >= limitAge

export const findById = _id => id => _id === id

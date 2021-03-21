import _ from 'lodash'
export default function(keys, values) {
  if (!keys || !_.isArray(keys)) {
    throw new Error('keys muset be Array')
  }
  if (!values || !_.isObject(values)) {
    throw new Error('keys muset be Array')
  }
  const res = {}
  keys.forEach(ele => {
    res[ele] = values[ele] ? new Date(values[ele]).getTime() : ''
  })
  console.log(res)
  return res
}

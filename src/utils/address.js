import _ from 'lodash'
import city from '@/config/city'
export function matchAddress(keys) {
  if (!keys || !_.isArray(keys)) {
    throw new Error('keys muset be Array')
  }
  const province = city.find(ele => ele.value === keys[0])
  const town = province.children && province.children.find(ele => ele.value === keys[1])
  const district = town.children && town.children.find(ele => ele.value === keys[2])
  return [
    { code: keys[0], desc: province.label },
    { code: keys[1], desc: town.label },
    { code: keys[2], desc: district.label }
  ]
}

export const isIdCard = value => {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
}
export const isEmail = value => {
  return /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(value)
}
export const isCH = value => {
  return /[^\u4e00-\u9fa5]/.test(value)
}
export const isPhone = value => {
  return /^1[0-9]{10}$/.test(value)
}
export const sUrl = value => {
  return /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/.test(value)
}
export const isNumber = value => {
  return /^\d+(\.\d+)?$/.test(value)
}
export const isAndroid = () => {
  const u = navigator.userAgent.toLowerCase()
  return /android/.test(u) || /linux/.test(u)
}
export const isIOS = () => {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
}
export const isSpecialCharacter = value => {
  return /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/.test(value)
}
export const isMoney = value => {
  return /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(value)
}
export const isPassword = value => {
  return /^[0-9a-z]{6,12}$/gi.test(value)
}
export const isLoginName = value => {
  return /^[0-9a-z]+$/gi.test(value)
}
export const isChinese = value => {
  return /^[0-9\u4e00-\u9fa5]+$/gi.test(value)
}

import { lowerCase, startCase } from 'lodash'

export const startCapital = text => startCase(lowerCase(text))

export const formatDate = (date, seperator = '/') => {
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${twoDigit(day)}${seperator}${twoDigit(month + 1)}${seperator}${year}`
}

export function twoDigit(num) {
  return (num < 10) ? `0${num}` : num
}

export const formatCountdown = (remains) => {
  const hours = getHours(remains)
  const formatedHr = hours > 0 ? `${twoDigit(hours)} : ` : ''
  const mins = getMins(remains)
  const formatedMin = (mins > 0 || hours > 0) ? `${twoDigit(mins)} : ` : ''
  const secs = getSecs(remains)

  return remains > 0 ? `${formatedHr} ${formatedMin} ${secs}` : 'Expired'
}

export const getHours = (remains) => {
  const hours = (Math.floor((Math.floor(remains / 60)) / 60) % 24)
  return hours
}

export const getMins = (remains) => {
  const mins = (Math.floor(remains / 60)) % 60
  return mins
}

export const getSecs = (remains) => {
  const secs = Math.floor(remains % 60)
  return secs
}

export * from './customHooks'

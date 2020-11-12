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

export const getHours = (remains) => {
  const hours = (Math.floor((Math.floor(remains / 60)) / 60) % 24)
  return hours
}

export const getMins = (remains) => {
  const mins = (Math.floor(remains / 60)) % 60
  return mins
}

export const getSecs = (remains) => {
  const secs = `${twoDigit(Math.floor(remains % 60))} sec`
  return secs
}

export * from './customHooks'

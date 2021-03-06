import { lowerCase, startCase } from 'lodash'
import moment from 'moment'
import timezone from 'moment-timezone'

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

export const formatTime = (now, zone, int = false) => {
  const time = moment.unix(now).utc()
  const offset = zone && timezone.tz.zone(zone).parse(time) * -1
  return offset
    ? time.utcOffset(offset).format(int ? 'HH : mm : ss' : 'hh : mm : ss a')
    : time.format(int ? 'HH : mm : ss' : 'hh : mm : ss a')
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

import { MantineColorsTuple, createTheme } from '@mantine/core'

const fontainianGold: MantineColorsTuple = [
  '#fff6e2',
  '#ffedce',
  '#fbda9f',
  '#f8c66b',
  '#f6b541',
  '#f5aa25',
  '#f4a414',
  '#d98f05',
  '#c17f00',
  '#a86c00',
]

const midnightIndigo: MantineColorsTuple = [
  '#fff5e3',
  '#fdead0',
  '#f7d3a4',
  '#f1ba73',
  '#eca64a',
  '#e99830',
  '#e89220',
  '#ce7e12',
  '#b86f0b',
  '#a05f00',
]

const celestialAzure: MantineColorsTuple = [
  '#e6f2ff',
  '#cee0ff',
  '#9bbeff',
  '#6499ff',
  '#387bfe',
  '#1d67fe',
  '#095eff',
  '#004ee4',
  '#0045cc',
  '#003ab5',
]

const shadowedCharcoal: MantineColorsTuple = [
  '#e9e9ea',
  '#d4d4d4',
  '#bebebf',
  '#a8a8aa',
  '#939395',
  '#7d7d7f',
  '#67676a',
  '#515155',
  '#3c3c3f',
  '#26262a',
]

export const colors = {
  ['fontainian-gold']: fontainianGold,
  ['midnight-indigo']: midnightIndigo,
  ['celestial-azure']: celestialAzure,
  ['shadowed-charcoal']: shadowedCharcoal,
}

export const themeColor = createTheme({
  primaryColor: 'fontainian-gold',
  colors,
})

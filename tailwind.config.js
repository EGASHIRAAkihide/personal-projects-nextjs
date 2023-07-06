/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      't-body': {
        light: '#1A1A1C',
        DEFAULT: '#1A1A1C',
        dark: '#FFFFFF',
      },
      't-description': {
        light: '#626264',
        DEFAULT: '#626264',
        dark: '#B4B4B7',
      },
      't-place-holder': {
        light: '#757578',
        DEFAULT: '#757578',
        dark: '#949497',
      },
      't-on-fill': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#FFFFFF',
      },
      't-link': {
        light: '#0017C1',
        DEFAULT: '#0017C1',
        dark: '#7096F8',
      },
      't-hover': {
        light: '#000082',
        DEFAULT: '#000082',
        dark: '#9DB7F9',
      },
      't-active': {
        light: '#000082',
        DEFAULT: '#000082',
        dark: '#9DB7F9',
      },
      't-visited': {
        light: '#000082',
        DEFAULT: '#000082',
        dark: '#9DB7F9',
      },
      't-alert': {
        light: '#EC0000',
        DEFAULT: '#EC0000',
        dark: '#FF4B36',
      },
      't-disabled': {
        light: '#949497',
        DEFAULT: '#949497',
        dark: '#757578',
      },
      'icon-label': {
        light: '#1A1A1C',
        DEFAULT: '#1A1A1C',
        dark: '#FFFFFF',
      },
      'icon-active': {
        light: '#0017C1',
        DEFAULT: '#0017C1',
        dark: '#7096F8',
      },
      'icon-alert': {
        light: '#EC0000',
        DEFAULT: '#EC0000',
        dark: '#FF4B36',
      },
      'icon-disabled': {
        light: '#949497',
        DEFAULT: '#949497',
        dark: '#757578',
      },
      'btn-normal': {
        light: '#0017C1',
        DEFAULT: '#0017C1',
        dark: '#7096F8',
      },
      'btn-hover': {
        light: '#000082',
        DEFAULT: '#000082',
        dark: '#4979F5',
      },
      'btn-active': {
        light: '#000082',
        DEFAULT: '#000082',
        dark: '#4979F5',
      },
      'btn-disabled': {
        light: '#949497',
        DEFAULT: '#949497',
        dark: '#949497',
      },
      'bg-primary': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#1A1A1C',
      },
      'bg-secondary': {
        light: '#F1F1F4',
        DEFAULT: '#F1F1F4',
        dark: '#626264',
      },
      'bg-tertiary': {
        light: '#F8F8FB',
        DEFAULT: '#F8F8FB',
        dark: '#414143',
      },
      'bd-field': {
        light: '#1A1A1C',
        DEFAULT: '#1A1A1C',
        dark: '#FFFFFF',
      },
      'bd-divider': {
        light: '#D8D8DB',
        DEFAULT: '#D8D8DB',
        dark: '#626264',
      },
      'bd-focused': {
        light: '#D18D0F',
        DEFAULT: '#D18D0F',
        dark: '#D18D0F',
      },
      'bd-selected': {
        light: '#0017C1',
        DEFAULT: '#0017C1',
        dark: '#7096F8',
      },
      'bd-alert': {
        light: '#EC0000',
        DEFAULT: '#EC0000',
        dark: '#FF4B36',
      },
      'bd-disabled': {
        light: '#949497',
        DEFAULT: '#949497',
        dark: '#949497',
      },
      'status-success': {
        light: '#259D63',
        DEFAULT: '#259D63',
        dark: '#259D63',
      },
      'status-warning': {
        light: '#C16800',
        DEFAULT: '#C16800',
        dark: '#D18D0F',
      },
      'status-alert': {
        light: '#EC0000',
        DEFAULT: '#EC0000',
        dark: '#FF4B36',
      },
      'chart-primary': {
        light: '#0017C1',
        DEFAULT: '#0017C1',
        dark: '#C5D7FB',
      },
      'chart-secondary': {
        light: '#4979F5',
        DEFAULT: '#4979F5',
        dark: '#9DB7F9',
      },
      'semantic': {
        light: '#1A1A1C',
        DEFAULT: '#1A1A1C',
        dark: '#FFFFFF',
      },
    }
  },
  plugins: [],
}

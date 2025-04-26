import localFont from 'next/font/local';

export const MiSans = localFont({
  src: [
    {
      path: '../public/fonts/MiSans-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/MiSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  fallback: [
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  ],
  variable: '--font-misans'
});

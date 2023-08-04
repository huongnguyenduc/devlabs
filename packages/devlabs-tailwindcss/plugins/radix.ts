import { hexToHsl } from '@devlabs/utils/src/color';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import perspective from './perspective';

export default plugin(
  ({ addBase }) => {
    addBase({
      ':root': {
        '--background': hexToHsl(colors.white),
        '--foreground': hexToHsl(colors.neutral[900]),
        '--muted': hexToHsl(colors.neutral[100]),
        '--muted-foreground': hexToHsl(colors.neutral[500]),
        '--popover': hexToHsl(colors.white),
        '--popover-foreground': hexToHsl(colors.neutral[900]),
        '--card': hexToHsl(colors.white),
        '--card-foreground': hexToHsl(colors.neutral[900]),
        '--border': hexToHsl(colors.neutral[200]),
        '--input': hexToHsl(colors.neutral[300]),
        '--primary': hexToHsl(colors.neutral[900]),
        '--primary-foreground': hexToHsl(colors.neutral[50]),
        '--secondary': hexToHsl(colors.neutral[100]),
        '--secondary-foreground': hexToHsl(colors.neutral[900]),
        '--accent': hexToHsl(colors.neutral[100]),
        '--accent-foreground': hexToHsl(colors.neutral[900]),
        '--destructive': hexToHsl(colors.red[500]),
        '--destructive-foreground': hexToHsl(colors.red[50]),
        '--ring': hexToHsl(colors.neutral[200]),
      },
      '.dark': {
        '--background': hexToHsl(colors.black),
        '--foreground': hexToHsl(colors.neutral[100]),
        '--muted': hexToHsl(colors.neutral[900]),
        '--muted-foreground': hexToHsl(colors.neutral[500]),
        '--popover': hexToHsl(colors.black),
        '--popover-foreground': hexToHsl(colors.neutral[100]),
        '--card': hexToHsl(colors.black),
        '--card-foreground': hexToHsl(colors.neutral[100]),
        '--border': hexToHsl(colors.neutral[800]),
        '--input': hexToHsl(colors.neutral[700]),
        '--primary': hexToHsl(colors.neutral[100]),
        '--primary-foreground': hexToHsl(colors.neutral[950]),
        '--secondary': hexToHsl(colors.neutral[900]),
        '--secondary-foreground': hexToHsl(colors.neutral[100]),
        '--accent': hexToHsl(colors.neutral[900]),
        '--accent-foreground': hexToHsl(colors.neutral[100]),
        '--destructive': hexToHsl(colors.red[500]),
        '--destructive-foreground': hexToHsl(colors.red[950]),
        '--ring': hexToHsl(colors.neutral[800]),
      },
    });
    addBase({
      body: {
        '@apply bg-background text-foreground': {},
      },
    });
    addBase({
      'html, body, :root': {
        '@apply h-full': {},
      },
    });
  },
  {
    theme: {
      extend: {
        animation: {
          'collapsible-down':
            'collapsible-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
          'collapsible-up':
            'collapsible-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
          'overlay-show':
            'overlay-show 300ms cubic-bezier(0.645, 0.045, 0.355, 1)',
          'overlay-hide':
            'overlay-hide 300ms cubic-bezier(0.645, 0.045, 0.355, 1)',
          'content-show': 'content-show 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          'content-hide': 'content-hide 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          'drawer-show-from-left':
            'drawer-show-from-left 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          'drawer-hide-to-left':
            'drawer-hide-to-left 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          'drawer-show-from-right':
            'drawer-show-from-right 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          'drawer-hide-to-right':
            'drawer-hide-to-right 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          'slide-in-from-top':
            'slide-in-from-top 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-in-from-right':
            'slide-in-from-right 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-in-from-bottom':
            'slide-in-from-bottom 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-in-from-left':
            'slide-in-from-left 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-out-to-top':
            'slide-out-to-top 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-out-to-right':
            'slide-out-to-right 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-out-to-bottom':
            'slide-out-to-bottom 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'slide-out-to-left':
            'slide-out-to-left 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          'enter-from-right': 'enter-from-right 300ms ease',
          'enter-from-left': 'enter-from-left 300ms ease',
          'exit-to-right': 'exit-to-right 300ms ease',
          'exit-to-left': 'exit-to-left 300ms ease',
          'scale-in': 'scale-in 200ms ease',
          'scale-out': 'scale-out 200ms ease',
          'fade-in': 'fade-in 200ms ease',
          'fade-out': 'fade-out 200ms ease',
          'slide-in-right':
            'slide-in-right 300ms cubic-bezier(0.21, 1.02, 0.73,1)',
          'slide-out-right':
            'slide-out-right 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'slide-in-left':
            'slide-in-left 300ms cubic-bezier(0.21, 1.02, 0.73,1)',
          'slide-out-left':
            'slide-out-left 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'slide-in-up': 'slide-in-up 300ms cubic-bezier(0.21, 1.02, 0.73,1)',
          'slide-out-up':
            'slide-out-up 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'slide-in-down':
            'slide-in-down 300ms cubic-bezier(0.21, 1.02, 0.73,1)',
          'slide-out-down':
            'slide-out-down 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'swipe-out-right':
            'swipe-out-right 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'swipe-out-left':
            'swipe-out-left 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'swipe-out-up':
            'swipe-out-up 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
          'swipe-out-down':
            'swipe-out-down 300ms cubic-bezier(0.06, 0.71, 0.55, 1)',
        },
        borderColor: {
          DEFAULT: 'hsl(var(--border))',
        },
        borderRadius: {
          inherit: 'inherit',
        },
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        data: {
          'state-open': 'state="open"',
          'state-closed': 'state="closed"',
          'motion-to-start': 'motion="to-start"',
          'motion-to-end': 'motion="to-end"',
          'motion-from-start': 'motion="from-start"',
          'motion-from-end': 'motion="from-end"',
          'state-on': 'state="on"',
          'state-off': 'state="off"',
          'state-visible': 'state="visible"',
          'state-hidden': 'state="hidden"',
          'state-selected': 'state="selected"',
          'state-checked': 'state="checked"',
          'state-unchecked': 'state="unchecked"',
          'state-indeterminate': 'state="indeterminate"',
          'state-delayed-open': 'state="delayed-open"',
          'state-active': 'state="active"',
          'state-inactive': 'state="inactive"',
          'side-top': 'side="top"',
          'side-right': 'side="right"',
          'side-bottom': 'side="bottom"',
          'side-left': 'side="left"',
          'align-start': 'align="start"',
          'align-end': 'align="end"',
          'align-center': 'align="center"',
          'swipe-start': 'swipe="start"',
          'swipe-move': 'swipe="move"',
          'swipe-cancel': 'swipe="cancel"',
          'swipe-end': 'swipe="end"',
          'swipe-direction-up': 'swipe-direction="up"',
          'swipe-direction-down': 'swipe-direction="down"',
          'swipe-direction-left': 'swipe-direction="left"',
          'swipe-direction-right': 'swipe-direction="right"',
          'orientation-vertical': 'orientation="vertical"',
          'orientation-horizontal': 'orientation="horizontal"',
          valid: 'valid="true"',
          invalid: 'invalid="true"',
          disabled: 'disabled',
          selected: 'selected',
          highlighted: 'highlighted',
          placeholder: 'placeholder',
        },
        keyframes: {
          'collapsible-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-collapsible-content-height)' },
          },
          'collapsible-up': {
            from: { height: 'var(--radix-collapsible-content-height)' },
            to: { height: '0' },
          },
          'overlay-show': {
            from: { opacity: '0' },
            to: { opacity: '1' },
          },
          'overlay-hide': {
            from: { opacity: '1' },
            to: { opacity: '0' },
          },
          'content-show': {
            from: { transform: 'translateY(-40px)', opacity: '0' },
            to: { transform: 'translateY(0)', opacity: '1' },
          },
          'content-hide': {
            from: { transform: 'translateY(0)', opacity: '1' },
            to: { transform: 'translateY(-40px)', opacity: '0' },
          },
          'drawer-show-from-left': {
            from: { transform: 'translateX(-100%)', opacity: '0' },
            to: { transform: 'translateX(0)', opacity: '1' },
          },
          'drawer-hide-to-left': {
            from: { transform: 'translateX(0)', opacity: '1' },
            to: { transform: 'translateX(-100%)', opacity: '0' },
          },
          'drawer-show-from-right': {
            from: { transform: 'translateX(100%)', opacity: '0' },
            to: { transform: 'translateX(0)', opacity: '1' },
          },
          'drawer-hide-to-right': {
            from: { transform: 'translateX(0)', opacity: '1' },
            to: { transform: 'translateX(100%)', opacity: '0' },
          },
          'slide-in-from-top': {
            from: { transform: 'translateY(0.5rem)', opacity: '0' },
            to: { transform: 'translateY(0)', opacity: '1' },
          },
          'slide-in-from-right': {
            from: { transform: 'translateX(-0.5rem)', opacity: '0' },
            to: { transform: 'translateY(0)', opacity: '1' },
          },
          'slide-in-from-bottom': {
            from: { transform: 'translateY(-0.5rem)', opacity: '0' },
            to: { transform: 'translateY(0)', opacity: '1' },
          },
          'slide-in-from-left': {
            from: { transform: 'translateX(0.5rem)', opacity: '0' },
            to: { transform: 'translateX(0)', opacity: '1' },
          },
          'slide-out-to-top': {
            from: { transform: 'translateY(0)', opacity: '1' },
            to: { transform: 'translateY(0.5rem)', opacity: '0' },
          },
          'slide-out-to-right': {
            from: { transform: 'translateX(0)', opacity: '1' },
            to: { transform: 'translateX(-0.5rem)', opacity: '0' },
          },
          'slide-out-to-bottom': {
            from: { transform: 'translateY(0)', opacity: '1' },
            to: { transform: 'translateY(-0.5rem)', opacity: '0' },
          },
          'slide-out-to-left': {
            from: { transform: 'translateX(0)', opacity: '1' },
            to: { transform: 'translateX(0.5rem)', opacity: '0' },
          },
          'enter-from-right': {
            from: { transform: 'translateX(200px)', opacity: '0' },
            to: { transform: 'translateX(0)', opacity: '1' },
          },
          'enter-from-left': {
            from: { transform: 'translateX(-200px)', opacity: '0' },
            to: { transform: 'translateX(0)', opacity: '1' },
          },
          'exit-to-right': {
            from: { transform: 'translateX(0)', opacity: '1' },
            to: { transform: 'translateX(200px)', opacity: '0' },
          },
          'exit-to-left': {
            from: { transform: 'translateX(0)', opacity: '1' },
            to: { transform: 'translateX(-200px)', opacity: '0' },
          },
          'scale-in': {
            from: { transform: 'rotateX(-10deg) scale(0.9)', opacity: '0' },
            to: { transform: 'rotateX(0deg)', opacity: '1' },
          },
          'scale-out': {
            from: { transform: 'rotateX(0deg)', opacity: '1' },
            to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: '0' },
          },
          'fade-in': {
            from: { opacity: '0' },
            to: { opacity: '1' },
          },
          'fade-out': {
            from: { opacity: '1' },
            to: { opacity: '0' },
          },
          'slide-in-right': {
            from: {
              transform: 'translateX(calc(100% + var(--viewport-padding)))',
              opacity: '0',
            },
            to: { transform: 'translateX(0)' },
          },
          'slide-out-right': {
            from: { transform: 'translateX(0)' },
            to: {
              transform: 'translateX(calc(100% + var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'slide-in-left': {
            from: {
              transform: 'translateX(calc(-100% - var(--viewport-padding)))',
              opacity: '0',
            },
            to: { transform: 'translateX(0)' },
          },
          'slide-out-left': {
            from: { transform: 'translateX(0)' },
            to: {
              transform: 'translateX(calc(-100% - var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'slide-in-down': {
            from: {
              transform: 'translateY(calc(100% + var(--viewport-padding)))',
              opacity: '0',
            },
            to: { transform: 'translateY(0)' },
          },
          'slide-out-down': {
            from: { transform: 'translateY(0)' },
            to: {
              transform: 'translateY(calc(100% + var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'slide-in-up': {
            from: {
              transform: 'translateY(calc(-100% - var(--viewport-padding)))',
              opacity: '0',
            },
            to: { transform: 'translateY(0)' },
          },
          'slide-out-up': {
            from: { transform: 'translateY(0)' },
            to: {
              transform: 'translateY(calc(-100% - var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'swipe-out-right': {
            from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
            to: {
              transform: 'translateX(calc(100% + var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'swipe-out-left': {
            from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
            to: {
              transform: 'translateX(calc(-100% - var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'swipe-out-down': {
            from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
            to: {
              transform: 'translateY(calc(100% + var(--viewport-padding)))',
              opacity: '0',
            },
          },
          'swipe-out-up': {
            from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
            to: {
              transform: 'translateY(calc(-100% - var(--viewport-padding)))',
              opacity: '0',
            },
          },
        },
        transformOrigin: {
          'top-center': 'top center',
        },
        spacing: {
          0.75: '0.1875rem' /* 3px */,
          1.25: '0.3125rem' /* 5px */,
          1.75: '0.4375rem' /* 7px */,
          2.25: '0.5625rem' /* 9px */,
          2.75: '0.6875rem' /* 11px */,
          3.25: '0.8125rem' /* 13px */,
          3.75: '0.9375rem' /* 15px */,
          4.25: '1.0625rem' /* 17px */,
          4.5: '1.125rem' /* 18px */,
          4.75: '1.1875rem' /* 19px */,
          5.25: '1.3125rem' /* 21px */,
          5.5: '1.375rem' /* 22px */,
          5.75: '1.4375rem' /* 23px */,
          6.25: '1.5625rem' /* 25px */,
          6.5: '1.625rem' /* 26px */,
          6.75: '1.6875rem' /* 27px */,
          7.25: '1.8125rem' /* 29px */,
          7.5: '1.875rem' /* 30px */,
          7.75: '1.9375rem' /* 31px */,
          8.25: '2.0625rem' /* 33px */,
          8.5: '2.125rem' /* 34px */,
          8.75: '2.1875rem' /* 35px */,
          9.25: '2.3125rem' /* 37px */,
          9.5: '2.375rem' /* 38px */,
          9.75: '2.4375rem' /* 39px */,
          10.25: '2.5625rem' /* 41px */,
          10.5: '2.625rem' /* 42px */,
          10.75: '2.6875rem' /* 43px */,
          11.25: '2.8125rem' /* 45px */,
          11.5: '2.875rem' /* 46px */,
          11.75: '2.9375rem' /* 47px */,
          12.25: '3.0625rem' /* 49px */,
          12.5: '3.125rem' /* 50px */,
          12.75: '3.1875rem' /* 51px */,
          13.25: '3.3125rem' /* 53px */,
          13.5: '3.375rem' /* 54px */,
          13.75: '3.4375rem' /* 55px */,
          14.25: '3.5625rem' /* 57px */,
          14.5: '3.625rem' /* 58px */,
          14.75: '3.6875rem' /* 59px */,
          15: '3.75rem' /* 60px */,
        },
        width: {
          inherit: 'inherit',
          xs: 'min(20rem, 100vw - 2rem)',
          sm: 'min(24rem, 100vw - 2rem)',
          md: 'min(28rem, 100vw - 2rem)',
          lg: 'min(32rem, 100vw - 2rem)',
          xl: 'min(36rem, 100vw - 2rem)',
          '2xl': 'min(42rem, 100vw - 2rem)',
          '3xl': 'min(48rem, 100vw - 2rem)',
          '4xl': 'min(56rem, 100vw - 2rem)',
          '5xl': 'min(64rem, 100vw - 2rem)',
          '6xl': 'min(72rem, 100vw - 2rem)',
          '7xl': 'min(80rem, 100vw - 2rem)',
        },
        height: {
          inherit: 'inherit',
        },
        zIndex: {
          1: '1' /* calendar */,
        },
      },
    },
    plugins: [typography, perspective],
  },
);

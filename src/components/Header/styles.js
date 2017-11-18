import { css } from 'glamor';

export default css({
  backgroundColor: '#dcdcdc',

  ' .nav__logo, nav': {
    display: 'inline-block'
  },

  ' .nav__logo': {
    padding: '1em 2.5em',
    background: '#ccc'
  },

  ' .nav__btn': {
    color: 'currentColor',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '1em 1.5em',
    border: 'solid 1px #AAA',
    borderTop: 'none',
    borderBottom: 'none',
    display: 'inline-block',
    position: 'relative',

    ' ~ .nav__btn': {
      marginLeft: '-1px'
    },

    '::before': {
      content: ' ',
      background: 'rgba(0, 0, 0, 0.25)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transition: 'transform 0.2s',
      transformOrigin: 'bottom center',
      transform: 'scale(1, 0)',
      pointerEvents: 'none',
    },

    ':hover': {
      '::before': {
        transform: 'scale(1, 0.1)'
      }
    },

    '.current': {
      '::before': {
        transform: 'scale(1, 1)'
      }
    }
  },

  ' .toggle': {
    display: 'none',
    position: 'absolute',
    top: 0,
    right: 0,

    ' label': {
      padding: '1em',
      userSelect: 'none',
      cursor: 'pointer',
      display: 'block'
    },

    ' input': {
      display: 'none',

      ':checked + .toggle__indicator': {
        display: 'block'
      }
    },

    '&__indicator': {
      width: '0.25em',
      height: '50%',
      background: '#666',
      display: 'none',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)'
    }
  },

  '@media (max-width: 750px)': {
    position: 'relative',

    // add a background color element so the nav can go under
    '::before': {
      content: ' ',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#dcdcdc'
    },

    ' nav': {
      background: '#fff',
      boxShadow: '0 5px 2em rgba(0,0,0,0.5)',
      position: 'absolute',
      bottom: '2em', // account for shadow
      left: 0,
      right: 0,
      transform: 'translateY(0%)',
      transition: 'transform 0.25s ease-in-out',
      zIndex: '-1',

      '&.is--open': {
        transform: 'translateY(calc(100% + 2em))',
      }
    },

    ' .nav__logo': {
      position: 'relative'
    },

    ' .nav__btn': {
      border: 'solid 1px #aaa',
      borderLeft: 'none',
      borderRight: 'none',
      display: 'block',

      ' ~ .nav__btn': {
        marginLeft: 0,
        marginTop: '-1px'
      },

      '::before': {
        transformOrigin: 'center left',
        transform: 'scale(0, 1)',
        pointerEvents: 'none'
      },

      ':hover': {
        '::before': {
          transform: 'scale(0.02, 1)'
        }
      },

      '.current': {
        '::before': {
          transform: 'scale(1, 1)'
        }
      }
    },

    ' .toggle': {
      display: 'block'
    }
  }
});

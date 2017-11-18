import { css } from 'glamor';

const namespace = '.spinner';

let spin = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export default css({
  textAlign: 'center',
  padding: '0.5em 1em',
  borderRadius: '0.3em',
  background: 'rgba(0,0,0,0.4)',
  display: 'inline-block',

  [`&::before, ${namespace}__icon`]: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  '&::before': {
    content: 'attr(data-label)',
    color: '#fff',
    fontWeight: 'bold',
    marginRight: '0.5em',
  },

  [` ${namespace}__icon`]: {
    width: '2em',
    height: '2em',
    borderRadius: '100%',
    border: 'solid 0.3em rgba(255,255,255,0.25)',
    borderTopColor: '#fff',
    animation: `${spin} 0.5s linear infinite`
  }
});

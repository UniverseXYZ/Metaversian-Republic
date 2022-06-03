import { ButtonProps } from '@chakra-ui/react';

export const ConnectWallet: ButtonProps = {
  bg: 'transparent',
  border: 0,
  borderRadius: '100px',
  boxShadow: 'none',
  color: 'white',
  transition: '50ms ease-in',
  position: 'relative',
  padding: '8px 18px',

  fontFamily: '"Blocket Display"',

  _before: {
    backgroundImage: 'none',
    boxShadow: 'none',
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },

  _hover: {
    background: 'rgba(255 255 255 / 0.1)',
  },

  _focus: {
    boxShadow: 'none',
  },

  _active: {
    background: 'linear-gradient(135deg, rgba(188, 235, 0, 0.1) 15.57%, rgba(0, 234, 234, 0.1) 84.88%)',
    transform: 'scale(0.95)',
  },

  _disabled: {
    background: 'transparent !important',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxShadow: 'none !important',
    color: 'rgba(0, 0, 0, 0.6) !important',
    transform: 'scale(1) !important',
    _before: {
      display: 'none',
    }
  },
};

export const MintButton: ButtonProps = {
  background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
  borderRadius: '100px',
  boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.22), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
  color: 'white',
  fontFamily: '"Blocket Display"',
  fontSize: '20px',
  py: '20px',
  h: 'auto',
  w: '100%',
};

export const CountButton: ButtonProps = {
  background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
  borderRadius: '100px',
  boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.22), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
  boxSize: '40px',
  color: 'white',
  fontFamily: '"Blocket Display"',
  fontSize: '20px',
  p: 0,

  _disabled: {
    opacity: 0.2,
  }
}

import { SystemStyleFunction } from "@chakra-ui/react";

const variantPrimary: SystemStyleFunction = () => {
  return {
    background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
    boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
    color: 'white',

    _hover: {
      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
      boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
    },

    _focus: {
      background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
      boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
    },

    _active: {
      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
      boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
    },

    _disabled: {
      background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
      boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
      opacity: 0.2,

      _hover: {
        background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%) !important',
        boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32) !important',
      },
      _active: {
        background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%) !important',
        boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32) !important',
      },
    },
  }
};
const variantGhost: SystemStyleFunction = (props) => {
  return {
    bg: 'transparent',
    color: 'white',
    position: 'relative',

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
      background: 'linear-gradient(45deg, rgba(243, 64, 120, 0.2) 0%, rgba(251, 136, 77, 0.2) 100%)',
    },

    _focus: {
      boxShadow: 'none',
    },

    _active: {
      background: 'linear-gradient(45deg, rgba(243, 64, 120, 0.2) 0%, rgba(251, 136, 77, 0.2) 100%)',
    },

    _disabled: {
      opacity: 0.2,

      _hover: {
        bg: 'transparent',
      },
      _focus: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
    },
  }
};

export const Button = {
  baseStyle: {
    borderRadius: '100px',
    fontFamily: '"Blocket Display"',

    _active: {
      transform: 'scale(98%)',
    },

    '.chakra-button__icon': {
      m: 0,
    },
  },
  variants: {
    primary: variantPrimary,
    ghost: variantGhost,
  },
  sizes: {
    lg: {
      fontSize: '20px',
      gap: '10px',
      height: 'auto',
      padding: '20px 40px',
    },
    md: {
      fontSize: '16px',
      gap: '8px',
      height: 'auto',
      padding: '12px 24px',
    },
    sm: {
      fontSize: '16px',
      gap: '8px',
      height: 'auto',
      padding: '8px 18px',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  }
};

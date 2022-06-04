import { BoxProps } from '@chakra-ui/react';

export const Wrapper: BoxProps = {
  alignItems: 'center',
  background: 'rgba(28, 5, 49, 0.16)',
  borderRadius: '100px',
  boxShadow: 'inset 2px 2px 4px rgba(35, 19, 27, 0.05)',
  display: 'flex',
  flexDir: 'row',
  padding: '4px',
  height: '36px',
};

export const Progress: BoxProps = {
  alignItems: 'center',
  background: 'linear-gradient(45deg, #6C42E3 0%, #01AEE9 100%)',
  border: '1px solid rgba(255, 251, 243, 0.1)',
  boxShadow: '0px 0px 16px rgba(35, 19, 27, 0.4), inset 0px 0px 8px rgba(255, 255, 255, 0.4)',
  borderRadius: '100px 0 0 100px',
  display: 'flex',
  h: '100%',
  justifyContent: 'center',

  sx: {
    backgroundOrigin: 'border-box',
  }
};

export const Label: BoxProps = {
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
};

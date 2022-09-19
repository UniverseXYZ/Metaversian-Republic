import { BoxProps } from '@chakra-ui/react';

export const Wrapper: BoxProps = {
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(28, 5, 49, 0.16)',
  boxShadow: 'inset 2px 2px 4px rgba(35, 19, 27, 0.05)',
  width: "100%",
  height: "36px",
  padding: '4px',
  overflow: "hidden",
  borderRadius: "100px",
  position: 'relative'
};

export const Progress: BoxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: "100%",
  height: "100%",
  background: 'linear-gradient(45deg, #6C42E3 0%, #01AEE9 100%)',
  border: '1px solid rgba(255, 251, 243, 0.1)',
  boxShadow: '0px 0px 16px rgba(35, 19, 27, 0.4), inset 0px 0px 8px rgba(255, 255, 255, 0.4)',
};

export const Label: BoxProps = {
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: '100%'
};

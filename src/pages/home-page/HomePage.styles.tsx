import { AccordionButtonProps, AccordionItemProps, AccordionProps, BoxProps } from '@chakra-ui/react';

export const Accordion: AccordionProps = {
  color: 'white',
};

export const AccordionItem: AccordionItemProps = {
  border: '2px solid rgba(255, 251, 243, 0.08)',
  borderRadius: '16px',
  mb: '16px',

  _last: {
    mb: 0,
  }
};

export const AccordionButton: AccordionButtonProps = {
  fontSize: '24px',
  padding: '24px',

  _focus: {
    boxShadow: 'none',
  }
};

export const Separator: BoxProps = {
  bg: 'linear-gradient(90deg, rgba(255, 251, 243, 0) 0%, rgba(255, 251, 243, 0.12) 11.98%, rgba(255, 251, 243, 0.12) 88.02%, rgba(255, 251, 243, 0) 100%)',
  h: '1px',
};

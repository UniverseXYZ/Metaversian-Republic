import { Box, BoxProps, Button, HStack, Image, StackProps } from '@chakra-ui/react';
import React from 'react';

import MinusIcon from '@app/assets/icons/minus.svg';
import PlusIcon from '@app/assets/icons/plus.svg';

import * as s from './AmountSelector.styles';

type IAmountSelectorSize = 'lg' | 'md';

interface IAmountSelectorProps extends Omit<StackProps, 'onChange'> {
  size?: IAmountSelectorSize;
  min?: number;
  max?: number;
  value: number;
  onChange?: (value: number) => void;
}

export const AmountSelector: React.FC<IAmountSelectorProps> = (props) => {
  const {
    size = 'md',
    min = -Infinity,
    max =  Infinity,
    value,
    onChange,
    ...rest
  } = props;

  const ActionButtonSizes: Record<IAmountSelectorSize, BoxProps['boxSize']> = {
    lg: '52px',
    md: '40px',
  };

  return (
    <HStack {...s.Wrapper} {...rest}>
      <Button
        boxSize={ActionButtonSizes[size]}
        p={0}
        disabled={value <= min}
        onClick={() => onChange && onChange(value - 1)}
      >
        <Image src={MinusIcon} boxSize={'20px'} />
      </Button>
      <Box flex={1} fontSize={'18px'} fontWeight={'bold'} textAlign={'center'}>{value}</Box>
      <Button
        boxSize={ActionButtonSizes[size]}
        p={0}
        disabled={value >= max}
        onClick={() => onChange && onChange(value + 1)}
      >
        <Image src={PlusIcon} boxSize={'20px'} />
      </Button>
    </HStack>
  );
}

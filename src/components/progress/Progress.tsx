import { Box, BoxProps } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';

import * as s from './Progress.styles';

interface IProgressProps extends BoxProps {
  value: number;
  max: number;
}

export const Progress: React.FC<IProgressProps> = (props) => {
  const { value, max, children, ...rest } = props;

  const [labelThreshold] = useState(50);

  const percent = useMemo(() => 100 / max * value, [value, max]);

  return (
    <Box {...s.Wrapper} {...rest}>
      <Box {...s.Progress} w={`${percent}%`} borderRadius={value > 9800 ? '100px' : '100px 0 0 100px'}>
        {percent > labelThreshold && (children)}
      </Box>
      <Box {...s.Label}>
        {percent <= labelThreshold && (children)}
      </Box>
    </Box>
  );
}

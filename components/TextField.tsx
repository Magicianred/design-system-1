import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'input';

const StyledTextField = styled(DEFAULT_TAG, {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: '1',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue500, inset 0 0 0 100px $colors$blue200',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700, inset 0 0 0 100px $colors$blue200',
    },
  },
  '&::placeholder': {
    color: '$slate800',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate100',
    color: '$slate700',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate600',
    },
  },
  '&:read-only': {
    backgroundColor: '$slate100',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate600',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$1',
        px: '$1',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        fontSize: '$3',
        px: '$2',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate600',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red600',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red700, 0px 0px 0px 1px $colors$red700',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green600',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green700, 0px 0px 0px 1px $colors$green700',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

type TextFieldCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type TextFieldVariants = Omit<StitchesVariants<typeof StyledTextField>, 'size'>;
type TextFieldOwnProps = TextFieldCSSProp & TextFieldVariants & { size?: any };

type TextFieldComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TextFieldOwnProps>;

export const TextField = React.forwardRef((props, forwardedRef) => {
  return <StyledTextField {...props} ref={forwardedRef} />;
}) as TextFieldComponent;

TextField.toString = () => `.${StyledTextField.className}`;

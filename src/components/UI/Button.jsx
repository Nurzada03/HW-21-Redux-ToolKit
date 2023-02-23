import React from "react";

import {Button as MuiButton} from '@mui/material'
import {styled} from '@mui/system'


const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...props
}) => {
  return (
    <StyledMuiButton {...props} borderStyle={borderStyle} variant={variant}>
      {children}
    </StyledMuiButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#fff";
};

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : " #8a2b06";
};

const getBorderRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : " 6px";
};

const getPadding = (props) => {
  return props.borderStyle === "rounded" ? "10px 32px" : "8px 14px";
};

const StyledMuiButton = styled(MuiButton)((variant, borderStyle)=>({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3125rem',
  background: getBackgroundColor(variant),
  color:getColor(variant),
  borderRadius: getBorderRadius(borderStyle),
  padding: getPadding(borderStyle),
  fontWeight:'600',
  lineHeight: '1.5rem',
  border:getBorder(variant),
  cursor: 'pointer',

    '&:hover' : {
    background: '#7e2a0a',
    color: '#fff',
    '&:path': {
      stroke: '#fff'
    }
  },
  '&:active': {
    background: '#993108'
  }
}))






import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export interface PrimaryButtonProps {
  isDisable?: boolean;
}

const btnColor = {
  normal: '#55c500',
  hover: '#4aac00',
  disable: '#A7E07D'
}

const PrimaryButtonInner = styled.button`
  padding: 15px 24px;
  background-color: ${btnColor.normal};
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;
  border: none;
  transition: background .2s linear;

  &:hover {
    background-color: ${btnColor.hover};
  }

  &.is-disable {
    background-color: ${btnColor.disable};
    pointer-events: none;
  }
`;

export default class PrimaryButton extends React.Component<PrimaryButtonProps, any> {
  constructor(props: PrimaryButtonProps) {
    super(props);
  }

  public render() {
    return (
      <PrimaryButtonInner className={
        classnames({
          'is-disable': this.props.isDisable
        })
      }>
        {this.props.children}
      </PrimaryButtonInner>
    );
  }
}

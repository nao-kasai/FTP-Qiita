import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../constants';

export interface PagerProps {
}

const PagerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px auto; /* TODO: margin-bottomが、40〜117pxの範囲でまちまちなので、一旦48pxで仮設定*/
  min-width: 140px;
`;

const PagerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${COLORS.WHITE};
  font-size: 24px;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
`;

interface PagerButtonIconWrapperProps {
  transX?: number;
}

const PagerButtonIconWrapper = styled.div<PagerButtonIconWrapperProps>`
  transform: translateX(${props => props.transX}px);
`;

const PagerCurrentPageNum = styled.span`
  margin: 0 32px;
  height: 27px;
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
  color: ${COLORS.GRAY};
`;

const Pager = (props: PagerProps) => {
  return (
    <PagerInner>
      <PagerButton>
        <PagerButtonIconWrapper transX={-1}>
          <FontAwesomeIcon icon={faAngleLeft} color={COLORS.GRAY} />
        </PagerButtonIconWrapper>
      </PagerButton>

      <PagerCurrentPageNum>4</PagerCurrentPageNum>

      <PagerButton>
        <PagerButtonIconWrapper transX={1}>
          <FontAwesomeIcon icon={faAngleRight} color={COLORS.GRAY} />
        </PagerButtonIconWrapper>
      </PagerButton>
    </PagerInner>
  )
}

export default Pager;

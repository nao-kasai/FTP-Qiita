import * as React from 'react';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../constants/index';


interface TagProps {
  tag: string;
  margin?: number;
}

const TagInner = styled.li`
  display: flex;
  align-items: center;
 &:not(:last-child) {
  margin-right: 20px;
  }
`;

const TagIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
`;

const TagName = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: ${COLORS.CHARCOAL_GRAY2};
`;

const Tag = (props:TagProps) => {
  return (
    <TagInner>
      <TagIcon>
        <FontAwesomeIcon icon={faTag} color={COLORS.COOL_GRAY} />
      </TagIcon>

      <TagName>{props.tag}</TagName>
    </TagInner>
  );
}

export default Tag;
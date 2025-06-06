import { colors } from '@components';
import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { t } from '@i18n/utils';

const EmptyContentMessage = styled(Typography.Text)`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray[1700]};
`;

type Props = {
    message: string;
};

const EmptySectionText = ({ message }: Props) => {
    return <EmptyContentMessage type="secondary">{t(message)}.</EmptyContentMessage>;
};

export default EmptySectionText;

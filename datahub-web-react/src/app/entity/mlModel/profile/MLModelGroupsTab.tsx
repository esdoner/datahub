import { Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'antd/lib/typography/Link';
import React from 'react';
import styled from 'styled-components';

import { useBaseEntity } from '@app/entity/shared/EntityContext';
import { useEntityRegistry } from '@app/useEntityRegistry';

import { GetMlModelQuery } from '@graphql/mlModel.generated';
import { EntityType, MlModelGroup } from '@types';
import { t } from '@src/i18n/utils';

const TabContent = styled.div`
    padding: 16px;
`;

export default function MLModelGroupsTab() {
    const baseEntity = useBaseEntity<GetMlModelQuery>();
    const model = baseEntity?.mlModel;

    const entityRegistry = useEntityRegistry();

    const propertyTableColumns: ColumnsType<MlModelGroup> = [
        {
            title: t('Group'),
            dataIndex: 'name',
            render: (name, record) => {
                return (
                    <Link href={entityRegistry.getEntityUrl(EntityType.MlmodelGroup, record.urn)}>
                        {record.properties?.name || name}
                    </Link>
                );
            },
        },
        {
            title: t('Description'),
            dataIndex: 'description',
        },
    ];

    return (
        <TabContent>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <Typography.Title level={3}>Groups</Typography.Title>
                <Table
                    pagination={false}
                    columns={propertyTableColumns}
                    dataSource={model?.properties?.groups as MlModelGroup[]}
                />
            </Space>
        </TabContent>
    );
}

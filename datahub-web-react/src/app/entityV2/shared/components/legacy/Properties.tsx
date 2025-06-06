import { Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

import { StringMapEntry } from '@types';
import { t } from '@src/i18n/utils';

export type Props = {
    properties: StringMapEntry[];
};

export function Properties({ properties }: Props) {
    const propertyTableColumns: ColumnsType<StringMapEntry> = [
        {
            title: t('Name'),
            dataIndex: 'key',
            sorter: (a, b) => a.key.localeCompare(b.key),
            defaultSortOrder: 'ascend',
        },
        {
            title: t('Value'),
            dataIndex: 'value',
        },
    ];

    return (
        <Space direction="vertical" style={{ width: '100%' }} size="large">
            <Typography.Title level={3}>Properties</Typography.Title>
            <Table pagination={false} columns={propertyTableColumns} dataSource={properties} />
        </Space>
    );
}

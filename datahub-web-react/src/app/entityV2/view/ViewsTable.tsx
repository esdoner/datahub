import { Empty } from 'antd';
import React from 'react';

import { StyledTable } from '@app/entityV2/shared/components/styled/StyledTable';
import {
    ActionsColumn,
    DescriptionColumn,
    NameColumn,
    ViewTypeColumn,
} from '@app/entityV2/view/select/ViewsTableColumns';

import { DataHubView } from '@types';
import { t } from '@src/i18n/utils';

type ViewsTableProps = {
    views: DataHubView[];
    onEditView: (urn) => void;
};

/**
 * This component renders a table of Views.
 */
export const ViewsTable = ({ views, onEditView }: ViewsTableProps) => {
    const tableColumns = [
        {
            title: t('Name'),
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => <NameColumn name={name} record={record} onEditView={onEditView} />,
        },
        {
            title: t('Description'),
            dataIndex: 'description',
            key: 'description',
            render: (description) => <DescriptionColumn description={description} />,
        },
        {
            title: t('Type'),
            dataIndex: 'viewType',
            key: 'viewType',
            render: (viewType) => <ViewTypeColumn viewType={viewType} />,
        },
        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: (record) => <ActionsColumn record={record} />,
        },
    ];

    /**
     * The data for the Views List.
     */
    const tableData = views.map((view) => ({
        ...view,
    }));

    return (
        <StyledTable
            columns={tableColumns}
            dataSource={tableData}
            rowKey="urn"
            locale={{
                emptyText: <Empty description="No Views found!" image={Empty.PRESENTED_IMAGE_SIMPLE} />,
            }}
            pagination={false}
        />
    );
};

import React from 'react';

import { useGetEntityWithSchema } from '@app/entityV2/shared/tabs/Dataset/Schema/useGetEntitySchema';
import TabNameWithCount from '@app/entityV2/shared/tabs/Entity/TabNameWithCount';

import { t } from "@i18n/utils";

const ColumnTabNameHeader = () => {
    const { entityWithSchema, loading } = useGetEntityWithSchema();
    const fieldsCount = entityWithSchema?.schemaMetadata?.fields?.length || 0;

    return <TabNameWithCount name={t("Columns")} count={fieldsCount} loading={loading} />;
};

export default ColumnTabNameHeader;

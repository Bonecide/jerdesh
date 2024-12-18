import React from "react";
import { Table as AntTable } from "antd";
import type { ColumnsType, ColumnType } from "antd/es/table";
import type { TableProps as AntTableProps } from "antd";
import type { GetComponentProps } from "rc-table/lib/interface";

interface TableProps<RecordType extends object = any>
  extends Omit<AntTableProps<RecordType>, "columns"> {
  columns: ColumnsType<RecordType>;
  onRow?: GetComponentProps<RecordType>;
  withoutFooter?: boolean;
}

export type Column<RecordType> = ColumnType<RecordType> & {
  hidden?: boolean;
};

export const Table = <RecordType extends object = any>(
  props: TableProps<RecordType>
) => {
  return <AntTable<RecordType> {...props} className="ant-tb" />;
};

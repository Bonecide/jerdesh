import {TablePaginationConfig} from 'antd';

export const fixedTableHeight = (size: number) =>
  window.innerHeight - 200 + size;

export const baseTablePaginationConfig: TablePaginationConfig = {
  defaultPageSize: 30,
};

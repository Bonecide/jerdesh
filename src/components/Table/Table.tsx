import { ComponentProps, useCallback, useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GetComponentProps } from "rc-table/lib/interface";

import { Checkbox, Dropdown, MenuProps, Table as AntTable, Button } from "antd";
import { AnyObject } from "antd/es/_util/type";
import ForwardTable, { ColumnsType, ColumnType } from "antd/es/table";

import { ItemType } from "antd/es/menu/interface";

interface TableProps<RecordType extends AnyObject = AnyObject>
  extends ComponentProps<typeof ForwardTable> {
  columns: ColumnsType<RecordType>;
  onRow?: GetComponentProps<RecordType>;
  withoutFooter?: boolean;
}

export type Column<RecordType> = ColumnType<RecordType> & {
  hidden: boolean;
};

export const Table = <RecordType extends AnyObject = AnyObject>(
  props: TableProps<RecordType>
) => {
  const [isColumnControlOpen, setIsColumnControlOpen] = useState(false);
  const [columns, setColumns] = useState<Column<RecordType>[]>(
    props.columns.map((item) => ({ ...item, hidden: false }))
  );

  const handleItemClick = useCallback(
    (key: string, isHidden: boolean) => () => {
      setColumns((prev) =>
        prev.map((item) => {
          if (item.key === key) {
            return { ...item, hidden: !isHidden };
          }

          return item;
        })
      );
    },
    []
  );

  const items = useMemo(
    (): MenuProps["items"] =>
      columns.map(
        (item): ItemType => ({
          label: item.title && (
            <Checkbox
              checked={!item.hidden}
              onClick={handleItemClick(item.key as string, item.hidden)}
            >
              {item.title as string}
            </Checkbox>
          ),
          key: item.key as string,
        })
      ),
    [columns, handleItemClick]
  );

  return (
    <AntTable<RecordType>
      {...props}
      columns={columns.filter((item) => !item.hidden)}
      className="ant-tb"
    />
  );
};

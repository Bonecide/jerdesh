"use client";

import { Table } from "@/components/Table";
import {
  baseTablePaginationConfig,
  fixedTableHeight,
} from "@/utils/const/table";
import { Transaction, TRANSACTION_HISTORY } from "@/utils/mock";
import { ColumnsType } from "antd/es/table";
import { useMemo, useRef } from "react";

export const TransactionHistory = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const columns: ColumnsType<Transaction> = useMemo(
    () => [
      {
        title: "Дата",
        dataIndex: "date",
        key: "date",
        width: 150,
        align: "left",
        render: (_, { created_at }) =>
          new Date(created_at).toLocaleDateString("ru-RU"),
      },
      {
        title: "Название",
        dataIndex: "name",
        key: "name",
        width: 150,
        align: "left",
      },
      {
        title: "Сумма",
        dataIndex: "total",
        key: "total",
        width: 150,
        align: "left",
      },
      {
        title: "Номер заказа",
        dataIndex: "order_number",
        key: "order_number",
        width: 150,
        align: "left",
      },
    ],
    []
  );
  return (
    <div ref={containerRef} className="max-w-[100%] w-full">
      <h4 className="font-bold mt-2 mb-2">История транзакций</h4>
      <Table<Transaction>
        locale={{ emptyText: "Нет данных за этот промежуток времени" }}
        columns={columns}
        dataSource={TRANSACTION_HISTORY}
        rowKey={(record) => record.title}
        bordered
        size="small"
        pagination={baseTablePaginationConfig}
        scroll={{
          x: containerRef.current?.clientWidth
            ? containerRef.current?.clientWidth - 400
            : window.innerWidth - 600,
        }}
      />
    </div>
  );
};

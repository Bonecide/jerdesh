"use client";

import { Transaction, transactionsAtom } from "@/atoms/transactions";
import { Table } from "@/components/Table";
import { useRefetchableAtom } from "@/hooks/useRefetchableAtom";
import { baseTablePaginationConfig } from "@/utils/const/table";
import { ColumnsType } from "antd/es/table";
import { useMemo, useRef } from "react";

export const TransactionHistory = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const transactions = useRefetchableAtom(transactionsAtom);
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
        dataIndex: "service_name",
        key: "service_name",
        width: 150,
        align: "left",
      },
      {
        title: "Сумма",
        dataIndex: "total",
        key: "total",
        width: 150,
        align: "left",

        render: (_, { total, operation_type }) => (
          <p
            className={`${
              operation_type === "income" ? "text-green-500" : "text-rose-400"
            }`}
          >
            {operation_type === "income" ? `+${total}` : `-${total}`} руб.
          </p>
        ),
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
        dataSource={transactions}
        rowKey={(record) => record.id}
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

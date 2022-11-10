import { Table } from "flowbite-react";
import React from "react";

const SqlVsNoSql = () => {
  return (
    <div className="p-2 md:p-10">
      <h3 className="capitalize text-3xl text-center mb-3 mt-5 underline italic font-semibold text-slate-700 dark:text-white">
        SQL Vs NoSql
      </h3>
      <Table>
        <Table.Head>
          <Table.HeadCell>SQL</Table.HeadCell>
          <Table.HeadCell>NoSql</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* difference number 1 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
            </Table.Cell>
            <Table.Cell>
              Non-relational or distributed database system.
            </Table.Cell>
          </Table.Row>
          {/* difference number 2 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              These databases have fixed or static or predefined schema
            </Table.Cell>
            <Table.Cell>They have dynamic schema</Table.Cell>
          </Table.Row>
          {/* difference number 3 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              These databases are best suited for complex queries
            </Table.Cell>
            <Table.Cell>
              These databases are not so good for complex queries
            </Table.Cell>
          </Table.Row>
          {/* difference number 4 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
            </Table.Cell>
            <Table.Cell>
              Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default SqlVsNoSql;

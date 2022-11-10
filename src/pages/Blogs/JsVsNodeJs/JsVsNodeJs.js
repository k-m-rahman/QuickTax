import { Table } from "flowbite-react";
import React from "react";

const JsVsNodeJs = () => {
  return (
    <div className="p-2 md:p-10">
      <h3 className="capitalize text-3xl text-center mb-3 mt-5 underline italic font-semibold text-slate-700 dark:text-white">
        JS vs nodejs
      </h3>
      <Table>
        <Table.Head>
          <Table.HeadCell>js</Table.HeadCell>
          <Table.HeadCell>Nodejs</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* difference number 1 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              Javascript is a programming language that is used for writing
              scripts on the website.
            </Table.Cell>
            <Table.Cell>NodeJS is a Javascript runtime environment.</Table.Cell>
          </Table.Row>

          {/* difference number 2 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>Javascript can only be run in the browsers.</Table.Cell>
            <Table.Cell>
              We can run Javascript outside the browser with the help of NodeJS.
            </Table.Cell>
          </Table.Row>

          {/* difference number 3 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>It is basically used on the client-side.</Table.Cell>
            <Table.Cell>It is mostly used on the server-side.</Table.Cell>
          </Table.Row>

          {/* difference number 4 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              It is the upgraded version of ECMA script that uses Chrome’s V8
              engine written in C++.
            </Table.Cell>
            <Table.Cell>Nodejs is written in C, C++ and Javascript.</Table.Cell>
          </Table.Row>

          {/* difference number 5 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox.
            </Table.Cell>
            <Table.Cell>
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.{" "}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default JsVsNodeJs;

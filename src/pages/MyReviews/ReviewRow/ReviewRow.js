import { Button, Table } from "flowbite-react";
import React from "react";

const ReviewRow = ({ ownReview, handleDelete }) => {
  const { serviceTitle, rating, review, _id } = ownReview;

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {serviceTitle}
      </Table.Cell>
      <Table.Cell>{review}</Table.Cell>
      <Table.Cell>{rating}</Table.Cell>
      <Table.Cell>
        <Button gradientMonochrome="failure" onClick={() => handleDelete(_id)}>
          X
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ReviewRow;

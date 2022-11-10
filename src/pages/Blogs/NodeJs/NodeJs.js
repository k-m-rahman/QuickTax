import { Card } from "flowbite-react";
import React from "react";

const NodeJs = () => {
  return (
    <div className="md:w-8/12 md:mx-auto mx-5 mt-10">
      <h3 className="capitalize text-3xl text-center mb-3 mt-5 underline italic font-semibold text-slate-700 dark:text-white">
        NodeJs
      </h3>
      <Card imgSrc="https://tsh.io/wp-content/uploads/2019/09/concurrency-nodejs_.png">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          How does NodeJS handle multiple requests at the same time?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded.
          <br />
          <br />
          How NodeJS handle multiple client requests?
          <br /> <br /> NodeJS receives multiple client requests and places them
          into EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </Card>
    </div>
  );
};

export default NodeJs;

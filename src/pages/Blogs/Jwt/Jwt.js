import { Card } from "flowbite-react";
import React from "react";

const Jwt = () => {
  return (
    <div className="md:w-8/12 md:mx-auto mx-5 mt-10">
      <h3 className="capitalize text-3xl text-center mb-3 mt-5 underline italic font-semibold text-slate-700 dark:text-white">
        JWT
      </h3>
      <Card imgSrc="https://jwt.io/img/logo-asset.svg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is Jwt ? How does it works ?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          JWT or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br /> <br /> A common way to use JWTs is as OAuth bearer tokens. In
          this example, an authorization server creates a JWT at the request of
          a client and signs it so that it cannot be altered by any other party.
          The client will then send this JWT with its request to a REST API. The
          REST API will verify that the JWT’s signature matches its payload and
          header to determine that the JWT is valid. When the REST API has
          verified the JWT, it can use the claims to either grant or deny the
          client’s request.
        </p>
      </Card>
    </div>
  );
};

export default Jwt;

import React from "react";

const Blog = () => {
  return (
    <div className="ccontainer py-[50px]">
      <div className="underline  ">
        <h1 className="text-center font-extrabold text-[#1A1919] text-[32px]">
          Blogs
        </h1>
      </div>

      <div className="pt-8 pb-20">
        <div class=" mx-auto text-left">
          <div class="mt-12 grid lg:grid-cols-2 gap-5">
            <div class="rounded-lg py-12 border-2 border-primary px-11 text-justify bg-primary bg-opacity-10 shadow-md">
              <h2 class=" text-[#414141] font-bold text-2xl">
                1. What is an access token and refresh token? How do they work
                and where should we store them on the client-side?
              </h2>
              <p class="text-[#414141] text-base mt-[10px]">
                An <span className="font-bold">access token</span> is a
                short-lived credential that authenticates and authorizes a
                user's access to protected resources. It is obtained after a
                successful authentication process and is included in each
                request to access those resources.
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                An <span className="font-bold">refresh token</span> is a
                long-lived credential used to obtain a new access token when the
                current one expires. It is securely stored by the client
                application and used only when needed to refresh the access
                token.
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                Access tokens and refresh tokens work together in the following
                way:
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                The user provides their credentials and authenticates with the
                server. Upon successful authentication, the server generates an
                access token and a refresh token. The client includes the access
                token in the request header to access protected resources on the
                server. The access token has an expiration time after which it
                becomes invalid. When the access token expires, the client can
                send the refresh token to the server. The server validates the
                refresh token and, if valid, issues a new access token. The
                client stores the new access token and uses it in subsequent
                requests. The client repeats the process when the new access
                token expires by using the stored refresh token.
              </p>
            </div>
            <div class="rounded-lg py-12 border-2 border-primary px-11 text-justify bg-primary bg-opacity-10 shadow-md">
              <h2 class=" text-[#414141] font-bold text-2xl">
                2. Compare SQL and NoSQL databases?
              </h2>
              <p class="text-[#414141] text-base mt-[10px]">
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                types of database management systems that differ in their data
                models, query languages, and scalability options. Here's a brief
                comparison:
              </p>
              <p class="text-[#414141] text-base mt-[10px] font-bold">
                SQL Databases:
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                SQL databases follow a structured, tabular data model. Data is
                organized into tables with predefined schemas and relationships
                between tables. SQL databases use the SQL language for defining
                and manipulating data. It provides powerful querying
                capabilities, including joins, aggregations, and complex
                transactions. SQL databases enforce a rigid schema, meaning the
                structure of the data must be defined upfront and adhered to
                strictly. SQL databases generally scale vertically by adding
                more resources to a single server. They can handle large
                datasets but may face limitations in terms of horizontal
                scalability.
              </p>
              <p class="text-[#414141] text-base mt-[10px] font-bold">
                NoSQL Databases:
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                NoSQL databases offer flexible data models, including key-value,
                document, columnar, and graph. They allow for dynamic schema,
                making it easier to handle unstructured or evolving data. NoSQL
                databases use various query languages specific to their data
                model. Some provide SQL-like languages, while others use APIs or
                custom query languages. NoSQL databases are schema-agnostic,
                allowing for dynamic and flexible data structures. They can
                handle semi-structured and unstructured data without predefined
                schemas. NoSQL databases are designed for horizontal
                scalability. They can distribute data across multiple servers,
                enabling seamless scaling by adding more nodes to the cluster.
              </p>
            </div>
            <div class="rounded-lg py-12 border-2 border-primary px-11 text-justify bg-primary bg-opacity-10 shadow-md">
              <h2 class="text-[#414141] font-bold text-2xl">
                3. What is express js? What is Nest JS?
              </h2>
              <p class="text-[#414141] text-base mt-[10px]">
                Express.js and Nest.js are both popular JavaScript frameworks
                used for building web applications, but they have different
                focuses and approaches. Here's a brief explanation of each:
              </p>
              <p class="text-[#414141] text-base mt-[10px] font-bold">
                Express.js:
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                Express.js is a minimal and flexible web application framework
                for Node.js. It provides a simple, unopinionated approach to
                building web servers and APIs. Express.js offers a set of
                lightweight features and middleware that can be used to handle
                HTTP requests, routing, and middleware functionality. It allows
                developers to quickly build server-side applications and APIs
                with Node.js by providing a straightforward and flexible
                foundation.
              </p>
              <p class="text-[#414141] text-base mt-[10px font-bold">
                Nest.js:
              </p>
              <p class="text-[#414141] text-base mt-[10px">
                Nest.js is a progressive, opinionated TypeScript framework built
                on top of Express.js. It is designed to enable developers to
                build efficient, scalable, and maintainable server-side
                applications. Nest.js follows the architectural pattern of
                modularity and uses decorators, dependency injection, and
                TypeScript features to enhance productivity and maintainability.
                It provides a structured approach for organizing code and
                supports various features out of the box, such as dependency
                injection, modules, controllers, providers, middleware, and
                more.
              </p>
            </div>
            <div class="rounded-lg py-12 border-2 border-primary px-11 text-justify bg-primary bg-opacity-10 shadow-md">
              <h2 class="text-[#414141] font-bold text-2xl">
                4. What is MongoDB aggregate and how does it work?
              </h2>
              <p class="text-[#414141] text-base mt-[10px]">
                In MongoDB, the aggregate method is used for performing advanced
                data processing and analysis operations on collections. It
                allows you to perform complex queries, transformations,
                aggregations, and computations on the data. The aggregate method
                works by using an aggregation pipeline, which is a sequence of
                stages. Each stage represents a step in the pipeline and
                operates on the data received from the previous stage. The
                output of one stage becomes the input for the next stage,
                allowing for a series of operations to be performed on the data.
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                Each stage in the pipeline can perform various operations like
                filtering, sorting, grouping, transforming, and aggregating the
                data. These operations are specified using operators such as
                $match, $group, $sort, $project, and more. Each operator
                modifies or transforms the data in some way. By chaining
                multiple stages together, you can create complex and powerful
                data processing workflows. The aggregation pipeline allows you
                to reshape and refine your data to extract meaningful insights
                or generate customized result sets.
              </p>
              <p class="text-[#414141] text-base mt-[10px]">
                Overall, the aggregate method in MongoDB provides a flexible and
                efficient way to perform data analysis and aggregation
                operations on your collections. It is particularly useful when
                dealing with large datasets or when you need to perform complex
                computations on your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

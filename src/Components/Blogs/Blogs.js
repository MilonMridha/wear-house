import React from 'react';
import Slide from 'react-reveal/Slide';
const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h3>Qes: Difference between javascript and nodejs?</h3>
            <Slide left>
                <div className='row mt-5 shadow p-5 rounded'>
                    <div className='col-md-6'>
                        <h4>Javascript</h4>
                        <h6 className='text-start'>1. JavaScript is a simple programming language that runs in any browser JavaScript Engine.</h6>
                        <h6 className='text-start'>2. JavaScript is normally used for any client-side activity for one web application.</h6>
                        <h6 className='text-start'>3. JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser.</h6>
                        <h6 className='text-start'>4. JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard.</h6>
                    </div>
                    <div className='col-md-6'>
                        <h4>Node js</h4>
                        <h6 className='text-start'>1. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses.</h6>
                        <h6 className='text-start'>2. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. </h6>
                        <h6 className='text-start'>3. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.</h6>
                        <h6 className='text-start'>4. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.
                        </h6>
                    </div>

                </div>
            </Slide>
            <h3 className='mt-5'>Qes. Differences between sql and nosql databases?</h3>
            <Slide right>
                <div className='row mt-5 shadow p-5 rounded'>
                    <div className='col-md-6'>
                        <h4>SQL</h4>
                        <h6 className='text-start'>1. SQL databases are relational.</h6>
                        <h6 className='text-start'>2. SQL databases use structured query language and have a predefined schema.</h6>
                        <h6 className='text-start'>3. SQL databases are vertically scalable.</h6>
                        <h6 className='text-start'>4. SQL databases are table-based.</h6>
                        <h6 className='text-start'>5. SQL databases are better for multi-row transactions.</h6>
                    </div>
                    <div className='col-md-6'>
                        <h4>noSQL</h4>
                        <h6 className='text-start'>1. NoSQL databases are non-relational.
                        </h6>
                        <h6 className='text-start'>2. NoSQL databases have dynamic schemas for unstructured data.
                        </h6>
                        <h6 className='text-start'>3. NoSQL databases are horizontally scalable.
                        </h6>
                        <h6 className='text-start'>4. NoSQL databases are document, key-value, graph, or wide-column stores.
                        </h6>
                        <h6 className='text-start'>5. NoSQL is better for unstructured data like documents or JSON.
                        </h6>

                    </div>

                </div>
            </Slide>
            <h4 className='mt-5'>Qes. What is the purpose of jwt and how does it work?</h4>
            <Slide left>
                <p className='text-start mt-3 shadow p-5'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    1.The header and the payload.
                    1.The signature.
                </p>
            </Slide>
        </div>
    );
};

export default Blogs;
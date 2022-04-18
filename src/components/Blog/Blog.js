import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
        <div className='container mt-5'>
        <Accordion defaultActiveKey="0">
<Accordion.Item eventKey="0">
 <Accordion.Header><h3 className='fw-bold'>Difference between authorization and authentication?</h3></Accordion.Header>
 <Accordion.Body>
 <div className='container'>
 authentication process, the identity of users are checked for providing the access to the website and it check the system to the user or password are valid  it's verified. and it need for  user login details.authorization process the person or user authorities are the check the website the user is valid user or fake user. and its a valid user than parmission to access the site. and its mainly use in website security check parpase.
 </div>
 </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
 <Accordion.Header><h3 className='fw-bold'>why are you using firebase ? what other options do you have to implement authentication?</h3></Accordion.Header>
 <Accordion.Body>
 firebase is a useful and good authentication service provider.if you use it just simple some step you following then you can use it easily. and firebase is so fast working and trusted site.
some authentication : email and password base authentication  ,Multi-factor authentication,Certificate-based authentication and this type of authentication emplement in some authentication service provider like okta,Amazon Cognito,Parsem,Kuzzle,JSON Web Token and so many site to the  implement in this authentication system.
 </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
 <Accordion.Header><h3 className='fw-bold'>what other  servies does firebase provide other than authentication?</h3></Accordion.Header>
 <Accordion.Body>
 firebase is very useful site and its provide the so many service. like: website hosting,Google Analytics and user behavior,Cloud Messaging,Dynamic Links,Remote Config,Predictions,Cloud Storage,Cloud Functions,Cloud Firestore,Realtime database and firebase ML.
 </Accordion.Body>
</Accordion.Item>

</Accordion>
        </div>
     </div>
    );
};

export default Blog;
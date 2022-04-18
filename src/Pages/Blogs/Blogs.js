import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
           <article className="bolg">
               <h3>qustion-1:  Difference between authorization and authentication.</h3>
           <div className="table-container">
           <table>
               <tr>
               <th> Authentication </th>
               <th> Authorization </th>
               </tr>
               <tr>
                   <td>1. Authenication verifies user identity.</td>
                   <td>1. Authorization detects or determines user accessing resources.</td>
               </tr>
               <tr>
                   <td>1. Athentication process, users or persons are verified.</td>
                   <td>1. Athentication process, users or persons are validated.</td>
               </tr>
               <tr>
               <td>Athentication is done before authorization process.</td>
               <td>Authorization process is done after the authentication process.</td>
               </tr>
            </table>
           </div>
           </article>
           <article className="blog">
               <h3>question-2:  Why are you using firebase? What other options do you have to implement authentication?</h3>
           <p>
           Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app. implement authentication other options 1. Parse ,2. AWS Amplify, 3. Back4App, 4. Backendless, 5. Supabase, 6. appwrite 7. Hasura, 8. Nhost, 9.Deployd 10. Kuzzle.
           </p>
           </article>
           <artical className="blog">
           Except authentication firebase provides 1. Remote Config , 2. Analytics services.
           </artical>
        </div>
    );
};

export default Blogs;
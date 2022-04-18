import React from 'react';

const Blogs = () => {
    return (
        <div>
           <article className="bolg">
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
           </article>
           <article className="blog">
           Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app.
           </article>
           <artical className="blog">
           Except authentication firebase provides 1. Remote Config , 2. Analytics services.
           </artical>
        </div>
    );
};

export default Blogs;
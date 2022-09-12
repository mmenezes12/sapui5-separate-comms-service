# sapui5-separate-comms-service
Implementing paradigma of developing to separate communications methods of odata service, functions logics of business and controllers.  

## What is this?
Reading [this](https://inui.io/sapui5-base-controller/) and [this](https://www.nathanhand.co.uk/blog/post/better-odata-handling-in-ui5-using-promises-part-1) blogs, i created one standard of developing to implement in my sapui5 applications. This standard consiste in developing view controller, bussines data logic/manipulation and the odata service comunications in three separate files.

The XML views use a js files, named controller, to implement manipulate of views components. Normly this file is used to implement business logic and calling of the entitys of services - when the entity not calling directly of xml view -.

## How it works?
 

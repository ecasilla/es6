import User from './user';

(function() {
'use strict';
  
  function UserFindById(id) {
   return User; 
  }

  // This is the var example
  function getUserName(id) {
   if (id) {
     var user = UserFindById(id);
   }
   return user.name;
  }

  //This is the let example

  function letGetUserName(id) {
    if (id) {
      let user = UserFindById(id);
    }
    return user.name;
  }
}());


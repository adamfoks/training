function* addUserToServiceGenerator(user){
    const name = user.name;
    const password = yield `user ${name} added to service`;
    /**feed with password**/
    console.log(`password is ${password}`);
    yield `user logged in with ${password}`;
    /**perform logout**/
    yield 'user logged out';
    return 'end of generator';
  }
  
  const myUser = {
    name: 'Jacek'
  }
  
  const jacekLoginStory = addUserToServiceGenerator(myUser);
  const addJacekToService = jacekLoginStory.next();
  const loginJacekWithPassword = jacekLoginStory.next('pass');
  const logoutJacek = jacekLoginStory.next();
  const endOfStory = jacekLoginStory.next();
  
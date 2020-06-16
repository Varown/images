import AV, {Query, User} from 'leancloud-storage'


AV.init({
  appId: "ufMsLhhTqrIUBjzFO4AuRK6b-gzGzoHsz",
  appKey: "u39Po6BYMzTRE6O4k1uzWOGu",
  serverURL: "https://ufmslhht.lc-cn-n1-shared.com"
});

const Auth={
  register(username,password){
    let user=new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve,reject)=>{
      user.signUp().then(
        loginedUser=>resolve(resolve),
        error=>reject(reject))

    });},

  login(username,password){
    return new Promise((resolve,reject)=>{
     AV.User.logIn(username, password).then(
    loginedUser=>resolve(resolve),
    error=>reject(reject)
  )
})},

  logout(){
    User.logOut();

  },

getCurrentUser(){
    return User.current()
}

};

const Uploader = {
  add(file, filename) {
    const item = new AV.Object('Image');
    const avFile = new AV.File(filename, file);
    item.set('filename', filename);
    item.set('owner', AV.User.current());
    item.set('url', avFile);
    return new Promise((resolve, reject) => {
      item.save().then(serverFile => resolve(serverFile), error => reject(error));
    });
  }
}








export {Auth}
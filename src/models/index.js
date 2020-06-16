import AV, { User} from 'leancloud-storage'


AV.init({
  appId: "23wBe6Q7zmMsGnhXBh5YM71G-gzGzoHsz",
  appKey: "tPIm3QslCu06HtwqJ1KvVqFE",
  serverURL: "https://23wbe6q7.lc-cn-n1-shared.com"
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
  },
  find({page=0, limit=10}) {
    const query = new AV.Query('Image');
    query.include('owner');
    query.limit(limit);
    query.skip(page*limit);
    query.descending('createdAt');
    query.equalTo('owner', AV.User.current());
    return new Promise((resolve, reject) => {
      query.find()
        .then(results => resolve(results))
        .catch(error => reject(error))
    });
  }
}




export {Auth,Uploader}
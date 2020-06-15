import { observable, action } from 'mobx';
import { Auth } from '../models';
import UserStore from  './user'

class AuthStore {

  @observable values = {
    username: '',
    password: ''
  };

  @action setUsername(username) {
    this.values.username = username;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action login() {
    return new Promise((resolve,reject)=>{
      Auth.login(this.values.username, this.values.password)
        .then(user => {
          console.log("登陆成功");
          UserStore.pullUser()
          resolve(user)
        }).catch(err => {
        console.log("登陆失败");
        UserStore.resetUser()
        reject(err)
      })
    })

  }
  @action register() {
    return new Promise((resolve,reject)=>{
      Auth.register(this.values.username, this.values.password)
        .then(user => {
          UserStore.pullUser()
          console.log("注册成功");
          resolve(user)
        }).catch(err => {
          UserStore.resetUser()
        console.log("注册失败");
        reject(err)
      })
    })
  }

  @action logout() {
    Auth.logout()
    UserStore.resetUser()
  }

}


export default new AuthStore()  ;

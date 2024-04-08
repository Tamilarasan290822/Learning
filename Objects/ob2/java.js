let user={
    name:'tamil',
    age:21,
    email:'tamilarasan190503@gmail.com',
    location:'hosur',
    blog:['Youtube','Instagram','Twitter','Facebook'],
    login: function(){
        console.log('user has logged in');
    },
    logout: function(){
        console.log('user has logout');
    },
    logBlogs: function(){
        console.log(this.blog);
    }


};

user.login();

user.logout();

user.logBlogs()

  class APP_URL {
     constructor(){
        this.BASE = `http://localhost:3333`;
        this.API  = `${this.BASE}/api`;
     }

     get _CATEGORY(){
         return `${this.API}/category`
     }

     get _REGISTER(){
         return `${this.API}/auth/register`
     }
 }

 const URL = new APP_URL();
 export {
     URL
 };

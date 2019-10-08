import api from '../component/api'

class login extends api{
    params=[
        {
            key:'id',
            required:true
        },
        {
            key:'content',
            required:true
        }
    ]

    csrfCheck(){
        return true;
    }

    content(){
        return {msg:'Hi, this is an api'}
    }
}

const instance = new login();


export default instance.response;
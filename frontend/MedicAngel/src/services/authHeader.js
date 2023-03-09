export default function authHeader() {
    
    const user = JSON.parse(sessionStorage.getItem("user"));
  
      return { Authorization: 'Bearer ' + user };

  }


  
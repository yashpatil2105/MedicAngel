export default function  bearerHeader() {
    
    const user = JSON.parse(sessionStorage.getItem("user"));
  
      return 'Bearer ' + user ;

  }
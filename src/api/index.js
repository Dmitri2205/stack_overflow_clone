import axios from "axios";


class API {
  constructor() {
    this.search = "/search/advanced?";
    this.clientId = process.env.CLIENT_ID;
    this.secret = process.env.SECRETE;
    this.key = process.env.KEY;
    this.site = process.env.SITE
  }

  requestData = (method, url, params, funcName = undefined) => {
    const headers = { 
      "Accept": "application/json , */*"
    };
    return axios({
      method,
      url,
      headers,
      params
    }).then((response)=>{
        return response;
    }).catch((error)=>{
      console.log(error?.message);
    });
  };

  searchData = (KEY,question) => {
    const queryString = `key=${KEY}&order=desc&sort=activity&q=${question}&filter=withbody&site=stackoverflow`;
    return this.requestData("GET",this.search + queryString,{})
  };

  getTags(){
    return this.requestData("GET","/tags",{});
  };

  getQuestions(question){
    return this.requestData("GET",`https://api.stackexchange.com/2.3/search/advanced?key=${this.key}&order=desc&sort=activity&q=${question}&filter=withbody&site=stackoverflow`,{})
  }

  getUserTags(userId){
    return this.requestData("GET",`/user/${id}/top-tags`,{});
  };

  getUserPopularQuestions(){
    return this.requestData("GET", `/user/${id}/${tags}/top-tags/top-questions`,{});
  };
  checkKEY(){
    return this.key;
  }

  testRequest(){
    return this.requestData("GET",`https://api.stackexchange.com/2.3/tags?key=${this.key}&site=${this.site}&order=desc&sort=popular&filter=default`,{});
  }
}


export const api = new API();
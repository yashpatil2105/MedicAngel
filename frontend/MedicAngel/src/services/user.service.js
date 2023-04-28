import httpClient from '../http-common';
import authHeader from './authHeader';
import bearerHeader from './bearerHeader';

const getAll = () => {
  return httpClient.get('');
};

const signup = (data) => {
  return httpClient.post('auth/signup', data);
};

const signin = (data) => {
  return httpClient.post('auth/signin', data);
};

const getUser = () => {
  return httpClient.get('user/profile',{headers:authHeader()});
};

const updateUser = (data) => {
  return httpClient.put('user/profile', data, {headers:authHeader()});
};


const getUserCampaign= () => {
  return httpClient.get('user/campaign',{headers:authHeader()});
};


const setActivateCampaign= (id) => {
  return httpClient.get(`admin/activate/campaign/${id}`,{headers:authHeader()});
};


const getDeactiveCampaign= () => {
  return httpClient.get('admin/deactive/campaign',{headers:authHeader()});
};

const getActiveCampaign= () => {
  return httpClient.get('admin/active/campaign',{headers:authHeader()});
};


const deleteCampaignbyId= (id) => {
  return httpClient.delete(`admin/campaign/${id}`,{headers:authHeader()});
};



const getDonatePage= (id) => {
  return httpClient.get(`campaign/${id}`);
};

const setUserCampaign= (data) => {
  return httpClient.post('user/campaign',data,{headers:authHeader()});
};

const getDonate= () => {
  return httpClient.get('campaign');
};


const donarPayment= (data,id) => {
  return httpClient.post(`donar/${id}/campaign`,data);
};


const setBmyself= (data,id) => {
  return httpClient.post(`user/benificary/user/${id}`,data,{headers:authHeader()});
};

const setBrelative= (data,id) => {
  return httpClient.post(`user/benificary/relative/${id}`,data,{headers:authHeader()});
};
const setBfriend= (data,id) => {
  return httpClient.post(`user/benificary/friend/${id}`,data,{headers:authHeader()});
};
const setBother= (data,id) => {
  return httpClient.post(`user/benificary/other/${id}`,data,{headers:authHeader()});
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};

const uploadCampImage = (id,formData) => {
  return httpClient.post(`user/${id}/image`,formData ,{headers: {Authorization: bearerHeader(), "Content-Type": "multipart/form-data"}}  )
}


const paymentOrder = (amount) => {
  return httpClient.post(`pay/order/${amount}`);
}

const paymentVerify = (razorpayResponse,donar,id) => {
  return httpClient.post(`pay/verify/${id}`,{razorpayResponse,donar});
}

const getDonars = (id) => {
  return httpClient.get(`donar/${id}/campaign`);
}

export default { getAll, signin, signup, getUser, getDeactiveCampaign, updateUser, remove ,getDonate, getUserCampaign, uploadCampImage, setBmyself, setUserCampaign, setBrelative, setBfriend, setBother, getDonatePage, setActivateCampaign, getActiveCampaign, deleteCampaignbyId, donarPayment,paymentOrder,paymentVerify,getDonars};

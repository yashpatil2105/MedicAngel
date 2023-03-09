import userService from "./user.service";

const Benificary = {};
const campDetail = {};
const getcamp = {};
var imageFile;
var no;

const setBenificary = (benificary,n) => {
  no = n;
  Object.assign(Benificary, benificary);
  console.log(Benificary);
}

const setcampDetail = (camp) => {
  const t = Object.assign(campDetail, camp);
  console.log(campDetail);

}

const uploadData = (image, camp) => {

  imageFile = image;
  console.log(imageFile);

  const t = Object.assign(campDetail, camp);
  console.log(campDetail);

  userService.setUserCampaign(campDetail).then((camp) => {

    Object.assign(getcamp, camp.data);
    console.log(getcamp);

    const formData = new FormData();
    formData.append('imageFile', imageFile);
    userService.uploadCampImage(getcamp.id, formData);

    if (no == 1) {
      userService.setBmyself(Benificary, getcamp.id).then(() => {
        console.log("upload hole data");
        for (const key in getcamp) {
           delete getcamp[key];
        }
        for (const key in Benificary) {
           delete Benificary[key];
        }
        for (const key in campDetail) {
           delete campDetail[key];
        }
        window.location.reload();
      });
    }
    else if (no == 2) {
      userService.setBrelative(Benificary, getcamp.id).then(() => {
        console.log("upload hole data");
        for (const key in getcamp) {
          delete getcamp[key];
        }
        for (const key in Benificary) {
          delete Benificary[key];
        }
        for (const key in campDetail) {
          delete campDetail[key];
        }
        window.location.reload();
      });

    }
    else if (no == 3) {
      userService.setBfriend(Benificary, getcamp.id).then(() => {
        console.log("upload hole data");
        for (const key in getcamp) {
          delete getcamp[key];
        }
        for (const key in Benificary) {
          delete Benificary[key];
        }
        for (const key in campDetail) {
          delete campDetail[key];
        }
        window.location.reload();
      });

    }
    else if (no == 4) {
      userService.setBother(Benificary, getcamp.id).then(() => {
        console.log("upload hole data");
        for (const key in getcamp) {
          delete getcamp[key];
        }
        for (const key in Benificary) {
          delete Benificary[key];
        }
        for (const key in campDetail) {
          delete campDetail[key];
        }
        window.location.reload();
      });

    }

  })
}



export default { setBenificary, setcampDetail, uploadData };
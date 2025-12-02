import { Gender, BusinessCategory } from "zca-js";

api
    .updateProfile({
        profile: {
            name: "Tên Tài Khoản",
            dob: "2000-12-22",
            gender: Gender.Male
        },
        // dành cho zBusiness
        biz: {
            cate: BusinessCategory.TechnologyAndDevices
        }
    })
    .then(console.log)
    .catch(console.error);
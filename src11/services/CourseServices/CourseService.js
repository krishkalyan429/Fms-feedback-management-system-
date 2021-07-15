import axios from "../../axios/axios";

const URL_COURSE_GETBYID= "/coursebyid/{id}/";
const URL_COURSE_UPDATE = "/updatecourse/{id}";
const URL_COURSE_DELETE = "/deletecourse/{id}";
const URL_COURSE_ADD = "/addcourse";
const URL_COURSE_GET_ALL = "/courselist";

export default class CourseService {
    getCourse(id,responseCallBack,catchCallBack){
        axios.get(URL_COURSE_GET+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateCourse(course,responseCallBack,catchCallBack){
        axios.put(URL_COURSE_UPDATE+id,course)
        .then(responseCallBack)
        .catch(catchCallBack);
    }
    
        deleteCourse(id,responseCallBack,catchCallBack){
            axios.delete(URL_COURSE_DELETE+id)
            .then(responseCallBack)
            .catch(catchCallBack);
        }
    
        addCourse(course,responseCallBack,catchCallBack){
            axios.post(URL_COURSE_ADD,course)
            .then(responseCallBack)
            .catch(catchCallBack);
        }
    
        getAllCourses(responseCallBack,catchCallBack){
            axios.get(URL_COURSE_GET_ALL)
            .then(responseCallBack)
            .catch(catchCallBack);
        }
    
    }
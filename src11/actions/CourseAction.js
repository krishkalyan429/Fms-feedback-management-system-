import {ADD_COURSE,UPDATE_COURSE,GET,GET_SELECTED_COURSE ,REMOVE_SELECTED_COURSE,DISPLAY_MESSAGE,REDIRECT_TO_SHOW,REDIRECT_TO_UPDATE} from '../actionTypes/CourseActionTypes';
export const _addCourse = (course) => {
    return {
        type : ADD_COURSE,
        course : course
    }
}

export const _updateCourse = (course) => {
    return {
        type : UPDATE_COURSE,
        course : course
    }
}


export function _showCourse(course = {},message = ""){
    return {
        type : GET_SELECTED_COURSE,
        course : course,
        message : message
    }
}

export function _displayMessage(message) {
    return {
        type : DISPLAY_MESSAGE,
        message : message
    }
}

export function _redirectToUpdate(value,redirectionId) {
    return {
        type : REDIRECT_TO_UPDATE,
        value : value,
        redirectionId : redirectionId
    }
}

export function _redirectToGet(value,redirectionId) {
    return {
        type : REDIRECT_TO_GET,
        value : value,
        redirectionId : redirectionId
    }
}

export function _showAllCourse(courseList = [],message = ""){
    return {
        type : GET_ALL_COURSES,
        courseList : courseList,
        message : message
    }
}
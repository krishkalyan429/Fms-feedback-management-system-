import axios from "../webAxios/axios";

const URL_PARTICIPANT_GETBYID = "/participantbyid/{id}/";
const URL_PARTICIPANT_UPDATE = "/updateparticipant/{id}";
const URL_PARTICIPANT_DELETE = "/deleteparticipant{id}";
const URL_PARTICIPANT_ADD = "/addparticipant";
const URL_PARTICIPANT_GET_ALL = "/participantlist";
export  class ParticipantService {
    getProduct(id,responseCallBack,catchCallBack){
        axios.get(URL_PARTICIPANT_GETBYID+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateProduct(id,responseCallBack,catchCallBack){
        axios.put(URL_PARTICIPANT_UPDATE+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteProduct(id,responseCallBack,catchCallBack){
        axios.delete(URL_PARTICIPANT_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    addProduct(participant,responseCallBack,catchCallBack){
        axios.post(URL_PARTICIPANT_ADD,participant)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllProducts(responseCallBack,catchCallBack){
        axios.get(URL_PARTICIPANT_GET_ALL)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

}

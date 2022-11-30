import axios from "axios";

const API = {
    events: {
        getAll: () => axios.get("api/events/"),
    },
    parkedVehicle: {
        getAll: () => axios.get("api/parked-vehicle")
    }


};

export default API;
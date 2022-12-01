import axios from "axios";

const API = {
    events: {
        getAll: () => axios.get("api/events/"),
    },
    parkedVehicle: {
        getAll: () => axios.get("api/parked-vehicle")
    },
    parkingAreas: {
        getAll: () => axios.get("api/parking-area")
    }


};

export default API;

export const eventsConst = [
    {
        "timestamp": "2093900-1-1903",
        "licensePlate": "ВС4759НВ",
        "licencePlateConfidence": "0.95",
        "cameraId": "1c",
        "cycle": 5
    },
    {
        "timestamp": "2093900-1-1903",
        "licensePlate": "ВС4759НВ",
        "licencePlateConfidence": "0.65",
        "cameraId": "1c",
        "cycle": 5
    },
    {
        "timestamp": "2093900-1-1903",
        "licensePlate": "ВС4759НВ",
        "licencePlateConfidence": "0.85",
        "cameraId": "1c",
        "cycle": 0
    },
    {
        "timestamp": "2093900-1-1903",
        "licensePlate": "ВС4759НВ",
        "licencePlateConfidence": "0.85",
        "cameraId": "1c",
        "cycle": 1
    },
    {
        "timestamp": "2093900-1-1903",
        "licensePlate": "ВС4759НВ",
        "licencePlateConfidence": "0.85",
        "cameraId": "1c",
        "cycle": 1
    },
    {
        "timestamp": "2093900-1-1903",
        "licensePlate": "ВС4759НВ",
        "licencePlateConfidence": "0.85",
        "cameraId": "2c",
        "cycle": 0
    }
]
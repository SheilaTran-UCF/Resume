import DataResume from './cvData';

function* getDataResume() {
    const response = yield DataResume;
    return response;
}

export const api = {
    getDataResume
}
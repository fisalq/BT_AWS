const constants = {
    HOST_URL: process.env.REACT_APP_HOST_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Origin': process.env.REACT_APP_HOST_URL,
    },
    withCredentials: true
};

export default constants;

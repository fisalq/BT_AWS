import CryptoJS from "crypto-js";
import createTransform from "redux-persist/es/createTransform";

const encryptStore = createTransform(
    (inboundState, key) => {
        if (!inboundState) return inboundState;
        const crypt = CryptoJS.AES.encrypt(JSON.stringify(inboundState), key);
        return crypt.toString();
    },
    (outboundState, key) => {
        if (!outboundState) return outboundState;
        const bytes = CryptoJS.AES.decrypt(outboundState, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        return JSON.parse(decrypted);
    },
);
export default encryptStore
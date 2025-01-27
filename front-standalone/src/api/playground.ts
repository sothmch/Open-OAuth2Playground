import { http } from "/@/utils/request";

type Result = {
    code: string;
    msg: string;
    data: {
        request?: object | any;
        response?:object | any;
        rawjson?: object | any;
        example?: object | any;
    }
}

/** Step 2 */
/** Get access_token with code */
export const fetchACToken = (data) => {
    return http.post<Result>("/oauth2/authorization_code", data);
};

/** Get new access_token with refresh_token */
export const fetchRefreshToken = (data) => {
    return http.post<Result>("/oauth2/refresh_token", data);
}

/** Step 3*/
/** Get data from API */
export const fetchApiData = (data) => {
    return http.post<Result>("/api", data);
}
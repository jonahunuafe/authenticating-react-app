import { redirect } from "react-router-dom";

export default function getAuthToken() {
    const token = localStorage.get("token");
    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {            //adding protection to route
    const token = getAuthToken();

    if(!token) {
        return redirect("/auth");
    }

    return null;
}
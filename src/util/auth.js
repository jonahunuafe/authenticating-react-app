export default function getAuthToken() {
    const token = localStorage.get("token");
    return token;
}

export function tokenLoader() {
    return getAuthToken();
}
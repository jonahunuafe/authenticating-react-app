export default function getAuthToken() {
    const token = localStorage.get("token");
    return token;
}
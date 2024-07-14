import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000"; // Update the URL if necessary

const socket = io(SOCKET_URL, { reconnection: true });

export default socket;

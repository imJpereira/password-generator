import createNewPassword from "./assets/modules/generate"
import './assets/css/styles.css';

const button = document.getElementById("generate-password");

button.addEventListener('click', () => {
    const headling2 = document.querySelector(".headling2")

    const newPassword = createNewPassword();
    if (newPassword !== undefined) {
        headling2.innerText = newPassword;
    }
})
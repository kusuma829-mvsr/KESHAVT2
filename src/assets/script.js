let userCount = 2;
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const table = document.getElementById("userTable");
    const countDisplay = document.getElementById("userCount");
    if (!form) return;
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let status = document.getElementById("status").value;
        userCount++;
        let row = `
        <tr>
            <td>${userCount}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>
                <span class="badge ${status === "Active" ? "bg-success" : "bg-danger"}">
                    ${status}
                </span>
            </td>
        </tr>
        `;
        table.innerHTML += row;
        countDisplay.innerText = userCount;
        form.reset();
    });
});
const inputform = document.getElementById('forminput');
const resp = document.getElementById('apiresp');

inputform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const jsonInput = document.getElementById("input").value;

    try {
        const resp = fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `jsonInput=${encodeURIComponent(jsonInput)}`,
        });
        const respData =  resp.json();
        respdiv.innerHTML = `<p>${JSON.stringify(respData, null)}</p>`;
    }catch (error) {
        respdiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
})
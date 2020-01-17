const node = document.getElementsByClassName(".ip2")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
		var plainText = document.getElementById("ip2").value;
        console.log(forge_sha256(plainText))
    }
});
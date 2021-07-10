var penumpang = ["Supir"];

function tambahPenumpang(namaPenumpang) {
	if (penumpang.length == 0) {
		penumpang.push(namaPenumpang);

		return penumpang;
	} else {
		if (penumpang.length != 15) {
			for (let i = 0; i < penumpang.length; i++) {
				if (penumpang[i] == undefined) {
					penumpang[i] = namaPenumpang;
					document.getElementById("index" + i).style.background =
						"#bada55";
					document.getElementById("penumpang" + i).innerHTML =
						"- " + namaPenumpang;

					return penumpang;
				} else if (penumpang[i] == namaPenumpang) {
					alert(namaPenumpang + " sudah ada di dalam angkot!");

					return penumpang;
				} else if (i == penumpang.length - 1) {
					penumpang.push(namaPenumpang);
					document.getElementById(
						"index" + (i + 1)
					).style.background = "#bada55";
					document.getElementById("penumpang" + (i + 1)).innerHTML =
						"- " + namaPenumpang;

					return penumpang;
				}
			}
		} else {
			alert("Kursi penumpang sudah penuh!");
		}
	}
}

function hapusPenumpang(namaPenumpang) {
	if (penumpang.length == 0) {
		alert("Angkot masih kosong!");
		return penumpang;
	} else {
		for (let i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;
				document.getElementById("index" + i).style.background =
					"#ee6969";
				document.getElementById("penumpang" + i).innerHTML = "";
				break;
			} else if (i == penumpang.length - 1) {
				alert(namaPenumpang + " tidak ada di dalam angkot!");
			}
		}
	}

	return penumpang;
}

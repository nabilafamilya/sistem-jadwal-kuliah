function cariJadwal() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const daftar = document.querySelectorAll("#hasilJadwal li");
    let ditemukan = 0;

    daftar.forEach((item) => {
        const cocok = item.textContent.toLowerCase().includes(input);
        item.style.display = cocok ? "" : "none";

        if (cocok) {
            ditemukan++;
        }
    });

    document.getElementById("pesan").textContent =
        ditemukan === 0 ? "Jadwal tidak ditemukan." : "";
}

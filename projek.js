// script.js
const form = document.getElementById('formIzin');
const daftarIzin = document.getElementById('daftarIzin');
const pesanKosong = document.getElementById('pesanKosong');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari input
    const nama = document.getElementById('nama').value;
    const alasan = document.getElementById('alasan').value;
    const tgl = document.getElementById('tgl').value;

    // 1. Tampilkan Animasi Sukses menggunakan SweetAlert2
    Swal.fire({
        title: 'Berhasil!',
        text: 'Izin atas nama ' + nama + ' telah diajukan ke Ustadz.',
        icon: 'success',
        confirmButtonColor: '#16a34a'
    });

    // 2. Hapus pesan "Belum ada riwayat" jika ada
    if (pesanKosong) {
        pesanKosong.style.display = 'none';
    }

    // 3. Tambahkan kotak riwayat baru ke bawah
    const itemBaru = document.createElement('div');
    itemBaru.className = "bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500 animate-bounce mb-3";
    itemBaru.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <p class="font-bold text-gray-800">${alasan}</p>
                <p class="text-xs text-gray-500">${tgl}</p>
            </div>
            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Pending</span>
        </div>
    `;
    
    // Masukkan ke daftar paling atas
    daftarIzin.prepend(itemBaru);

    // Reset form setelah kirim
    form.reset();
});
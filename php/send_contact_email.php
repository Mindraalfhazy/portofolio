<?php
$to_email = "mindraalfhazy@gmail.com"; // Ganti dengan alamat email penerima yang ingin Anda gunakan

// Kode pemrosesan dan pengiriman email

if (mail($to_email, $subject, $message, $headers)) {
  echo "Sukses mengirim";
} else {
  echo "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.";
}
?>

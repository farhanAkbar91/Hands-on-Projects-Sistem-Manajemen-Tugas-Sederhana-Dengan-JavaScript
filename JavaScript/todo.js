// Import library
const prompt = require('prompt-sync')({ sigint: true });

// Data to-do list
let todoList = [];

// Fungsi untuk menampilkan menu
function showMenu() {
  console.log("\n=== To-Do List ===");
  console.log("1. Tampilkan semua tugas");
  console.log("2. Tambah tugas");
  console.log("3. Tandai tugas selesai");
  console.log("4. Hapus tugas");
  console.log("5. Keluar");
  const choice = prompt("Pilih menu (1-5): ");
  return choice;
}

// Fungsi untuk menampilkan semua tugas
function showTasks() {
  if (todoList.length === 0) {
    console.log("\nTidak ada tugas dalam daftar.");
  } else {
    console.log("\nDaftar Tugas:");
    todoList.forEach((task, index) => {
      const status = task.completed ? "[✔]" : "[ ]";
      console.log(`${index + 1}. ${status} ${task.text}`);
    });
  }
}

// Fungsi untuk menambah tugas
function addTask() {
  const taskText = prompt("Masukkan nama tugas: ").trim();
  if (taskText) {
    todoList.push({ text: taskText, completed: false });
    console.log("Tugas berhasil ditambahkan!");
  } else {
    console.log("Nama tugas tidak boleh kosong.");
  }
}

// Fungsi untuk menandai tugas selesai
function completeTask() {
  showTasks();
  if (todoList.length === 0) return;

  const index = parseInt(prompt("Masukkan nomor tugas yang selesai: "), 10) - 1;
  if (index >= 0 && index < todoList.length) {
    todoList[index].completed = true;
    console.log("Tugas berhasil ditandai selesai!");
  } else {
    console.log("Nomor tugas tidak valid.");
  }
}

// Fungsi untuk menghapus tugas
function deleteTask() {
  showTasks();
  if (todoList.length === 0) return;

  const index = parseInt(prompt("Masukkan nomor tugas yang ingin dihapus: "), 10) - 1;
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
    console.log("Tugas berhasil dihapus!");
  } else {
    console.log("Nomor tugas tidak valid.");
  }
}

// Program utama
function main() {
  while (true) {
    const choice = showMenu();
    switch (choice) {
      case "1":
        showTasks();
        break;
      case "2":
        addTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        console.log("Keluar dari program. Sampai jumpa!");
        return;
      default:
        console.log("Pilihan tidak valid. Coba lagi.");
    }
  }
}

// Menjalankan program utama
main();
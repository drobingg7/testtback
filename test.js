// Создаём файл на рабочем столе
var fso = new ActiveXObject("Scripting.FileSystemObject");
var desktop = fso.GetSpecialFolder(0); // 0 = Desktop
var filePath = desktop + "\\proof.txt";
var file = fso.CreateTextFile(filePath, true);
file.WriteLine("Скрипт выполнился!");
file.Close();
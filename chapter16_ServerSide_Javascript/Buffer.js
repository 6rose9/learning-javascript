//A buffer is a temporary memory area used to store data 
//while it’s being transferred from one place to another.

//raw bytes (low-level data)
// built-in class (type of object)

//To smooth out speed differences between processes.

//Example: When streaming a video, a buffer stores a few seconds ahead so playback doesn’t pause.

// 0x41 is a hexadecimal (base-16) number.
// In decimal, 0x41 = 65
// In ASCII, 65 = 'A'

let b = Buffer.from([0x41, 0x42, 0x43]);
console.log(b); // memory byte array
console.log(b.toString());
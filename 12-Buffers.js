// Contoh Buffer
buf = new Buffer(26);
for (let index = 0; index < 26; index++) {
  buf[index] = index + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));
console.log()

// Convert Buffer to JSON
console.log("Convert Buffer to JSON");
var buf = new Buffer("Simply Easy Learning");
var json = buf.toJSON(buf);
console.log(json);
console.log()

// Concatenate Buffers
console.log("Concatenate Buffers");
var buffer1 = new Buffer("Hayyy ");
var buffer2 = new Buffer("kamuuu");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("Campuran " + buffer3);
console.log("Campuran " + buffer3.toString());
console.log();

// Compare Buffers
console.log("Compare Buffers");
var bufferA = new Buffer("ABC");
var bufferB = new Buffer("ABCD");
var resultAB = bufferA.compare(bufferB);
console.log("hasilnya " + resultAB);

if (resultAB < 0) {
  console.log(bufferA + " comes before BEDA " + bufferB);
} else if (resultAB === 0) {
  console.log(bufferA + " is same as " + bufferB);
} else {
  console.log(bufferA + " comes after " + bufferB);
}
console.log();

// Copy Buffers
console.log("Copy Buffers");
var bufferX = new Buffer("kopi nih wadidaw");
// var bufferY = new Buffer(8);
var panjangBufferX = bufferX.length;
console.log(panjangBufferX)
var bufferY = new Buffer(panjangBufferX);
bufferX.copy(bufferY)
console.log("hasilnya " + bufferY);
console.log("hasilnya " + bufferY.toString());
console.log();

// Slice Buffers
console.log("Slice Buffers");
var bufferR = new Buffer("kopi nih wadidaw");
var bufferS = bufferR.slice(0, 4);
console.log(bufferS);
console.log(bufferS.toString());
console.log();
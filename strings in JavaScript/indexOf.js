const song = "Oppan Gangnam Style";
console.log(song.indexOf("pan")) // 2
// The indexOf method returns the index of the first occurrence of the specified substring. In this case, "pan" starts at index 2.
console.log(song.indexOf("Gang"));
console.log(song.indexOf("oppan")) //-1
// The indexOf method is case-sensitive. Since "Oppan" (with an uppercase "O") is in the string and "oppan" (with a lowercase "o") is not, the method returns -1, indicating that the substring is not found.

var data = [
    ["tasdiq", 20, "Male", "B.Sc"],
    ["nusu", 19, "Male", "B.Sc"],
    ["mim", 20, "FeMale", "B.Sc"],
    ["rishan", 19, "Male", "B.Sc"],
    ["orna", 20, "FeMale", "B.Sc"],

];

document.write("<table border='1px' cellspacing='0px'>");
for( var a = 0; a < data.length; a++){
    document.write("<tr>");
    for( var b = 0; b < data[a].length; b++){
        document.write("<td>"+ data[a][b] + "</td>");
    }
    document.write("</tr>");

}
document.write("</table>");
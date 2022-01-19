var str = "masai"

var str2 = "sai"

//var strOut = ""


for(var i = 0;i<str.length;i++){
    var strOut = ""

    for(var j = i;j<str.length;j++){
        strOut = strOut + str[j]
        console.log(strOut)
    }
}
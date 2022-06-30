$("#convert").click(function(){
    let textToConvert = $("#text").val()
    let finalText = ""

    for(let i = textToConvert.length - 1;i >= 0; i--){
        finalText += textToConvert[i]
    }

    $("#finalText").val(finalText)
})

$("#copy").click(function(){
    copyToClipboard($("#finalText").val())
})

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
};
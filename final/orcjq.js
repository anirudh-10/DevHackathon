//Prepare form data
var formData = new FormData();
//formData.append("file", "abcd.pdf");
formData.append("url", "https://www.azquotes.com/picture-quotes/quote-maybe-we-should-all-just-listen-to-records-and-quit-our-jobs-jack-white-81-40-26.jpg");
formData.append("language"   , "eng");
formData.append("apikey"  , "22624a5e2c88957");
formData.append("isOverlayRequired", true);
//Send OCR Parsing request asynchronously
jQuery.ajax({
url: "https://api.ocr.space/parse/image",
data: formData,
dataType: 'json',
cache: false,
contentType: false,
processData: false,
type: 'POST',
success: function (ocrParsedResult) {
console.log("IN");
//Get the parsed results, exit code and error message and details
var parsedResults = ocrParsedResult["ParsedResults"];
var ocrExitCode = ocrParsedResult["OCRExitCode"];
var isErroredOnProcessing = ocrParsedResult["IsErroredOnProcessing"];
var errorMessage = ocrParsedResult["ErrorMessage"];
var errorDetails = ocrParsedResult["ErrorDetails"];
var processingTimeInMilliseconds = ocrParsedResult["ProcessingTimeInMilliseconds"];
//If we have got parsed results, then loop over the results to do something
if (parsedResults== null){
console.log("no result");
}
if (parsedResults!= null) {
console.log("IN IN");
//Loop through the parsed results
$.each(parsedResults, function (index, value) {
var exitCode = value["FileParseExitCode"];
var parsedText = value["ParsedText"];
var errorMessage = value["ParsedTextFileName"];
var errorDetails = value["ErrorDetails"];
var textOverlay = value["TextOverlay"];
var pageText = 'start';
switch (+exitCode) {
case 1:
console.log("IN IN IN ");
pageText = parsedText;
console.log(pageText);
$(function() {
$('a.say').on('click',function(e){
e.preventDefault();
console.log(pageText);
var url = "http://translate.google.com/translate_tts?tl=en&q=" + pageText + "&client=tw-ob";
$('audio').attr('src', url).get(0).play();
});
});
break;
case 0:
case -10:
case -20:
case -30:
case -99:
default:
pageText += "Error: " + errorMessage;
break;
}

$.each(textOverlay["Lines"], function (index, value) {
//..........................
//..........................
//..........................
//LOOP THROUGH THE LINES AND GET WORDS TO DISPLAY ON TOP OF THE IMAGE AS OVERLAY
//..........................
//..........................
//..........................
});

//..........................
//..........................
//..........................
//YOUR CODE HERE
//..........................
//..........................
//..........................
});
}
}
});

console.log("out");


/*$(document).ready(function(){
	$.ajax({
		"url":"_view/books",
		"dataType":"json",
		"success":function(data){
			$.each(data.rows, function(index, book){
				var title = book.value.Title;
				var author = book.value.Author;
				var descrip = book.value.Description;
				$("#newBooks").append(
					$("<li>").text("Title: " + title).append(
						$("<li>").text("Author: " + author)
					).append(
						$("<li>").text("Description: " + descrip)
					)
				);
			});
			$("#newBooks").listview("refresh");
		}
	})
	
});*/

$(document).on("pageinit", "#viewBook", function(){
	$.couch.db("bookapp").view("bookapp/books", {
		success: function(data){
			$("#newBooks").empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$("#newBooks").append(
					$("<li>").append(
						$("<a>")
							.attr("href", "books.html?books=" + item.Title)
							.text(item.Title)
					)
				);
			});
			$("#newBooks").listview("refresh");
		}
	});
});

/*var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url")
	var urlParts = urlData.split("?");
	var urlPairs = urlParts[1].split("&");
	var urlValues = {};
	for (var pair in urlPairs){
		var keyVal = urlPairs[pair].split("=");
		var key = decodeURIComponent(keyVal[0]);
		var value = decodeURIComponent(keyVal[1]);
		urlValues[key]=value;
	}
	return urlValues;
	
};*/

$(document).on("pageinit", "#books", function(){
	var urlData = $(this).data("url");
	var urlParts = urlData.split("?");
	var urlPairs = urlParts[1].split("&");
	var urlValues = {};
	for (var pair in urlPairs){
		var keyVal = urlPairs[pair].split("=");
		var key = decodeURIComponent(keyVal[0]);
		var value = decodeURIComponent(keyVal[1]);
		urlValues[key]=value;
	}
		
	});



/**
 * @author Zac Croasmun
 */


$(function(){
	
	var parseAddForm = function (data) {
  
  //console.log(data);
};
	
	var addForm = $("#bookForm"),
		addErrLink = $("#addErrLink")
	;
	
	addForm.validate({
		invalidHandler: function(form, validator){
			addErrLink.click();
			var html = "";
			for(var key in validator.submitted){
				var label = $("label[for^='"+key+"']").not("[generated]");
				var legend = label.closest("fieldset").find(".ui-controlgroup-label");
				var fieldName = legend.lenght ? legend.text() : label.text();
				html += "<li>" + fieldName + "</li>";
			};
			$("#formErrors ul").html(html);
			
		},
		submitHandler: function(){
			var data = addForm.serializeArray();
			parseAddForm(data);
			
			}
		
		
	});
	
	function store(key){
		if(!key){
		var id = Math.floor(Math.random()*10000001);
		}else{
			id = key;
		}
		
		var listItem = {};
			listItem.Title =       [$("#bTitle").val()];
			listItem.Author =       [$("#bAuthor").val()];
			listItem.Discription =        [$("#bDisc").val()];
			
			
			localStorage.setItem(id, JSON.stringify(listItem));
			alert("book Saved!");
			window.location.reload();
			
	}
	
	
	function autoFill(){
		for(var n in json){
			var id = Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
			
		}
		
	}
	
	
	
	function display(){
		if(localStorage.length === 0){
			var conf = confirm("do you want to add some")
			if(conf===true){
				autoFill();
			}
			else{
				
			}
			
		}else{
			var storage = window.localStorage;
			var List = "<h3>BOOKS</h3>";
			for(var key in storage ){
				var bookName = storage[key];
				
				List += "<ul>"+
						"<li>"+
						bookName+
						autoFill();+
						"</li>"+
						"</ul>";
						
						$("#bookList").html(List);
			}	
		}	
	}
	function clearData () {
	  if(localStorage.length === 0){
	  alert("no data")
	  }else{ 
	  	localStorage.clear();
	  	alert("books deleted!");
	  	window.location.reload();
	  	return false;
	   }
	}
	
	
	$("#bookForm").on("submit", store)
	$("#clearStorage").click(clearData)
	display();
	
	console.log(localStorage);
	
});

function(doc){
	if(doc._id.substr(0, 5)==="book:"){
		emit(doc._id.substr(5),{
			"Title":doc.Title,
			"Author":doc.Author,
			"Description":doc.Description
		});
	}
	
};
var db = rootRequire('./odbc/osc');

function getOSC(req, res) {
	var id = req.params.id;
	db.getOSC(id, function(result){
		res.send(result);
	});
}

module.exports = {  
	getOSC: getOSC
}
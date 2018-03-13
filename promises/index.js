var hotel = {
	getFood : function() {

		var promise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				reject("got rejected...");
			}, 5000);

		/*if (// everything turned out fine) {
		    resolve("Stuff worked!");
		}else {
		    reject(Error("It broke"));
		}*/


		});
		
		return promise;
	}
};

var trainer = {
	doTeach : function() {
		console.log('First entry...');
		var promise=hotel.getFood();
		console.log('got promise...');
		promise.then(function(success) {
			console.log('next operation');
		}, function(error) {
			console.log('error display');
		});
		console.log('last....end');
	}
};

trainer.doTeach();
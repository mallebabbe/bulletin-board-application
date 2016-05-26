// check if DOM got loaded
$('document').ready ( function ( ) {
	console.log("DOM is ready")
//var inputLetters that contains an object with a key userNameSearch that stores the letters from #searchfield 	
var messageForm = {
	titel: $('#title-message'),
	body: $('#body-message')
}
console.log(messageForm)

// $ ( '' ) .click( function() {
// 	$('#searchfield').val($(this).val())
// 	console.log('clicked')
// })

		$.post('/api', messageForm, function (data) {
			// console.log("api connected")
			// for (messages in data) {

			// }				

			})
})


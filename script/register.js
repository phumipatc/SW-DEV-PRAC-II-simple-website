/* when form is submitted, check each fields */
function validateForm() {
	// check company-name, booth-size, table, chair-num, contact-name, contact-tel
	var companyName = document.forms["register"]["company-name"].value;
	var boothSize = document.forms["register"]["booth-size"].value;
	var table = document.forms["register"]["table"].value;
	var chairNum = document.forms["register"]["chair-num"].value;
	var contactName = document.forms["register"]["contact-name"].value;
	var contactTel = document.forms["register"]["contact-tel"].value;

	// log the values
	// console.log("companyName: " + companyName);
	// console.log("boothSize: " + boothSize);
	// console.log("table: " + table);
	// console.log("chairNum: " + chairNum);
	// console.log("contactName: " + contactName);
	// console.log("contactTel: " + contactTel);

	if(companyName == "") {
		alert("Please enter company name");
		return false;
	}

	if(chairNum < 1 || chairNum > 10) {
		alert("Please select number of chairs between 1 and 10");
		return false;
	}

	if(contactName == "") {
		alert("Please enter contact name");
		return false;
	}

	if(contactTel == "") {
		alert("Please enter contact telephone number");
		return false;
	}

	// show the success message and clear the form
	alert("Registration successful!");
	document.forms["register"].reset();
	return true;
}


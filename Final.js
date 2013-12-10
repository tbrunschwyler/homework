			var form = document.querySelector('form');
			form.addEventListener('submit', function (e) {
				var errors, i, errorDiv, namePattern, emailPattern, websitePattern, phonePattern, agePattern, emptyWordPattern, mealPreference, experienceLevel, skills, radioCheck;
				
				errors = [];
				errorDiv = document.getElementById('error');
				mealPreference = document.getElementsByName('mealPref');
				experienceLevel = document.getElementsByName('experience');
				skills = document.getElementsByName('skills');
				namePattern = /^[a-z]{02,50}$/i;
				emailPattern = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
				websitePattern = /^([a-z]+(:\/\/)?)+[a-z0-9]+[\.][a-z0-9]+[\.]+[a-z0-9]+[^"\r\n]*/;
				threeWordPattern = /^[a-z0-9]+[ ]+[a-z0-9]+[ ]+[a-z0-9]+[^"\r\n]$/;
				twoWordPattern = /^[a-z0-9]+[ ]+[a-z0-9]+[^"\r\n]$/;
				oneWordPattern = /^[a-z0-9]+[^"\r\n]$/;
				emptyWordPattern = /^[ ]+/;
				phonePattern = /^\(\d{3}\) ?\d{3}( |-)?\d{4}|^\d{3}( |-)?\d{3}( |-)?\d{4}/;
				agePattern = /^[0-9]{1,3}$/;

				//Validate First Name
				if (namePattern.test(this.first_name.value) === false) {
					errors.push('First name must be between 2 and 50 letters.');
				}
				//Validate Last Name
				if (namePattern.test(this.last_name.value) === false) {
					errors.push('Last name must be between 2 and 50 letters.');
				}
				//Validate Age
				if (this.age.value.length > 0) {
					if (agePattern.test(this.age.value) === false) {
					errors.push('Enter your age as a number. No Roman numerals please.')
					}
				}
				//Validate Email
				if (emailPattern.test(this.email.value) === false) {
					errors.push('Enter a valid email address. ex.yoda@aol.com');
				}
				//Validate Website
				if (websitePattern.test(this.website.value) === false) {
					errors.push('Enter a valid website address. ex. http://www.gog.com');
				}
				//Validate Phone
				if (this.phone.value.length > 0) {
					if (phonePattern.test(this.phone.value) === false) {
					errors.push('Enter a valid phone number, with or without dashes and spaces.');
					}
				}
				//Validate Bio
				if (this.bio.value.length > 140) {
					errors.push('Your bio must be between 25 and 140 characters.')
				}
				if (this.bio.value.length < 25){
					errors.push("Your bio is too short.");
				}
				if (threeWordPattern.test(this.bio.value) === true) {
					errors.push('Your bio is only three words. Write some more.');
				} else
				if (twoWordPattern.test(this.bio.value) === true) {
					errors.push('Your bio is only two words. Write some more.');
				} else
				if (oneWordPattern.test(this.bio.value) === true) {
					errors.push('Your bio is only one word. Write some more.');
				} else
				if (emptyWordPattern.test(this.bio.value) === true) {
					errors.push('Spaces are leading your bio. Remove them.');
				}
				//Check Meal Preference
				radioCheck = true;

				for (i = 0; i < mealPreference.length; i += 1) {
						if(mealPreference[i].checked === true) {
						radioCheck = false;
					}
				}
				if(radioCheck === true) {
						errors.push('Select a meal preference.');
					}
				//Check Experience Level
				radioCheck = true;

				for (i = 0; i < experienceLevel.length; i += 1) {
						if(experienceLevel[i].checked === true) {
						radioCheck = false;
					}
				}
				if(radioCheck === true) {
						errors.push('Select an experience level.');
					}
				//Skills
				radioCheck = true;

				for (i = 0; i < skills.length; i += 1) {
						if(skills[i].checked === true) {
						radioCheck = false;
					}
				}
				if(radioCheck === true) {
						errors.push('Select a certain set of skills.');
					}

				//If any inputs failed prevent form submit
				if (errors.length > 0) {
					//prevent form submit
					e.preventDefault();
					
					//unhide
					errorDiv.className = '';
					
					//clear out previous errors
					errorDiv.innerHTML = errors.join('<br>');
				}
			}, false);


firstName = document.getElementById("first_name");
lastName = document.getElementById("last_name");


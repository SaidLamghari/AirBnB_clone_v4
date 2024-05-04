$(document).ready(function() {
	    // Variable to store checked amenities
	//     var checkedAmenities = {};
	//
	//         // Listen for changes on each input checkbox tag
	//             $('input[type="checkbox"]').change(function() {
	//                     var amenityId = $(this).data('id');
	//                             var amenityName = $(this).data('name');
	//
	//                                     // If the checkbox is checked, store the Amenity ID in the variable
	//                                             if ($(this).is(':checked')) {
	//                                                         checkedAmenities[amenityId] = amenityName;
	//                                                                 } else {
	//                                                                             // If the checkbox is unchecked, remove the Amenity ID from the variable
	//                                                                                         delete checkedAmenities[amenityId];
	//                                                                                                 }
	//
	//                                                                                                         // Update the h4 tag inside the Amenities div with the list of checked Amenities
	//                                                                                                                 var amenitiesList = Object.values(checkedAmenities).join(", ");
	//                                                                                                                         $('#amenities-list').text(amenitiesList);
	//                                                                                                                             });
	//                                                                                                                             });
	//
	//                                                                                                                             $.ajax({
	//                                                                                                                               url: 'http://0.0.0.0:5001/api/v1/status/',
	//                                                                                                                                 type: 'GET',
	//                                                                                                                                   dataType: 'json',
	//                                                                                                                                     success: function (json) {
	//                                                                                                                                         $('#api_status').addClass('available');
	//                                                                                                                                           },
	//
	//                                                                                                                                             error: function (xhr, status) {
	//                                                                                                                                                 console.log('error ' + status);
	//                                                                                                                                                   }
	//
	//                                                                                                                                                   });
	//
	//                                                                                                                                                   $.ajax({
	//                                                                                                                                                     type: 'POST',
	//                                                                                                                                                       url: 'http://0.0.0.0:5001/api/v1/places_search',
	//                                                                                                                                                         dataType: 'json',
	//                                                                                                                                                           data: '{}',
	//                                                                                                                                                             contentType: 'application/json; charset=utf-8',
	//                                                                                                                                                               success: function (places) {
	//                                                                                                                                                                   for (let i = 0; i < places.length; i++) {
	//                                                                                                                                                                         $('.places').append(`<article>
	//                                                                                                                                                                         <div class="title_box">
	//                                                                                                                                                                         <h2> ${places[i].name}</h2>
	//                                                                                                                                                                         <div class="price_by_night"> ${places[i].price_by_night} </div>
	//                                                                                                                                                                         </div>
	//                                                                                                                                                                         <div class="information">
	//                                                                                                                                                                         <div class="max_guest">${places[i].max_guest}
	//                                                                                                                                                                         ${places[i].max_guest > 1 ? 'Guests' : 'Guest'} </div>
	//                                                                                                                                                                         <div class="number_rooms">${places[i].number_rooms}
	//                                                                                                                                                                         ${places[i].number_rooms > 1 ? 'Bedrooms' : 'Bedroom'}  </div>
	//                                                                                                                                                                         <div class="number_bathrooms">${places[i].number_bathrooms}
	//                                                                                                                                                                         ${places[i].number_bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}  </div>
	//                                                                                                                                                                         </div>
	//                                                                                                                                                                         <div class="user">
	//                                                                                                                                                                         </div>
	//                                                                                                                                                                         <div class="description">
	//                                                                                                                                                                         ${places[i].description}
	//                                                                                                                                                                         </div>
	//                                                                                                                                                                         </article>
	//                                                                                                                                                                         `);
	//                                                                                                                                                                             }
	//                                                                                                                                                                               },
	//                                                                                                                                                                                 error: function (xhr, status) {
	//                                                                                                                                                                                     console.log('error ' + status);
	//                                                                                                                                                                                       }
	//                                                                                                                                                                                       });

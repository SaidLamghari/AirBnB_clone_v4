$(document).ready(function() {
    // Variable to store checked amenities
    var checkedAmenities = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        // If the checkbox is checked, store the Amenity ID in the variable
        if ($(this).is(':checked')) {
            checkedAmenities[amenityId] = amenityName;
        } else {
            // If the checkbox is unchecked, remove the Amenity ID from the variable
            delete checkedAmenities[amenityId];
        }

        // Update the h4 tag inside the Amenities div with the list of checked Amenities
        var amenitiesList = Object.values(checkedAmenities).join(", ");
        $('#amenities-list').text(amenitiesList);
    });
});

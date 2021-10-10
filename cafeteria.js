
$(document).ready(function () {

    /*-------------- Cafeteria Menu - Start --------------*/

    var urlCafeteriaMenuDay = "http://sharqweb1.sabic.com/Cafeteria_Menu/Lists/cafeteria_menu_";

    if (window.location.href.indexOf(urlCafeteriaMenuDay) > -1) {

        // Order Form Styling
        $('.ms-formtable tr > td hr').remove();
        //$('.ms-formtable > tbody > tr:first-child').remove();
        $('.ms-formtable th.ms-gridT1').css('width', '900px');
        $('.ms-formtable > tbody > tr > td.ms-formlabel').css({ 'margin-top': '10px', 'padding': '10px', 'text-size': '12px' });
        $('.ms-formtable > tbody > tr > td.ms-formlabel .ms-standardheader').css({ 'font-size': '1.1em', 'font-weight': 'bold', });
        $('.ms-formtable > tbody > tr > td.ms-formlabel').closest('tr').before('<tr><td colspan="2" style="background-color: #ffffff; height: 10px;">&nbsp;</td></tr>');
        $('.ms-formtable > tbody > tr > td.ms-formlabel .ms-accentText').css('color', 'red');
        $('.ms-formtable > tbody > tr, .ms-formtable td.ms-formbody').css({ 'position': 'relative', 'padding': '10px' });
        $('.ms-formtable .ms-metadata, .ms-formtable .ms-descriptiontext').css({ 'position': 'absolute', 'top': '0', 'left': '100%', 'width': '425px', 'margin-left': '5px', 'background-color': '#fffce6', 'line-height': '150%', 'border': '1px solid rgb(255, 233, 128)', 'color': '#777', 'padding': '10px' });
        $('.ms-formtable > tbody > tr > td.ms-formlabel').parent('tr').css('background-color', '#ffe980');


        // Calories Styling
        $('label').html(function (i, h) {
            return h.replace(/(\(.+\))/g, '<span style="color: red;">$1</span>');
        });


        // Change Title to Open (Text)
        $('.ms-listlink.ms-draggable').text('Open');


        // Main Dishes Limit Setting
        var cafemenulimit = 2;
        $(".ms-standardheader > nobr:contains('Main Dishes')").closest("tr").children('td.ms-formbody').find("input[type='checkbox']").on('change', function (evt) {
            if ($(this).closest('tr').siblings().children('td').find("input[type='checkbox']:checked").length >= cafemenulimit) {
                this.checked = false;
            }
        });

        // Soup Menu Limit Setting
        var cafesouplimit = 2;
        $(".ms-standardheader > nobr:contains('Soup & Salona')").closest("tr").children('td.ms-formbody').find("input[type='checkbox']").on('change', function (evt) {
            if ($(this).closest('tr').siblings().children('td').find("input[type='checkbox']:checked").length >= cafesouplimit) {
                this.checked = false;
            }
        });


        // Main Menu Selection Setting (Main Dishes / Diet)
        $(".ms-standardheader > nobr:contains('Main Dishes')").closest("tr").css({ "display": "none", "visibility": "hidden" });

        $('select.ms-RadioText[title="Main Menu Required Field"]').change(function () {
            if ($(this).val() === 'Normal') {
                $(this).parent().siblings().text('Select Main Dishes');
                $(".ms-standardheader > nobr:contains('Main Dishes')").closest("tr").css({ "display": "table-row", "visibility": "visible" });
            }
            if ($(this).val() === 'Chicken & Vegetable Diet - (265 Cal/AS Full Meal)') {
                $(this).parent().siblings().text('Chicken & Vegetable Diet - (265 Cal/AS Full Meal)'); //Diet Menu
                $(".ms-standardheader > nobr:contains('Main Dishes')").closest("tr").css({ "display": "none", "visibility": "hidden" });
                $(".ms-standardheader > nobr:contains('Main Dishes')").closest("tr").children('td.ms-formbody').find("input[type='checkbox']").prop("checked", false);

            }
            if ($(this).val() === '') {
                $(this).parent().siblings().text('Select Menu');
                $(".ms-standardheader > nobr:contains('Main Dishes')").closest("tr").css({ "display": "none", "visibility": "hidden" });
            }
        });


        // Drink Menu Selection Setting (Soft Drink / else)
        $(".ms-standardheader > nobr:contains('Soft Drink')").closest("tr").css({ "display": "none", "visibility": "hidden" });
        $('select.ms-RadioText[title="Drink"]').change(function () {
            if ($(this).val() === 'Soft Drink') {
                $(".ms-standardheader > nobr:contains('Soft Drink')").closest("tr").css({ "display": "table-row", "visibility": "visible" });
            }
            else {
                $(".ms-standardheader > nobr:contains('Soft Drink')").closest("tr").css({ "display": "none", "visibility": "hidden" });
            }
        });



        // Soft Drink Menu Selection Setting (Juice / Beverages (Coke))
        /*Beverages (Coke)*/
        $(".ms-standardheader > nobr:contains('Beverages (Coke)')").closest("tr").css({ "display": "none", "visibility": "hidden" });
        $('select.ms-RadioText[title="Soft Drink"]').change(function () {
            if ($(this).val() === 'Beverages (Coke)') {
                $(".ms-standardheader > nobr:contains('Beverages (Coke)')").closest("tr").css({ "display": "table-row", "visibility": "visible" });
                $(".ms-standardheader > nobr:contains('Juices')").closest("tr").children('td.ms-formbody').find("input[type='radio']").prop("checked", false);
            }
            else {
                $(".ms-standardheader > nobr:contains('Beverages (Coke)')").closest("tr").css({ "display": "none", "visibility": "hidden" });
            }
        });
        /*Juices*/
        $(".ms-standardheader > nobr:contains('Juices')").closest("tr").prev('tr').remove();
        $(".ms-standardheader > nobr:contains('Juices')").closest("tr").css({ "display": "none", "visibility": "hidden" });
        $('select.ms-RadioText[title="Soft Drink"]').change(function () {
            if ($(this).val() === 'Juice') {
                $(".ms-standardheader > nobr:contains('Juices')").closest("tr").css({ "display": "table-row", "visibility": "visible" });
                $(".ms-standardheader > nobr:contains('Beverages (Coke)')").closest("tr").children('td.ms-formbody').find("input[type='radio']").prop("checked", false);
            }
            else {
                $(".ms-standardheader > nobr:contains('Juices')").closest("tr").css({ "display": "none", "visibility": "hidden" });
            }
        });


        // Menu Order Time Setting (Lunch / Dinner)	
        /*myTimeOrderMenu*/
        $(".ms-standardheader > nobr:contains('Menu Time')").closest("tr").css({ "display": "none", "visibility": "hidden" });
        setTimeout(function () {
            if ($('#myTimeOrderMenu:contains("am")').length > 0) {
                $(".ms-standardheader > nobr:contains('Menu Time')").closest("tr").children('td.ms-formbody').find("input[value='Lunch']").prop("checked", true);
            }
            if ($('#myTimeOrderMenu:contains("pm")').length > 0) {
                $(".ms-standardheader > nobr:contains('Menu Time')").closest("tr").children('td.ms-formbody').find("input[value='Dinner']").prop("checked", true);
            }
        }, 1000);

    }

    /* --------------Cafeteria Menu - End --------------*/


}); (jQuery);

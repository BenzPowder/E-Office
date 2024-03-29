/**
 * Created by VaraPhon on 7/6/2017.
 */
$(document).ready(function(){
    console.log("dfdfdfd");
    $('#doc_roll_id').click(function() {
        $('#doc_roll_id').val('$id');

    });
    var addFormGroup = function (event) {
        event.preventDefault();

        var formGroup = $(this).closest('.form-group');
        var multipleFormGroup = formGroup.closest('.multiple-form-group');
        var formGroupClone = formGroup.clone();

        $(this)
            .toggleClass('btn-default btn-add btn-danger btn-remove')
            .html('–');

        formGroupClone.find('input').val('');
        formGroupClone.insertAfter(formGroup);

        var lastFormGroupLast = multipleFormGroup.find('.form-group:last');
        if (multipleFormGroup.data('max') <= countFormGroup(multipleFormGroup)) {
            lastFormGroupLast.find('.btn-add').attr('disabled', true);
        }
    };

    var removeFormGroup = function (event) {
        event.preventDefault();

        var formGroup = $(this).closest('.form-group');
        var multipleFormGroup = formGroup.closest('.multiple-form-group');

        var lastFormGroupLast = multipleFormGroup.find('.form-group:last');
        if (multipleFormGroup.data('max') >= countFormGroup(multipleFormGroup)) {
            lastFormGroupLast.find('.btn-add').attr('disabled', false);
        }

        formGroup.remove();
    };

    var countFormGroup = function (form) {
        return form.find('.form-group').length;
    };

    $(document).on('click', '.btn-add', addFormGroup);
    $(document).on('click', '.btn-remove', removeFormGroup);

});

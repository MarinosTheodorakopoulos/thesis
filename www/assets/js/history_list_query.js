$('document').submit(function(e) {
                    e.preventDefault();
                    var data = {};
                    var Form = this;
                    $.each(this.elements, function(i, v) {
                        var input = $(v);
                        data[input.attr("name")] = input.val();
                        delete data["undefined"];
                    });
                    $.ajax({
                        type: 'POST',
                        url: 'http://127.0.0.1:5000/history',
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        data: JSON.stringify(data),
                        context: Form,
                        success: function(callback) {
                            if(callback.fname==""||callback.lname=="")
                                myfunction();
                            else{
                                        // Watch out for Cross Site Scripting security issues when setting dynamic content!
                                            console.log(callback);
                                
                                            $(this).text('Hello ' + callback.fname + ' ' + callback.lname  );
                            }
                                    },
                                    error: function() {
                                        $(this).html("error!");
                                    }
                                });
                            });


function addElements(){
    $('#history_list_div')
    
    
    
}






$(document).ready(function () {
    getCategoriesWithToken();

});

var showMainMenu = true;

const showHideMenu = (ele) => {
    if (showMainMenu) {
        document.getElementById("mainMenu").style.display = 'none';
        $(ele).children().first().attr('class', 'fa fa-arrow-circle-left fa-2x');
    }
    else {
        document.getElementById("mainMenu").style.display = 'block';
        $(ele).children().first().attr('class', 'fa fa-arrow-circle-right fa-2x');

    }
    showMainMenu = !showMainMenu;
}

const goToPage = (title, page) => {
    document.getElementById('pageTitle').innerText = title;
    document.title = title;

    const Url = `./pages/${page}.html`;
    fetch(Url)
        .then(res => res.text())
        .then(html => document.getElementById("mainContent").innerHTML = html);
}


const showNewUser = () => {

    const Url = `./pages/userInfo.html`;
    fetch(Url)
        .then(res => res.text())
        .then(content => {
            $("#userModal .modal-body").html(content);
            $('#userModal').modal();
        });

}







const getCategoriesWithToken = () => {
    //  if (!localStorage.getItem('user'))
    //    window.location.href = '../pages/login.html';

    $("#table").css('display', 'block');
    const apiUrl = 'http://apitester.ir/api/CategoriesWithTokenAuth';
    const user = JSON.parse(localStorage.getItem('user'));
    fetch(apiUrl, {
        method: 'get',
        headers: {

            'Authorization': 'Bearer ' + user.token
        }
    })
        .then(res => res.json())
        .then(res => getCategorie(res))
        // .catch((error) => {
        //     alert('اعتبار شما باید دوباره چک شود');
        //     window.location.href = '../pages/login.html'
        // });

}


const getCategorie = (data) => {
    $('#iconSpiner').removeClass('hide');
    $('#tbodyTable').html('');
    let temp = '';
    try {
        const apiUrl = 'http://apitester.ir/api/Categories';
        $.get(apiUrl, function (data) {
            for (let i = 0; i <= 9; i++) {
                const categories = data[i];
                const tr = `
                <tr>
                <td>${categories.categoryId}</td>
                <td>${categories.categoryName}</td>
                <td>${categories.description}</td>
            </tr>`;
                temp += tr;
                $('#tbodyTable').append(tr);
                $('#iconSpiner').addClass('hide');
            }

        })

    } catch (error) {
        $('#iconSpiner').addClass('hide');
        alert('Data load error');
    }
}


const removeRow = (element) => {
    Command: toastr["warning"]("My name is Inigo Montoya. You killed my father. Prepare to die!")

  
    $(element).remove();
}

const notReady =() =>{
    Command: toastr["info"]("Sorry! it's not ready")

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
}


// $(function() {
//     $("#scheduler").kendoScheduler({
//         date: new Date("2013/6/13"),
//         startTime: new Date("2013/6/13 07:00 AM"),
//         height: 600,
//         views: [
//             "day",
//             { type: "workWeek", selected: true },
//             "week",
//             "month",
//             "agenda",
//             { type: "timeline", eventHeight: 50}
//         ],
//         timezone: "Etc/UTC",
//         dataSource: {
//             batch: true,
//             transport: {
//                 read: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks",
//                     dataType: "jsonp"
//                 },
//                 update: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
//                     dataType: "jsonp"
//                 },
//                 create: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
//                     dataType: "jsonp"
//                 },
//                 destroy: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
//                     dataType: "jsonp"
//                 },
//                 parameterMap: function(options, operation) {
//                     if (operation !== "read" && options.models) {
//                         return {models: kendo.stringify(options.models)};
//                     }
//                 }
//             },
//             schema: {
//                 model: {
//                     id: "taskId",
//                     fields: {
//                         taskId: { from: "TaskID", type: "number" },
//                         title: { from: "Title", defaultValue: "No title", validation: { required: true } },
//                         start: { type: "date", from: "Start" },
//                         end: { type: "date", from: "End" },
//                         startTimezone: { from: "StartTimezone" },
//                         endTimezone: { from: "EndTimezone" },
//                         description: { from: "Description" },
//                         recurrenceId: { from: "RecurrenceID" },
//                         recurrenceRule: { from: "RecurrenceRule" },
//                         recurrenceException: { from: "RecurrenceException" },
//                         ownerId: { from: "OwnerID", defaultValue: 1 },
//                         isAllDay: { type: "boolean", from: "IsAllDay" }
//                     }
//                 }
//             },
//             filter: {
//                 logic: "or",
//                 filters: [
//                     { field: "ownerId", operator: "eq", value: 1 },
//                     { field: "ownerId", operator: "eq", value: 2 }
//                 ]
//             }
//         },
//         resources: [
//             {
//                 field: "ownerId",
//                 title: "Owner",
//                 dataSource: [
//                     { text: "Alex", value: 1, color: "#f8a398" },
//                     { text: "Bob", value: 2, color: "#51a0ed" },
//                     { text: "Charlie", value: 3, color: "#56ca85" }
//                 ]
//             }
//         ]
//     });

//     $("#people :checkbox").change(function(e) {
//         var checked = $.map($("#people :checked"), function(checkbox) {
//             return parseInt($(checkbox).val());
//         });

//         var scheduler = $("#scheduler").data("kendoScheduler");

//         scheduler.dataSource.filter({
//             operator: function(task) {
//                 return $.inArray(task.ownerId, checked) >= 0;
//             }
//         });
//     });
// });
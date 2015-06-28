<%@ page language="C#" autoeventwireup="true" inherits="API, App_Web_53vklkps" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="js/jquery-1.8.3.js" ></script>
    <script type="text/javascript">
        $(function () {
            $.ajax({
                url: "API.aspx",
                data: "type=get",
                success: function (str) {

                    if (str) {
                        $(".write").text(str.data.name + str.data.age);
                    }
                }
            });
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="write">
    
    </div>
    </form>
</body>
</html>

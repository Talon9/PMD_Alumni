//$(document).ready(function foo() {
  function GetData(selCH) {
    console.log("CHID = " + selCH);

    $.get("data/ChapterDetails.json", function(data)
      {
        console.log(data);
        $(data.chapters).each(function(index, value) 
          {
            if (value.CHID === selCH) 
            { 
              document.getElementById("ChapterTitle").innerHTML = "<H1>" + value.Section + " " + value.Chapter + "</H1>";
              document.getElementById("ChapterLogo").src="\\images\\ChapterLogo\\Sm206\\v1_Orange\\" + value.Section + value.Chapter + ".jpg";
              
            // University Info
              document.getElementById("UnivLogo").src="\\images\\ChapterLogo\\Universities\\" + value.Section + value.Chapter + ".png";
              document.getElementById("UnivName").innerHTML="<h2>" + value.UnivName + "</h2>";
              var str = "";
              if (value.UnivAddress == "NULL")
                {str = str + "&nbsp;";}
              else
                {str = str + value.UnivAddress;}
              str = str + "<BR />" + value.UnivCity + ", " + value.UnivState + "  " + value.UnivZip; 
              document.getElementById("UnivAddress").innerHTML=str;
              document.getElementById("UnivWebSite").innerHTML="Web Site: <a href='http://" + value.WebPage + "' target='_blank' >" + value.WebPage + "</a> <i class='fa fa-external-link small' aria-hidden='true'></i>";
              document.getElementById("YearBookWebSite").innerHTML=value.UniversityLink;
              document.getElementById("YearBook").innerHTML="Year Book: " + value.YrBkName + "<br />" + 
                "Url: " + value.YrBkURL + "<br />Year:" + value.YrBkStart + " to " + value.YrBkEnd;

            } // end if
          }
        );
      }
    )
  };


//    $.ajax({
//      url: fname,
//      dataType: 'json',
//      type: 'get',
//      cache: false,
//      success: function(data) {
//        $(data.chapters).each(function(index, value) {
//          if (value.CHID === selCH) 
//          { 
//            document.getElementById("ChapterTitle").innerHTML = "<H1>" + value.Section + " " + value.Chapter + "</H1>";
//            document.getElementById("ChapterLogo").src="\\images\\ChapterLogo\\Sm206\\v1_Orange\\" + value.Section + value.Chapter + ".jpg";
//
//            // University Info
//
//            document.getElementById("UnivLogo").src="\\images\\ChapterLogo\\Universities\\" + value.Section + value.Chapter + ".png";
//            document.getElementById("UnivName").innerHTML="<h2>" + value.UnivName + "</h2>";
//            var str = "";
//            if (value.UnivAddress == "NULL")
//            {str = str + "&nbsp;";}
//            else
//            {str = str + value.UnivAddress;}
//            str = str + "<BR />" + value.UnivCity + ", " + value.UnivState; 
//            document.getElementById("UnivAddress").innerHTML=str;
//
//          }
//        });
//      }
//    }); 
//})
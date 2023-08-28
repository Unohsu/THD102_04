$(function () {
  $.ajax({
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-FBAAA440-B288-46BA-A280-B6B3C0E94EBD&format=JSON&locationName=%E8%A7%80%E9%9F%B3%E5%8D%80&elementName=T,Wx",
    type: "GET",
    datatype: "json",
    success: function (response) {
      console.log(response.records);
      //   console.log(response.records.locations[0].location[0].locationName)
      let path = response.records.locations[0].location[0];
      $("#city_name").html(response.records.locations[0].locationsName);
      $("#district").html(path.locationName);
      $("#tempture").html(
        path.weatherElement[0].time[0].elementValue[0].value + "&#176;"
      );
      let j = 0;
      for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
          let wx = path.weatherElement[1].time[i].elementValue[0].value;
          console.log(wx);
          if (wx.indexOf("晴") > -1) {
            $(".block")
              .eq(j)
              .find("img")
              .attr("src", "https://i.imgur.com/Shrg84B.png");
          } else if (wx.indexOf("雨") > -1) {
            $(".block").eq(j).find("img").attr("src", "img/rain.png");
          } else {
            $(".block")
              .eq(j)
              .find("img")
              .attr("src", "https://i.imgur.com/BeWfUuG.png");
          }
          $(".sub_tempture")
            .eq(j)
            .html(
              path.weatherElement[0].time[i].elementValue[0].value + "&#176;"
            );
          j++;
        }
      }
    },
    error: function () {
      console.log("error");
    },
  });
});

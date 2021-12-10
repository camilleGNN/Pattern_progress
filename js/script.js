

      let i = 0; //this variable will be used to idetify layers it increments each time you add a layer to line 110
      $(".paper").click(function() { //when you click on a specific pattern do the following: create a variable out of the image  out of the "data-image" attribut"
            let imageURL = $(this).attr("src");
            let newLayer = "<div class='layer' id='layer-" + i + "''></div>";
            


            $(newLayer) //create a div with the data-image as background
                .css({"background": "url(" + imageURL + ")" })
                .appendTo("body") //add it to the page

         

            imageControls ="<input type='range' min='20' max='600' data-layer=" + i + " >";
                $(imageControls) //add the controls for this image
                .appendTo("#image__toolbar")
                .change (function() {
                    let layer=  "#layer-"+$(this).data("layer");
                    let newLayer=$(this).val()+"px auto";
                    let sizeValue = $(this).val()+"px auto";

                    console.log (sizeValue)
                    $(layer).css({
                        "background-size": sizeValue
                    
                     })
                   })

                   i+i+1;

               });




if(! document.querySelector(".comments-toggle")){
    var inhtml = '<section id="comments"><!-- comments --> <div class="subhead"> <span>Uralkodj magadon!</span> </div> <div> <b>Új kommentelési szabályok vannak 2016. január 21-től.</b> <a href="//444.hu/2016/01/15/kommentelesi-szabalyok-a-444-en" target="_blank">Itt olvashatod el</a>, hogy mik azok, és <a href="http://444.hu/2016/01/15/vita-van-vita-lesz-de-maskeppen" target="_blank">itt azt</a>, hogy miért vezettük be őket. </div> <button class="gae-comment-click-open comments-toggle" style="background-color: rgb(201, 76, 76);">Hozzászólások (Gazsify444)</button> <div class="ad"> <div id="444_aloldal_kommentek"></div> </div> <div id="disqus_thread" class="freehand layout"></div> <script>var disqus_url = "'+window.location.href+'";</script> </section> ';

    var div=document.createElement("div");
    if(document.querySelector(".freehand")){
        document.querySelector(".freehand").appendChild(div); 
        div.innerHTML=inhtml;

        var e = document.querySelector(".comments-toggle"),
            n = function() {
                var n, i, o;
                o = window.disqus_shortname, n = document, (i = n.createElement("script")).src = "//" + o + ".disqus.com/embed.js", i.setAttribute("data-timestamp", +new Date), (n.head || n.body).appendChild(i), e.remove()
            };
        "#comments" === window.location.hash ? n() : e.addEventListener("click", function(e) {
            n()
        })
    }
}
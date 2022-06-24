// Your JS goes here
var container = document.createElement('div');
document.body.append(container);

    for (var i=0;i<45;i++){
        if (i % 2 === 0) {
                var div = document.createElement('div');
                div.style.width = '11.1%';
                div.style.float = "left";
                div.style.paddingBottom = '11.1%';  
                div.style.background = "black";
                container.append(div);
        } else {
            var div = document.createElement('div');
            div.style.width = '11.1%';
            div.style.float = "left";
            div.style.paddingBottom = '11.1%';  
            div.style.background = "red";
            container.append(div);
}
    }

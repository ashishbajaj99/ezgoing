(function() {
    Raphael.fn.connection = function (obj1, obj2, line, bg, dblclickCallback, dblClickCbData) {
        if (obj1.line && obj1.from && obj1.to) {
            line = obj1;
            obj1 = line.from;
            obj2 = line.to;
        }
        var bb1 = obj1.getBBox(),
            bb2 = obj2.getBBox(),
            p = [{x: bb1.x + bb1.width / 2, y: bb1.y - 1},
                 {x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1},
                 {x: bb1.x - 1, y: bb1.y + bb1.height / 2},
                 {x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2},
                 {x: bb2.x + bb2.width / 2, y: bb2.y - 1},
                 {x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1},
                 {x: bb2.x - 1, y: bb2.y + bb2.height / 2},
                 {x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2}],
            d = {}, dis = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 4; j < 8; j++) {
                var dx = Math.abs(p[i].x - p[j].x),
                    dy = Math.abs(p[i].y - p[j].y);
                if ((i == j - 4) || (((i != 3 && j != 6) || p[i].x < p[j].x) && ((i != 2 && j != 7) || p[i].x > p[j].x) && ((i != 0 && j != 5) || p[i].y > p[j].y) && ((i != 1 && j != 4) || p[i].y < p[j].y))) {
                    dis.push(dx + dy);
                    d[dis[dis.length - 1]] = [i, j];
                }
            }
        }
        if (dis.length == 0) {
            var res = [0, 4];
        } else {
            res = d[Math.min.apply(Math, dis)];
        }
        var x1 = p[res[0]].x,
            y1 = p[res[0]].y,
            x4 = p[res[1]].x,
            y4 = p[res[1]].y;
            dx = Math.max(Math.abs(x1 - x4) / 2, 10);
            dy = Math.max(Math.abs(y1 - y4) / 2, 10);
        var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3),
            y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3),
            x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3),
            y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
        var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
        if(obj1 === obj2) {
            path = ["M", bb1.x+bb1.width/4, bb1.y-1, "c", bb1.width/4, -3*bb1.height/2, bb1.width/4, -3*bb1.height/2, bb1.width/2, 0].join(",");
        }
        if (line && line.line) {
            line.bg && line.bg.attr({path: path});
            line.line.attr({path: path});
        } else {
            var color = typeof line == "string" ? line : "#000";
            var pathObj = this.path(path).attr({stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3, cursor: "pointer", "arrow-end": "classic-wide-long"});
            pathObj.dblclick(function() {
                dblclickCallback(dblClickCbData);
            });
            return {
                bg: bg && bg.split && pathObj,
                line: this.path(path).attr({stroke: color, fill: "none"}),
                from: obj1,
                to: obj2
            };
        }
    };
    
    Raphael.fn.moveableRectWithText = function(name, x, y, rectWidth, rectHeight, canvasWidth, canvasHeight, dblclickCallback, dblClickCbData, moveCallback, hoverInCallback, hoverOutCallback, hoverCbData) {
        var color = "white", midX = rectWidth/2, midY = rectHeight/2;
        var rightEdge = canvasWidth-rectWidth, bottomEdge = canvasHeight-rectHeight, leftEdge = 0, topEdge = 0;
        var canvas = this;
        var textObj = canvas.text(x+midX, y+midY, name);
        var rectObj = canvas.rect(x, y, rectWidth, rectHeight, 2);
        var selectObjectAnimation = Raphael.animation({ "transform": "t-"+x+",-"+y }, 1000, "bounce");
        var unselectObjectAnimation = Raphael.animation({ "transform": "s0.0001" }, 1000, "bounce", function() {
            this.hide();
        });
        var restoreObjectAnimation = Raphael.animation({ "transform": "s1" }, 1000, "bounce", function() {
            if(moveCallback) {
                moveCallback();
            }
        });
        var moveableFlag = moveCallback? true : false, dblClickableFlag = dblclickCallback? true : false, hoverableFlag = hoverInCallback? true : false;

        
        var dblclickHandler = function() {
            if(this.dblClickable)
                dblclickCallback(name, dblClickCbData);
        }

        var hoverInHandler = function() {
            if(this.hoverable == true)
                hoverInCallback(hoverCbData);
        }

        var hoverOutHandler = function() {
            if(this.hoverable == true)
                hoverOutCallback(hoverCbData);
        }

        var dragger = function () {
            this.shapeObj.animate({"fill-opacity": .2}, 500);

            if(this.moveable == true) {
                this.shapeObj.ox = this.shapeObj.attr("x");
                this.shapeObj.oy = this.shapeObj.attr("y");
            }
        }

        var move = function (dx, dy) {
            if(this.moveable == true) {
                var newPosX = this.shapeObj.ox + dx, newPosY = this.shapeObj.oy + dy;
                
                if(newPosX < leftEdge)
                    newPosX = leftEdge;
                if(newPosX > rightEdge)
                    newPosX = rightEdge;
                if(newPosY < topEdge)
                    newPosY = topEdge;
                if(newPosY > bottomEdge)
                    newPosY = bottomEdge;
                
                att = {x: newPosX, y: newPosY};

                var textAttr = {x: att.x + midX, y: att.y + midY};
                this.selectObjectAnimation = Raphael.animation({ "transform": "t-"+att.x+",-"+att.y }, 1000, "bounce");
                this.textObj.attr(textAttr);
                this.shapeObj.attr(att);
                moveCallback();
                canvas.safari();                
            }
        }

        var up = function () {
            this.shapeObj.animate({"fill-opacity": 0}, 500);                
        }

        var select = function() {
            this.shapeObj.animate(this.selectObjectAnimation);
            this.textObj.animate(this.selectObjectAnimation);
            if(moveableFlag) { this.moveable = false };
            if(dblClickableFlag) { this.dblClickable = false };
        }

        var hide = function() {
            this.shapeObj.hide();
            this.textObj.hide();
            this.shapeObj.animate(this.restoreObjectAnimation);
            this.textObj.animate(this.restoreObjectAnimation);
            if(moveableFlag) { this.moveable = true };
            if(dblClickableFlag) { this.dblClickable = true };
        }

        var show = function() {
            this.shapeObj.show();
            this.textObj.show();
        }

        var attention = function() {
            this.shapeObj.animate({"fill-opacity": .5}, 50);
        }

        var atEase = function() {
            this.shapeObj.animate({"fill-opacity": 0}, 50);
        }

        var resetColor = function() {
            this.shapeObj.attr({ fill: color, stroke: color });
        }

        var returnObj = { 'textObj': textObj, 
                          'shapeObj': rectObj, 
                          'name': name,
                          'select': select,
                          'hide': hide,
                          'show': show,
                          'attention': attention,
                          'atEase': atEase,                          
                          'moveable': moveableFlag,
                          'dblClickable': dblClickableFlag,
                          'hoverable': hoverableFlag,
                          'resetColor': resetColor,                          
                          'selectObjectAnimation': selectObjectAnimation,
                          'unselectObjectAnimation': unselectObjectAnimation,
                          'restoreObjectAnimation': restoreObjectAnimation     };

        textObj.attr({fill: color, stroke: "none", "font-size": 15, cursor: "pointer"})
        .dblclick(function() { dblclickHandler.apply(returnObj); })
        //.drag(move, dragger, up)
        .toBack();

        rectObj.attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "pointer"})
        .dblclick(function() { dblclickHandler.apply(returnObj); })
        .drag(move, dragger, up, returnObj)
        .hover(hoverInHandler, hoverOutHandler, returnObj, returnObj)
        .toFront();

        return returnObj;

    }

    Raphael.fn.moveableEllipseWithText = function(name, x, y, ellipseWidth, ellipseHeight, canvasWidth, canvasHeight, dblclickCallback, dblClickCbData, moveCallback, hoverInCallback, hoverOutCallback, hoverCbData) {
        Raphael.getColor(); //call getColor number of times to get distinct color at next call
        var color = Raphael.getColor(), midX = ellipseWidth/2, midY = ellipseHeight/2;
        var rightEdge = canvasWidth-ellipseWidth, bottomEdge = canvasHeight-ellipseHeight, leftEdge = ellipseWidth, topEdge = ellipseHeight;
        var canvas = this;
        var textObj = canvas.text(x, y, name);
        var ellipseObj = canvas.ellipse(x, y, ellipseWidth, ellipseHeight);
        var selectObjectAnimation = Raphael.animation({ "transform": "t-"+x+",-"+y }, 1000, "bounce");
        var unselectObjectAnimation = Raphael.animation({ "transform": "s0.0001" }, 1000, "bounce", function() {
            this.hide();
        });
        var restoreObjectAnimation = Raphael.animation({ "transform": "s1" }, 1000, "bounce", function() {
            if(moveCallback) {
                moveCallback();
            }
        });

        var moveableFlag = moveCallback? true : false, dblClickableFlag = dblclickCallback? true : false, hoverableFlag = hoverInCallback? true : false;

        var dblclickHandler = function() {
            if(this.dblClickable)
                dblclickCallback(name, dblClickCbData);
        }

        var hoverInHandler = function() {
            if(this.hoverable == true)
                hoverInCallback(hoverCbData);
        }

        var hoverOutHandler = function() {
            if(this.hoverable == true)
                hoverOutCallback(hoverCbData);
        }
        var dragger = function () {
            this.shapeObj.animate({"fill-opacity": .2}, 500);                
            if(this.moveable == true) {
                this.shapeObj.ox = this.shapeObj.attr("cx");
                this.shapeObj.oy = this.shapeObj.attr("cy");
            }
        }

        var move = function (dx, dy) {
            if(this.moveable == true) {
                var newPosX = this.shapeObj.ox + dx, newPosY = this.shapeObj.oy + dy;
                
                if(newPosX < leftEdge)
                    newPosX = leftEdge;
                if(newPosX > rightEdge)
                    newPosX = rightEdge;
                if(newPosY < topEdge)
                    newPosY = topEdge;
                if(newPosY > bottomEdge)
                    newPosY = bottomEdge;
                
                att = {cx: newPosX, cy: newPosY};

                var textAttr = {x: att.cx, y: att.cy};
                this.selectObjectAnimation = Raphael.animation({ "transform": "t-"+att.cx+",-"+att.cy }, 1000, "bounce");
                this.textObj.attr(textAttr);
                this.shapeObj.attr(att);
                moveCallback();
                canvas.safari();                
            }
        }

        var up = function () {
            this.shapeObj.animate({"fill-opacity": 0}, 500);                
        }

        var select = function() {
            this.shapeObj.animate(this.selectObjectAnimation);
            this.textObj.animate(this.selectObjectAnimation);
            if(moveableFlag) { this.moveable = false };
            if(dblClickableFlag) { this.dblClickable = false };
        }

        var hide = function() {
            this.shapeObj.hide();
            this.textObj.hide();
            this.shapeObj.animate(this.restoreObjectAnimation);
            this.textObj.animate(this.restoreObjectAnimation);
            if(moveableFlag) { this.moveable = true };
            if(dblClickableFlag) { this.dblClickable = true };
        }

        var show = function() {
            this.shapeObj.show();
            this.textObj.show();
        }

        var attention = function() {
            this.shapeObj.animate({"fill-opacity": .5}, 50);
        }

        var atEase = function() {
            this.shapeObj.animate({"fill-opacity": 0}, 50);
        }

        var resetColor = function() {
            this.shapeObj.attr({ fill: color, stroke: color });
        }
        
        var returnObj = { 'textObj': textObj, 
                          'shapeObj': ellipseObj, 
                          'name': name,
                          'select': select,
                          'hide': hide,
                          'show': show,
                          'attention': attention,
                          'atEase': atEase,
                          'moveable': moveableFlag,
                          'dblClickable': dblClickableFlag,
                          'hoverable': hoverableFlag,
                          'resetColor': resetColor,
                          'selectObjectAnimation': selectObjectAnimation,
                          'unselectObjectAnimation': unselectObjectAnimation,
                          'restoreObjectAnimation': restoreObjectAnimation     };

        textObj.attr({fill: color, stroke: "none", "font-size": 15, cursor: "pointer"})
        .dblclick(function() { dblclickHandler.apply(returnObj); })
        //.drag(move, dragger, up)
        .toBack();

        ellipseObj.attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "pointer"})
        .dblclick(function() { dblclickHandler.apply(returnObj); })
        .drag(move, dragger, up, returnObj)
        .hover(hoverInHandler, hoverOutHandler, returnObj, returnObj)
        .toFront();

        return returnObj;

    }

    Raphael.fn.spinner = function(holderid, R1, R2, count, stroke_width, colour) {
        var sectorsCount = count || 12,
        color = colour || "#fff",
        width = stroke_width || 15,
        r1 = Math.min(R1, R2) || 35,
        r2 = Math.max(R1, R2) || 60,
        cx = r2 + width,
        cy = r2 + width,
        r = Raphael(holderid, r2 * 2 + width * 2, r2 * 2 + width * 2),
        sectors = [],
        opacity = [],
        beta = 2 * Math.PI / sectorsCount,
        pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
        Raphael.getColor.reset();
        
        for (var i = 0; i < sectorsCount; i++) {
            var alpha = beta * i - Math.PI / 2,
            cos = Math.cos(alpha),
            sin = Math.sin(alpha);
            opacity[i] = 1 / sectorsCount * i;
            sectors[i] = r.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
            if (color == "rainbow") {
                sectors[i].attr("stroke", Raphael.getColor());
            }
        }
        var tick;
        (function ticker() {
            opacity.unshift(opacity.pop());
            for (var i = 0; i < sectorsCount; i++) {
                sectors[i].attr("opacity", opacity[i]);
            }
            r.safari();
            tick = setTimeout(ticker, 1000 / sectorsCount);
        })();
        return function () {
            clearTimeout(tick);
            r.remove();
        };
    };
})();

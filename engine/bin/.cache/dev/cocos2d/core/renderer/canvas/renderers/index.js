(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/renderers/index.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        var js = require('../../../platform/js');
        var Sprite = require('../../../components/CCSprite');
        var Label = require('../../../components/CCLabel');
        var Mask = require('../../../components/CCMask');
        var Graphics = require('../../../graphics/graphics');
        var spriteRenderer = require('./sprite');
        var labelRenderer = require('./label');
        var graphicsRenderer = require('./graphics');
        var maskRenderer = require('./mask');
        var map = {};
        var postMap = {};
        function addRenderer(Component, handler, postHandler) {
            var name = js.getClassName(Component);
            map[name] = handler;
            if (postHandler) {
                postMap[name] = postHandler;
            }
            Component._assembler = handler;
            Component._postAssembler = postHandler;
        }
        addRenderer(Sprite, spriteRenderer);
        addRenderer(Label, labelRenderer);
        if (Mask) {
            addRenderer(Mask, maskRenderer.beforeHandler, maskRenderer.afterHandler);
        }
        if (Graphics) {
            addRenderer(Graphics, graphicsRenderer);
        }
        module.exports = {
            map: map,
            postMap: postMap,
            addRenderer: addRenderer
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci9jYW52YXMvcmVuZGVyZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImpzIiwicmVxdWlyZSIsIlNwcml0ZSIsIkxhYmVsIiwiTWFzayIsIkdyYXBoaWNzIiwic3ByaXRlUmVuZGVyZXIiLCJsYWJlbFJlbmRlcmVyIiwiZ3JhcGhpY3NSZW5kZXJlciIsIm1hc2tSZW5kZXJlciIsIm1hcCIsInBvc3RNYXAiLCJhZGRSZW5kZXJlciIsIkNvbXBvbmVudCIsImhhbmRsZXIiLCJwb3N0SGFuZGxlciIsIm5hbWUiLCJnZXRDbGFzc05hbWUiLCJfYXNzZW1ibGVyIiwiX3Bvc3RBc3NlbWJsZXIiLCJiZWZvcmVIYW5kbGVyIiwiYWZ0ZXJIYW5kbGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBeUJBLElBQUlBLEVBQUFBLEdBQUtDLE9BQUFBLENBQVEsc0JBQVJBLENBQVQ7UUFFQSxJQUFJQyxNQUFBQSxHQUFTRCxPQUFBQSxDQUFRLDhCQUFSQSxDQUFiO1FBQ0EsSUFBSUUsS0FBQUEsR0FBUUYsT0FBQUEsQ0FBUSw2QkFBUkEsQ0FBWjtRQUNBLElBQUlHLElBQUFBLEdBQU9ILE9BQUFBLENBQVEsNEJBQVJBLENBQVg7UUFDQSxJQUFJSSxRQUFBQSxHQUFXSixPQUFBQSxDQUFRLDRCQUFSQSxDQUFmO1FBRUEsSUFBSUssY0FBQUEsR0FBaUJMLE9BQUFBLENBQVEsVUFBUkEsQ0FBckI7UUFDQSxJQUFJTSxhQUFBQSxHQUFnQk4sT0FBQUEsQ0FBUSxTQUFSQSxDQUFwQjtRQUNBLElBQUlPLGdCQUFBQSxHQUFtQlAsT0FBQUEsQ0FBUSxZQUFSQSxDQUF2QjtRQUNBLElBQUlRLFlBQUFBLEdBQWVSLE9BQUFBLENBQVEsUUFBUkEsQ0FBbkI7UUFFQSxJQUFJUyxHQUFBQSxHQUFNLEVBQVY7UUFDQSxJQUFJQyxPQUFBQSxHQUFVLEVBQWQ7UUFFQSxTQUFTQyxXQUFULENBQXNCQyxTQUF0QixFQUFpQ0MsT0FBakMsRUFBMENDLFdBQTFDLEVBQXVEO0FBQUEsWUFDbkQsSUFBSUMsSUFBQUEsR0FBT2hCLEVBQUFBLENBQUdpQixZQUFIakIsQ0FBZ0JhLFNBQWhCYixDQUFYLENBRG1EO0FBQUEsWUFFbkRVLEdBQUFBLENBQUlNLElBQUpOLElBQVlJLE9BQVpKLENBRm1EO0FBQUEsWUFHbkQsSUFBSUssV0FBSixFQUFpQjtBQUFBLGdCQUNiSixPQUFBQSxDQUFRSyxJQUFSTCxJQUFnQkksV0FBaEJKLENBRGE7QUFBQSxhQUhrQztBQUFBLFlBTW5ERSxTQUFBQSxDQUFVSyxVQUFWTCxHQUF1QkMsT0FBdkJELENBTm1EO0FBQUEsWUFPbkRBLFNBQUFBLENBQVVNLGNBQVZOLEdBQTJCRSxXQUEzQkYsQ0FQbUQ7QUFBQTtRQVV2REQsV0FBQUEsQ0FBWVYsTUFBWlUsRUFBb0JOLGNBQXBCTTtRQUNBQSxXQUFBQSxDQUFZVCxLQUFaUyxFQUFtQkwsYUFBbkJLO1FBQ0EsSUFBSVIsSUFBSixFQUFVO0FBQUEsWUFDTlEsV0FBQUEsQ0FBWVIsSUFBWlEsRUFBa0JILFlBQUFBLENBQWFXLGFBQS9CUixFQUE4Q0gsWUFBQUEsQ0FBYVksWUFBM0RULEVBRE07QUFBQTtRQUdWLElBQUlQLFFBQUosRUFBYztBQUFBLFlBQ1ZPLFdBQUFBLENBQVlQLFFBQVpPLEVBQXNCSixnQkFBdEJJLEVBRFU7QUFBQTtRQUlkVSxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQjtBQUFBLFlBQ2JaLEdBQUFBLEVBQUFBLEdBRGE7QUFBQSxZQUViQyxPQUFBQSxFQUFBQSxPQUZhO0FBQUEsWUFHYkMsV0FBQUEsRUFBQUEsV0FIYTtBQUFBLFNBQWpCVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmxldCBqcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3BsYXRmb3JtL2pzJyk7XG5cbmxldCBTcHJpdGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL0NDU3ByaXRlJyk7XG5sZXQgTGFiZWwgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL0NDTGFiZWwnKTtcbmxldCBNYXNrID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9DQ01hc2snKTtcbmxldCBHcmFwaGljcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2dyYXBoaWNzL2dyYXBoaWNzJyk7XG5cbmxldCBzcHJpdGVSZW5kZXJlciA9IHJlcXVpcmUoJy4vc3ByaXRlJyk7XG5sZXQgbGFiZWxSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGFiZWwnKTtcbmxldCBncmFwaGljc1JlbmRlcmVyID0gcmVxdWlyZSgnLi9ncmFwaGljcycpO1xubGV0IG1hc2tSZW5kZXJlciA9IHJlcXVpcmUoJy4vbWFzaycpO1xuXG5sZXQgbWFwID0ge307XG5sZXQgcG9zdE1hcCA9IHt9O1xuXG5mdW5jdGlvbiBhZGRSZW5kZXJlciAoQ29tcG9uZW50LCBoYW5kbGVyLCBwb3N0SGFuZGxlcikge1xuICAgIGxldCBuYW1lID0ganMuZ2V0Q2xhc3NOYW1lKENvbXBvbmVudCk7XG4gICAgbWFwW25hbWVdID0gaGFuZGxlcjtcbiAgICBpZiAocG9zdEhhbmRsZXIpIHtcbiAgICAgICAgcG9zdE1hcFtuYW1lXSA9IHBvc3RIYW5kbGVyO1xuICAgIH1cbiAgICBDb21wb25lbnQuX2Fzc2VtYmxlciA9IGhhbmRsZXI7XG4gICAgQ29tcG9uZW50Ll9wb3N0QXNzZW1ibGVyID0gcG9zdEhhbmRsZXI7XG59XG5cbmFkZFJlbmRlcmVyKFNwcml0ZSwgc3ByaXRlUmVuZGVyZXIpO1xuYWRkUmVuZGVyZXIoTGFiZWwsIGxhYmVsUmVuZGVyZXIpO1xuaWYgKE1hc2spIHtcbiAgICBhZGRSZW5kZXJlcihNYXNrLCBtYXNrUmVuZGVyZXIuYmVmb3JlSGFuZGxlciwgbWFza1JlbmRlcmVyLmFmdGVySGFuZGxlcik7XG59XG5pZiAoR3JhcGhpY3MpIHtcbiAgICBhZGRSZW5kZXJlcihHcmFwaGljcywgZ3JhcGhpY3NSZW5kZXJlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG1hcCxcbiAgICBwb3N0TWFwLFxuICAgIGFkZFJlbmRlcmVyXG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIGpzID0gcmVxdWlyZSgnLi4vLi4vLi4vcGxhdGZvcm0vanMnKTtcblxudmFyIFNwcml0ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbXBvbmVudHMvQ0NTcHJpdGUnKTtcbnZhciBMYWJlbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbXBvbmVudHMvQ0NMYWJlbCcpO1xudmFyIE1hc2sgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL0NDTWFzaycpO1xudmFyIEdyYXBoaWNzID0gcmVxdWlyZSgnLi4vLi4vLi4vZ3JhcGhpY3MvZ3JhcGhpY3MnKTtcblxudmFyIHNwcml0ZVJlbmRlcmVyID0gcmVxdWlyZSgnLi9zcHJpdGUnKTtcbnZhciBsYWJlbFJlbmRlcmVyID0gcmVxdWlyZSgnLi9sYWJlbCcpO1xudmFyIGdyYXBoaWNzUmVuZGVyZXIgPSByZXF1aXJlKCcuL2dyYXBoaWNzJyk7XG52YXIgbWFza1JlbmRlcmVyID0gcmVxdWlyZSgnLi9tYXNrJyk7XG5cbnZhciBtYXAgPSB7fTtcbnZhciBwb3N0TWFwID0ge307XG5cbmZ1bmN0aW9uIGFkZFJlbmRlcmVyKENvbXBvbmVudCwgaGFuZGxlciwgcG9zdEhhbmRsZXIpIHtcbiAgICB2YXIgbmFtZSA9IGpzLmdldENsYXNzTmFtZShDb21wb25lbnQpO1xuICAgIG1hcFtuYW1lXSA9IGhhbmRsZXI7XG4gICAgaWYgKHBvc3RIYW5kbGVyKSB7XG4gICAgICAgIHBvc3RNYXBbbmFtZV0gPSBwb3N0SGFuZGxlcjtcbiAgICB9XG4gICAgQ29tcG9uZW50Ll9hc3NlbWJsZXIgPSBoYW5kbGVyO1xuICAgIENvbXBvbmVudC5fcG9zdEFzc2VtYmxlciA9IHBvc3RIYW5kbGVyO1xufVxuXG5hZGRSZW5kZXJlcihTcHJpdGUsIHNwcml0ZVJlbmRlcmVyKTtcbmFkZFJlbmRlcmVyKExhYmVsLCBsYWJlbFJlbmRlcmVyKTtcbmlmIChNYXNrKSB7XG4gICAgYWRkUmVuZGVyZXIoTWFzaywgbWFza1JlbmRlcmVyLmJlZm9yZUhhbmRsZXIsIG1hc2tSZW5kZXJlci5hZnRlckhhbmRsZXIpO1xufVxuaWYgKEdyYXBoaWNzKSB7XG4gICAgYWRkUmVuZGVyZXIoR3JhcGhpY3MsIGdyYXBoaWNzUmVuZGVyZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtYXA6IG1hcCxcbiAgICBwb3N0TWFwOiBwb3N0TWFwLFxuICAgIGFkZFJlbmRlcmVyOiBhZGRSZW5kZXJlclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbXB6SWl3aWNtVnhkV2x5WlNJc0lsTndjbWwwWlNJc0lreGhZbVZzSWl3aVRXRnpheUlzSWtkeVlYQm9hV056SWl3aWMzQnlhWFJsVW1WdVpHVnlaWElpTENKc1lXSmxiRkpsYm1SbGNtVnlJaXdpWjNKaGNHaHBZM05TWlc1a1pYSmxjaUlzSW0xaGMydFNaVzVrWlhKbGNpSXNJbTFoY0NJc0luQnZjM1JOWVhBaUxDSmhaR1JTWlc1a1pYSmxjaUlzSWtOdmJYQnZibVZ1ZENJc0ltaGhibVJzWlhJaUxDSndiM04wU0dGdVpHeGxjaUlzSW01aGJXVWlMQ0puWlhSRGJHRnpjMDVoYldVaUxDSmZZWE56WlcxaWJHVnlJaXdpWDNCdmMzUkJjM05sYldKc1pYSWlMQ0ppWldadmNtVklZVzVrYkdWeUlpd2lZV1owWlhKSVlXNWtiR1Z5SWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFYbENRU3hKUVVGSlFTeExRVUZMUXl4UlFVRlJMSE5DUVVGU0xFTkJRVlE3TzBGQlJVRXNTVUZCU1VNc1UwRkJVMFFzVVVGQlVTdzRRa0ZCVWl4RFFVRmlPMEZCUTBFc1NVRkJTVVVzVVVGQlVVWXNVVUZCVVN3MlFrRkJVaXhEUVVGYU8wRkJRMEVzU1VGQlNVY3NUMEZCVDBnc1VVRkJVU3cwUWtGQlVpeERRVUZZTzBGQlEwRXNTVUZCU1Vrc1YwRkJWMG9zVVVGQlVTdzBRa0ZCVWl4RFFVRm1PenRCUVVWQkxFbEJRVWxMTEdsQ1FVRnBRa3dzVVVGQlVTeFZRVUZTTEVOQlFYSkNPMEZCUTBFc1NVRkJTVTBzWjBKQlFXZENUaXhSUVVGUkxGTkJRVklzUTBGQmNFSTdRVUZEUVN4SlFVRkpUeXh0UWtGQmJVSlFMRkZCUVZFc1dVRkJVaXhEUVVGMlFqdEJRVU5CTEVsQlFVbFJMR1ZCUVdWU0xGRkJRVkVzVVVGQlVpeERRVUZ1UWpzN1FVRkZRU3hKUVVGSlV5eE5RVUZOTEVWQlFWWTdRVUZEUVN4SlFVRkpReXhWUVVGVkxFVkJRV1E3TzBGQlJVRXNVMEZCVTBNc1YwRkJWQ3hEUVVGelFrTXNVMEZCZEVJc1JVRkJhVU5ETEU5QlFXcERMRVZCUVRCRFF5eFhRVUV4UXl4RlFVRjFSRHRCUVVOdVJDeFJRVUZKUXl4UFFVRlBhRUlzUjBGQlIybENMRmxCUVVnc1EwRkJaMEpLTEZOQlFXaENMRU5CUVZnN1FVRkRRVWdzVVVGQlNVMHNTVUZCU2l4SlFVRlpSaXhQUVVGYU8wRkJRMEVzVVVGQlNVTXNWMEZCU2l4RlFVRnBRanRCUVVOaVNpeG5Ra0ZCVVVzc1NVRkJVaXhKUVVGblFrUXNWMEZCYUVJN1FVRkRTRHRCUVVORVJpeGpRVUZWU3l4VlFVRldMRWRCUVhWQ1NpeFBRVUYyUWp0QlFVTkJSQ3hqUVVGVlRTeGpRVUZXTEVkQlFUSkNTaXhYUVVFelFqdEJRVU5JT3p0QlFVVkVTQ3haUVVGWlZpeE5RVUZhTEVWQlFXOUNTU3hqUVVGd1FqdEJRVU5CVFN4WlFVRlpWQ3hMUVVGYUxFVkJRVzFDU1N4aFFVRnVRanRCUVVOQkxFbEJRVWxJTEVsQlFVb3NSVUZCVlR0QlFVTk9VU3huUWtGQldWSXNTVUZCV2l4RlFVRnJRa3NzWVVGQllWY3NZVUZCTDBJc1JVRkJPRU5ZTEdGQlFXRlpMRmxCUVRORU8wRkJRMGc3UVVGRFJDeEpRVUZKYUVJc1VVRkJTaXhGUVVGak8wRkJRMVpQTEdkQ1FVRlpVQ3hSUVVGYUxFVkJRWE5DUnl4blFrRkJkRUk3UVVGRFNEczdRVUZGUkdNc1QwRkJUME1zVDBGQlVDeEhRVUZwUWp0QlFVTmlZaXhaUVVSaE8wRkJSV0pETEc5Q1FVWmhPMEZCUjJKRE8wRkJTR0VzUTBGQmFrSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh1WEc0Z2FIUjBjSE02THk5M2QzY3VZMjlqYjNNdVkyOXRMMXh1WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4dUlIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlHNXZkQ0IxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJaMGQyRnlaU0JtYjNJZ1pHVjJaV3h2Y0dsdVp5QnZkR2hsY2lCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCMGFHRjBKM05jYmlCMWMyVmtJR1p2Y2lCa1pYWmxiRzl3YVc1bklHZGhiV1Z6TGlCWmIzVWdZWEpsSUc1dmRDQm5jbUZ1ZEdWa0lIUnZJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzWEc0Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYRzVjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhHNWNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzRnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U0Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRlhHNGdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVYRzVzWlhRZ2FuTWdQU0J5WlhGMWFYSmxLQ2N1TGk4dUxpOHVMaTl3YkdGMFptOXliUzlxY3ljcE8xeHVYRzVzWlhRZ1UzQnlhWFJsSUQwZ2NtVnhkV2x5WlNnbkxpNHZMaTR2TGk0dlkyOXRjRzl1Wlc1MGN5OURRMU53Y21sMFpTY3BPMXh1YkdWMElFeGhZbVZzSUQwZ2NtVnhkV2x5WlNnbkxpNHZMaTR2TGk0dlkyOXRjRzl1Wlc1MGN5OURRMHhoWW1Wc0p5azdYRzVzWlhRZ1RXRnpheUE5SUhKbGNYVnBjbVVvSnk0dUx5NHVMeTR1TDJOdmJYQnZibVZ1ZEhNdlEwTk5ZWE5ySnlrN1hHNXNaWFFnUjNKaGNHaHBZM01nUFNCeVpYRjFhWEpsS0NjdUxpOHVMaTh1TGk5bmNtRndhR2xqY3k5bmNtRndhR2xqY3ljcE8xeHVYRzVzWlhRZ2MzQnlhWFJsVW1WdVpHVnlaWElnUFNCeVpYRjFhWEpsS0NjdUwzTndjbWwwWlNjcE8xeHViR1YwSUd4aFltVnNVbVZ1WkdWeVpYSWdQU0J5WlhGMWFYSmxLQ2N1TDJ4aFltVnNKeWs3WEc1c1pYUWdaM0poY0docFkzTlNaVzVrWlhKbGNpQTlJSEpsY1hWcGNtVW9KeTR2WjNKaGNHaHBZM01uS1R0Y2JteGxkQ0J0WVhOclVtVnVaR1Z5WlhJZ1BTQnlaWEYxYVhKbEtDY3VMMjFoYzJzbktUdGNibHh1YkdWMElHMWhjQ0E5SUh0OU8xeHViR1YwSUhCdmMzUk5ZWEFnUFNCN2ZUdGNibHh1Wm5WdVkzUnBiMjRnWVdSa1VtVnVaR1Z5WlhJZ0tFTnZiWEJ2Ym1WdWRDd2dhR0Z1Wkd4bGNpd2djRzl6ZEVoaGJtUnNaWElwSUh0Y2JpQWdJQ0JzWlhRZ2JtRnRaU0E5SUdwekxtZGxkRU5zWVhOelRtRnRaU2hEYjIxd2IyNWxiblFwTzF4dUlDQWdJRzFoY0Z0dVlXMWxYU0E5SUdoaGJtUnNaWEk3WEc0Z0lDQWdhV1lnS0hCdmMzUklZVzVrYkdWeUtTQjdYRzRnSUNBZ0lDQWdJSEJ2YzNSTllYQmJibUZ0WlYwZ1BTQndiM04wU0dGdVpHeGxjanRjYmlBZ0lDQjlYRzRnSUNBZ1EyOXRjRzl1Wlc1MExsOWhjM05sYldKc1pYSWdQU0JvWVc1a2JHVnlPMXh1SUNBZ0lFTnZiWEJ2Ym1WdWRDNWZjRzl6ZEVGemMyVnRZbXhsY2lBOUlIQnZjM1JJWVc1a2JHVnlPMXh1ZlZ4dVhHNWhaR1JTWlc1a1pYSmxjaWhUY0hKcGRHVXNJSE53Y21sMFpWSmxibVJsY21WeUtUdGNibUZrWkZKbGJtUmxjbVZ5S0V4aFltVnNMQ0JzWVdKbGJGSmxibVJsY21WeUtUdGNibWxtSUNoTllYTnJLU0I3WEc0Z0lDQWdZV1JrVW1WdVpHVnlaWElvVFdGemF5d2diV0Z6YTFKbGJtUmxjbVZ5TG1KbFptOXlaVWhoYm1Sc1pYSXNJRzFoYzJ0U1pXNWtaWEpsY2k1aFpuUmxja2hoYm1Sc1pYSXBPMXh1ZlZ4dWFXWWdLRWR5WVhCb2FXTnpLU0I3WEc0Z0lDQWdZV1JrVW1WdVpHVnlaWElvUjNKaGNHaHBZM01zSUdkeVlYQm9hV056VW1WdVpHVnlaWElwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmlBZ0lDQnRZWEFzWEc0Z0lDQWdjRzl6ZEUxaGNDeGNiaUFnSUNCaFpHUlNaVzVrWlhKbGNseHVmVHNpWFgwPSJdfQ==
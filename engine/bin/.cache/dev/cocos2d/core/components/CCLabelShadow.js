(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/components/CCLabelShadow.js';
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
        var LabelShadow = cc.Class({
            name: 'cc.LabelShadow',
            extends: require('./CCComponent'),
            editor: CC_EDITOR && {
                menu: 'i18n:MAIN_MENU.component.renderers/LabelShadow',
                executeInEditMode: true,
                requireComponent: cc.Label
            },
            properties: {
                _color: cc.Color.WHITE,
                _offset: cc.v2(2, 2),
                _blur: 2,
                color: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.shadow.color',
                    get: function get() {
                        return this._color;
                    },
                    set: function set(value) {
                        this._color = value;
                        this._updateRenderData();
                    }
                },
                offset: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.shadow.offset',
                    get: function get() {
                        return this._offset;
                    },
                    set: function set(value) {
                        this._offset = value;
                        this._updateRenderData();
                    }
                },
                blur: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.shadow.blur',
                    get: function get() {
                        return this._blur;
                    },
                    set: function set(value) {
                        this._blur = value;
                        this._updateRenderData();
                    },
                    range: [
                        0,
                        1024
                    ]
                }
            },
            onEnable: function onEnable() {
                this._updateRenderData();
            },
            onDisable: function onDisable() {
                this._updateRenderData();
            },
            _updateRenderData: function _updateRenderData() {
                var label = this.node.getComponent(cc.Label);
                if (label) {
                    label._updateRenderData();
                }
            }
        });
        cc.LabelShadow = module.exports = LabelShadow;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDTGFiZWxTaGFkb3cuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9jb3JlL2NvbXBvbmVudHMvQ0NMYWJlbFNoYWRvdy5qcyJdLCJuYW1lcyI6WyJMYWJlbFNoYWRvdyIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiZXh0ZW5kcyIsInJlcXVpcmUiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJyZXF1aXJlQ29tcG9uZW50IiwiTGFiZWwiLCJwcm9wZXJ0aWVzIiwiX2NvbG9yIiwiQ29sb3IiLCJXSElURSIsIl9vZmZzZXQiLCJ2MiIsIl9ibHVyIiwiY29sb3IiLCJ0b29sdGlwIiwiQ0NfREVWIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJfdXBkYXRlUmVuZGVyRGF0YSIsIm9mZnNldCIsImJsdXIiLCJyYW5nZSIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwibGFiZWwiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBd0NBLElBQUlBLFdBQUFBLEdBQWNDLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUN2QkUsSUFBQUEsRUFBTSxnQkFEaUI7QUFBQSxZQUV2QkMsT0FBQUEsRUFBU0MsT0FBQUEsQ0FBUSxlQUFSQSxDQUZjO0FBQUEsWUFHdkJDLE1BQUFBLEVBQVFDLFNBQUFBLElBQWE7QUFBQSxnQkFDakJDLElBQUFBLEVBQU0sZ0RBRFc7QUFBQSxnQkFFakJDLGlCQUFBQSxFQUFtQixJQUZGO0FBQUEsZ0JBR2pCQyxnQkFBQUEsRUFBa0JULEVBQUFBLENBQUdVLEtBSEo7QUFBQSxhQUhFO0FBQUEsWUFTdkJDLFVBQUFBLEVBQVk7QUFBQSxnQkFDUkMsTUFBQUEsRUFBUVosRUFBQUEsQ0FBR2EsS0FBSGIsQ0FBU2MsS0FEVDtBQUFBLGdCQUVSQyxPQUFBQSxFQUFTZixFQUFBQSxDQUFHZ0IsRUFBSGhCLENBQU0sQ0FBTkEsRUFBUyxDQUFUQSxDQUZEO0FBQUEsZ0JBR1JpQixLQUFBQSxFQUFPLENBSEM7QUFBQSxnQkFhUkMsS0FBQUEsRUFBTztBQUFBLG9CQUNIQyxPQUFBQSxFQUFTQyxNQUFBQSxJQUFVLDZCQURoQjtBQUFBLG9CQUVIQyxHQUFBQSxFQUFLLFNBQUEsR0FBQSxHQUFZO0FBQUEsd0JBQ2IsT0FBTyxLQUFLVCxNQUFaLENBRGE7QUFBQSxxQkFGZDtBQUFBLG9CQUtIVSxHQUFBQSxFQUFLLFNBQUEsR0FBQSxDQUFVQyxLQUFWLEVBQWlCO0FBQUEsd0JBQ2xCLEtBQUtYLE1BQUwsR0FBY1csS0FBZCxDQURrQjtBQUFBLHdCQUVsQixLQUFLQyxpQkFBTCxHQUZrQjtBQUFBLHFCQUxuQjtBQUFBLGlCQWJDO0FBQUEsZ0JBZ0NSQyxNQUFBQSxFQUFRO0FBQUEsb0JBQ0pOLE9BQUFBLEVBQVNDLE1BQUFBLElBQVUsOEJBRGY7QUFBQSxvQkFFSkMsR0FBQUEsRUFBSyxTQUFBLEdBQUEsR0FBWTtBQUFBLHdCQUNiLE9BQU8sS0FBS04sT0FBWixDQURhO0FBQUEscUJBRmI7QUFBQSxvQkFLSk8sR0FBQUEsRUFBSyxTQUFBLEdBQUEsQ0FBVUMsS0FBVixFQUFpQjtBQUFBLHdCQUNsQixLQUFLUixPQUFMLEdBQWVRLEtBQWYsQ0FEa0I7QUFBQSx3QkFFbEIsS0FBS0MsaUJBQUwsR0FGa0I7QUFBQSxxQkFMbEI7QUFBQSxpQkFoQ0E7QUFBQSxnQkFtRFJFLElBQUFBLEVBQU07QUFBQSxvQkFDRlAsT0FBQUEsRUFBU0MsTUFBQUEsSUFBVSw0QkFEakI7QUFBQSxvQkFFRkMsR0FBQUEsRUFBSyxTQUFBLEdBQUEsR0FBWTtBQUFBLHdCQUNiLE9BQU8sS0FBS0osS0FBWixDQURhO0FBQUEscUJBRmY7QUFBQSxvQkFLRkssR0FBQUEsRUFBSyxTQUFBLEdBQUEsQ0FBVUMsS0FBVixFQUFpQjtBQUFBLHdCQUNsQixLQUFLTixLQUFMLEdBQWFNLEtBQWIsQ0FEa0I7QUFBQSx3QkFFbEIsS0FBS0MsaUJBQUwsR0FGa0I7QUFBQSxxQkFMcEI7QUFBQSxvQkFTRkcsS0FBQUEsRUFBTztBQUFBLHdCQUFDLENBQUQ7QUFBQSx3QkFBSSxJQUFKO0FBQUEscUJBVEw7QUFBQSxpQkFuREU7QUFBQSxhQVRXO0FBQUEsWUF5RXZCQyxRQUFBQSxFQXpFdUIsU0FBQSxRQUFBLEdBeUVYO0FBQUEsZ0JBQ1IsS0FBS0osaUJBQUwsR0FEUTtBQUFBLGFBekVXO0FBQUEsWUE2RXZCSyxTQUFBQSxFQTdFdUIsU0FBQSxTQUFBLEdBNkVWO0FBQUEsZ0JBQ1QsS0FBS0wsaUJBQUwsR0FEUztBQUFBLGFBN0VVO0FBQUEsWUFpRnZCQSxpQkFBQUEsRUFqRnVCLFNBQUEsaUJBQUEsR0FpRkY7QUFBQSxnQkFDakIsSUFBSU0sS0FBQUEsR0FBUSxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJoQyxFQUFBQSxDQUFHVSxLQUExQixDQUFaLENBRGlCO0FBQUEsZ0JBRWpCLElBQUlvQixLQUFKLEVBQVc7QUFBQSxvQkFDUEEsS0FBQUEsQ0FBTU4saUJBQU5NLEdBRE87QUFBQSxpQkFGTTtBQUFBLGFBakZFO0FBQUEsU0FBVDlCLENBQWxCO1FBMEZBQSxFQUFBQSxDQUFHRCxXQUFIQyxHQUFpQmlDLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCbEMsV0FBbENDIiwiZmlsZSI6IkNDTGFiZWxTaGFkb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuIFNoYWRvdyBlZmZlY3QgZm9yIExhYmVsIGNvbXBvbmVudCwgb25seSBmb3Igc3lzdGVtIGZvbnRzIG9yIFRURiBmb250c1xuICogISN6aCDnlKjkuo7nu5kgTGFiZWwg57uE5Lu25re75Yqg6Zi05b2x5pWI5p6c77yM5Y+q6IO955So5LqO57O757uf5a2X5L2T5oiWIHR0ZiDlrZfkvZNcbiAqIEBjbGFzcyBMYWJlbFNoYWRvd1xuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAZXhhbXBsZVxuICogIC8vIENyZWF0ZSBhIG5ldyBub2RlIGFuZCBhZGQgbGFiZWwgY29tcG9uZW50cy5cbiAqICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiTmV3IExhYmVsXCIpO1xuICogIHZhciBsYWJlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAqICBsYWJlbC5zdHJpbmcgPSBcImhlbGxvIHdvcmxkXCI7XG4gKiAgdmFyIGxhYmVsU2hhZG93ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWxTaGFkb3cpO1xuICogIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICovXG5cbmxldCBMYWJlbFNoYWRvdyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuTGFiZWxTaGFkb3cnLFxuICAgIGV4dGVuZHM6IHJlcXVpcmUoJy4vQ0NDb21wb25lbnQnKSxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL0xhYmVsU2hhZG93JyxcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsXG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLkxhYmVsLFxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9jb2xvcjogY2MuQ29sb3IuV0hJVEUsXG4gICAgICAgIF9vZmZzZXQ6IGNjLnYyKDIsIDIpLFxuICAgICAgICBfYmx1cjogMixcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBUaGUgc2hhZG93IGNvbG9yXG4gICAgICAgICAqICEjemgg6Zi05b2x55qE6aKc6ImyXG4gICAgICAgICAqIEBwcm9wZXJ0eSBjb2xvclxuICAgICAgICAgKiBAdHlwZSB7Q29sb3J9XG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGxhYmVsU2hhZG93LmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgICAgICAgKi9cbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQuc2hhZG93LmNvbG9yJyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIE9mZnNldCBiZXR3ZWVuIGZvbnQgYW5kIHNoYWRvd1xuICAgICAgICAgKiAhI3poIOWtl+S9k+S4jumYtOW9seeahOWBj+enu1xuICAgICAgICAgKiBAcHJvcGVydHkgb2Zmc2V0XG4gICAgICAgICAqIEB0eXBlIHtWZWMyfVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBsYWJlbFNoYWRvdy5vZmZzZXQgPSBuZXcgY2MuVmVjMigyLCAyKTtcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5zaGFkb3cub2Zmc2V0JyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gQSBub24tbmVnYXRpdmUgZmxvYXQgc3BlY2lmeWluZyB0aGUgbGV2ZWwgb2Ygc2hhZG93IGJsdXJcbiAgICAgICAgICogISN6aCDpmLTlvbHnmoTmqKHns4rnqIvluqZcbiAgICAgICAgICogQHByb3BlcnR5IGJsdXJcbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogbGFiZWxTaGFkb3cuYmx1ciA9IDI7XG4gICAgICAgICAqL1xuICAgICAgICBibHVyOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnNoYWRvdy5ibHVyJyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibHVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmx1ciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYW5nZTogWzAsIDEwMjRdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlICgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlUmVuZGVyRGF0YSAoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLl91cGRhdGVSZW5kZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5MYWJlbFNoYWRvdyA9IG1vZHVsZS5leHBvcnRzID0gTGFiZWxTaGFkb3c7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqICEjZW4gU2hhZG93IGVmZmVjdCBmb3IgTGFiZWwgY29tcG9uZW50LCBvbmx5IGZvciBzeXN0ZW0gZm9udHMgb3IgVFRGIGZvbnRzXG4gKiAhI3poIOeUqOS6jue7mSBMYWJlbCDnu4Tku7bmt7vliqDpmLTlvbHmlYjmnpzvvIzlj6rog73nlKjkuo7ns7vnu5/lrZfkvZPmiJYgdHRmIOWtl+S9k1xuICogQGNsYXNzIExhYmVsU2hhZG93XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBleGFtcGxlXG4gKiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgYW5kIGFkZCBsYWJlbCBjb21wb25lbnRzLlxuICogIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgTGFiZWxcIik7XG4gKiAgdmFyIGxhYmVsID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICogIGxhYmVsLnN0cmluZyA9IFwiaGVsbG8gd29ybGRcIjtcbiAqICB2YXIgbGFiZWxTaGFkb3cgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbFNoYWRvdyk7XG4gKiAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gKi9cblxudmFyIExhYmVsU2hhZG93ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5MYWJlbFNoYWRvdycsXG4gICAgZXh0ZW5kczogcmVxdWlyZSgnLi9DQ0NvbXBvbmVudCcpLFxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgbWVudTogJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5yZW5kZXJlcnMvTGFiZWxTaGFkb3cnLFxuICAgICAgICBleGVjdXRlSW5FZGl0TW9kZTogdHJ1ZSxcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfY29sb3I6IGNjLkNvbG9yLldISVRFLFxuICAgICAgICBfb2Zmc2V0OiBjYy52MigyLCAyKSxcbiAgICAgICAgX2JsdXI6IDIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gVGhlIHNoYWRvdyBjb2xvclxuICAgICAgICAgKiAhI3poIOmYtOW9seeahOminOiJslxuICAgICAgICAgKiBAcHJvcGVydHkgY29sb3JcbiAgICAgICAgICogQHR5cGUge0NvbG9yfVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBsYWJlbFNoYWRvdy5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcbiAgICAgICAgICovXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnNoYWRvdy5jb2xvcicsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBPZmZzZXQgYmV0d2VlbiBmb250IGFuZCBzaGFkb3dcbiAgICAgICAgICogISN6aCDlrZfkvZPkuI7pmLTlvbHnmoTlgY/np7tcbiAgICAgICAgICogQHByb3BlcnR5IG9mZnNldFxuICAgICAgICAgKiBAdHlwZSB7VmVjMn1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogbGFiZWxTaGFkb3cub2Zmc2V0ID0gbmV3IGNjLlZlYzIoMiwgMik7XG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQuc2hhZG93Lm9mZnNldCcsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIEEgbm9uLW5lZ2F0aXZlIGZsb2F0IHNwZWNpZnlpbmcgdGhlIGxldmVsIG9mIHNoYWRvdyBibHVyXG4gICAgICAgICAqICEjemgg6Zi05b2x55qE5qih57OK56iL5bqmXG4gICAgICAgICAqIEBwcm9wZXJ0eSBibHVyXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGxhYmVsU2hhZG93LmJsdXIgPSAyO1xuICAgICAgICAgKi9cbiAgICAgICAgYmx1cjoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5zaGFkb3cuYmx1cicsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmx1cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JsdXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJEYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxMDI0XVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICB9LFxuICAgIF91cGRhdGVSZW5kZXJEYXRhOiBmdW5jdGlvbiBfdXBkYXRlUmVuZGVyRGF0YSgpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5MYWJlbFNoYWRvdyA9IG1vZHVsZS5leHBvcnRzID0gTGFiZWxTaGFkb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EVEdGaVpXeFRhR0ZrYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHNpVEdGaVpXeFRhR0ZrYjNjaUxDSmpZeUlzSWtOc1lYTnpJaXdpYm1GdFpTSXNJbVY0ZEdWdVpITWlMQ0p5WlhGMWFYSmxJaXdpWldScGRHOXlJaXdpUTBOZlJVUkpWRTlTSWl3aWJXVnVkU0lzSW1WNFpXTjFkR1ZKYmtWa2FYUk5iMlJsSWl3aWNtVnhkV2x5WlVOdmJYQnZibVZ1ZENJc0lreGhZbVZzSWl3aWNISnZjR1Z5ZEdsbGN5SXNJbDlqYjJ4dmNpSXNJa052Ykc5eUlpd2lWMGhKVkVVaUxDSmZiMlptYzJWMElpd2lkaklpTENKZllteDFjaUlzSW1OdmJHOXlJaXdpZEc5dmJIUnBjQ0lzSWtORFgwUkZWaUlzSW1kbGRDSXNJbk5sZENJc0luWmhiSFZsSWl3aVgzVndaR0YwWlZKbGJtUmxja1JoZEdFaUxDSnZabVp6WlhRaUxDSmliSFZ5SWl3aWNtRnVaMlVpTENKdmJrVnVZV0pzWlNJc0ltOXVSR2x6WVdKc1pTSXNJbXhoWW1Wc0lpd2libTlrWlNJc0ltZGxkRU52YlhCdmJtVnVkQ0lzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk1FSkJPenM3T3pzN096czdPenM3T3p0QlFXTkJMRWxCUVVsQkxHTkJRV05ETEVkQlFVZERMRXRCUVVnc1EwRkJVenRCUVVOMlFrTXNWVUZCVFN4blFrRkVhVUk3UVVGRmRrSkRMR0ZCUVZORExGRkJRVkVzWlVGQlVpeERRVVpqTzBGQlIzWkNReXhaUVVGUlF5eGhRVUZoTzBGQlEycENReXhqUVVGTkxHZEVRVVJYTzBGQlJXcENReXd5UWtGQmJVSXNTVUZHUmp0QlFVZHFRa01zTUVKQlFXdENWQ3hIUVVGSFZUdEJRVWhLTEV0QlNFVTdPMEZCVTNaQ1F5eG5Ra0ZCV1R0QlFVTlNReXhuUWtGQlVWb3NSMEZCUjJFc1MwRkJTQ3hEUVVGVFF5eExRVVJVTzBGQlJWSkRMR2xDUVVGVFppeEhRVUZIWjBJc1JVRkJTQ3hEUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlJrUTdRVUZIVWtNc1pVRkJUeXhEUVVoRE96dEJRVXRTT3pzN096czdPenRCUVZGQlF5eGxRVUZQTzBGQlEwaERMSEZDUVVGVFF5eFZRVUZWTERaQ1FVUm9RanRCUVVWSVF5eHBRa0ZCU3l4bFFVRlpPMEZCUTJJc2RVSkJRVThzUzBGQlMxUXNUVUZCV2p0QlFVTklMR0ZCU2tVN1FVRkxTRlVzYVVKQlFVc3NZVUZCVlVNc1MwRkJWaXhGUVVGcFFqdEJRVU5zUWl4eFFrRkJTMWdzVFVGQlRDeEhRVUZqVnl4TFFVRmtPMEZCUTBFc2NVSkJRVXRETEdsQ1FVRk1PMEZCUTBnN1FVRlNSU3hUUVdKRE96dEJRWGRDVWpzN096czdPenM3UVVGUlFVTXNaMEpCUVZFN1FVRkRTazRzY1VKQlFWTkRMRlZCUVZVc09FSkJSR1k3UVVGRlNrTXNhVUpCUVVzc1pVRkJXVHRCUVVOaUxIVkNRVUZQTEV0QlFVdE9MRTlCUVZvN1FVRkRTQ3hoUVVwSE8wRkJTMHBQTEdsQ1FVRkxMR0ZCUVZWRExFdEJRVllzUlVGQmFVSTdRVUZEYkVJc2NVSkJRVXRTTEU5QlFVd3NSMEZCWlZFc1MwRkJaanRCUVVOQkxIRkNRVUZMUXl4cFFrRkJURHRCUVVOSU8wRkJVa2NzVTBGb1EwRTdPMEZCTWtOU096czdPenM3T3p0QlFWRkJSU3hqUVVGTk8wRkJRMFpRTEhGQ1FVRlRReXhWUVVGVkxEUkNRVVJxUWp0QlFVVkdReXhwUWtGQlN5eGxRVUZaTzBGQlEySXNkVUpCUVU4c1MwRkJTMG9zUzBGQldqdEJRVU5JTEdGQlNrTTdRVUZMUmtzc2FVSkJRVXNzWVVGQlZVTXNTMEZCVml4RlFVRnBRanRCUVVOc1FpeHhRa0ZCUzA0c1MwRkJUQ3hIUVVGaFRTeExRVUZpTzBGQlEwRXNjVUpCUVV0RExHbENRVUZNTzBGQlEwZ3NZVUZTUXp0QlFWTkdSeXh0UWtGQlR5eERRVUZETEVOQlFVUXNSVUZCU1N4SlFVRktPMEZCVkV3N1FVRnVSRVVzUzBGVVZ6czdRVUY1UlhaQ1F5eFpRWHBGZFVJc2MwSkJlVVZZTzBGQlExSXNZVUZCUzBvc2FVSkJRVXc3UVVGRFNDeExRVE5GYzBJN1FVRTJSWFpDU3l4aFFUZEZkVUlzZFVKQk5rVldPMEZCUTFRc1lVRkJTMHdzYVVKQlFVdzdRVUZEU0N4TFFTOUZjMEk3UVVGcFJuWkNRU3h4UWtGcVJuVkNMQ3RDUVdsR1JqdEJRVU5xUWl4WlFVRkpUU3hSUVVGUkxFdEJRVXRETEVsQlFVd3NRMEZCVlVNc1dVRkJWaXhEUVVGMVFtaERMRWRCUVVkVkxFdEJRVEZDTEVOQlFWbzdRVUZEUVN4WlFVRkpiMElzUzBGQlNpeEZRVUZYTzBGQlExQkJMR3RDUVVGTlRpeHBRa0ZCVGp0QlFVTklPMEZCUTBvN1FVRjBSbk5DTEVOQlFWUXNRMEZCYkVJN08wRkJNRVpCZUVJc1IwRkJSMFFzVjBGQlNDeEhRVUZwUW10RExFOUJRVTlETEU5QlFWQXNSMEZCYVVKdVF5eFhRVUZzUXlJc0ltWnBiR1VpT2lKRFEweGhZbVZzVTJoaFpHOTNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRNdE1qQXhOaUJEYUhWcmIyNW5JRlJsWTJodWIyeHZaMmxsY3lCSmJtTXVYRzRnUTI5d2VYSnBaMmgwSUNoaktTQXlNREUzTFRJd01Ua2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1WEc1Y2JpQm9kSFJ3Y3pvdkwzZDNkeTVqYjJOdmN5NWpiMjB2WEc1Y2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hHNGdkMjl5YkdSM2FXUmxMQ0J5YjNsaGJIUjVMV1p5WldVc0lHNXZiaTFoYzNOcFoyNWhZbXhsTENCeVpYWnZZMkZpYkdVZ1lXNWtJRzV2YmkxbGVHTnNkWE5wZG1VZ2JHbGpaVzV6WlZ4dUlIUnZJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52YkdWc2VTQjBieUJrWlhabGJHOXdJR2RoYldWeklHOXVJSGx2ZFhJZ2RHRnlaMlYwSUhCc1lYUm1iM0p0Y3k0Z1dXOTFJSE5vWVd4c1hHNGdibTkwSUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdlpuUjNZWEpsSUdadmNpQmtaWFpsYkc5d2FXNW5JRzkwYUdWeUlITnZablIzWVhKbElHOXlJSFJ2YjJ4eklIUm9ZWFFuYzF4dUlIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQnpkV0pzYVdObGJuTmxMQ0JoYm1RdmIzSWdjMlZzYkNCamIzQnBaWE1nYjJZZ1EyOWpiM01nUTNKbFlYUnZjaTVjYmx4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNibHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNiaUJKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNiaUJCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MQ0JFUVUxQlIwVlRJRTlTSUU5VVNFVlNYRzRnVEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVaUJQVkVoRlVsZEpVMFVzSUVGU1NWTkpUa2NnUmxKUFRTeGNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYRzVjYmk4cUtseHVJQ29nSVNObGJpQlRhR0ZrYjNjZ1pXWm1aV04wSUdadmNpQk1ZV0psYkNCamIyMXdiMjVsYm5Rc0lHOXViSGtnWm05eUlITjVjM1JsYlNCbWIyNTBjeUJ2Y2lCVVZFWWdabTl1ZEhOY2JpQXFJQ0VqZW1nZzU1U281THFPNTd1WklFeGhZbVZzSU9lN2hPUzd0dWEzdStXS29PbVl0T1c5c2VhVmlPYWVuTys4ak9XUHF1aUR2ZWVVcU9TNmp1ZXp1K2U3bitXdGwrUzlrK2FJbGlCMGRHWWc1YTJYNUwyVFhHNGdLaUJBWTJ4aGMzTWdUR0ZpWld4VGFHRmtiM2RjYmlBcUlFQmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRGeHVJQ29nUUdWNFlXMXdiR1ZjYmlBcUlDQXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JtOWtaU0JoYm1RZ1lXUmtJR3hoWW1Wc0lHTnZiWEJ2Ym1WdWRITXVYRzRnS2lBZ2RtRnlJRzV2WkdVZ1BTQnVaWGNnWTJNdVRtOWtaU2hjSWs1bGR5Qk1ZV0psYkZ3aUtUdGNiaUFxSUNCMllYSWdiR0ZpWld3Z1BTQnViMlJsTG1Ga1pFTnZiWEJ2Ym1WdWRDaGpZeTVNWVdKbGJDazdYRzRnS2lBZ2JHRmlaV3d1YzNSeWFXNW5JRDBnWENKb1pXeHNieUIzYjNKc1pGd2lPMXh1SUNvZ0lIWmhjaUJzWVdKbGJGTm9ZV1J2ZHlBOUlHNXZaR1V1WVdSa1EyOXRjRzl1Wlc1MEtHTmpMa3hoWW1Wc1UyaGhaRzkzS1R0Y2JpQXFJQ0J1YjJSbExuQmhjbVZ1ZENBOUlIUm9hWE11Ym05a1pUdGNiaUFxTDF4dVhHNXNaWFFnVEdGaVpXeFRhR0ZrYjNjZ1BTQmpZeTVEYkdGemN5aDdYRzRnSUNBZ2JtRnRaVG9nSjJOakxreGhZbVZzVTJoaFpHOTNKeXhjYmlBZ0lDQmxlSFJsYm1Sek9pQnlaWEYxYVhKbEtDY3VMME5EUTI5dGNHOXVaVzUwSnlrc1hHNGdJQ0FnWldScGRHOXlPaUJEUTE5RlJFbFVUMUlnSmlZZ2UxeHVJQ0FnSUNBZ0lDQnRaVzUxT2lBbmFURTRianBOUVVsT1gwMUZUbFV1WTI5dGNHOXVaVzUwTG5KbGJtUmxjbVZ5Y3k5TVlXSmxiRk5vWVdSdmR5Y3NYRzRnSUNBZ0lDQWdJR1Y0WldOMWRHVkpia1ZrYVhSTmIyUmxPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQnlaWEYxYVhKbFEyOXRjRzl1Wlc1ME9pQmpZeTVNWVdKbGJDeGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NISnZjR1Z5ZEdsbGN6b2dlMXh1SUNBZ0lDQWdJQ0JmWTI5c2IzSTZJR05qTGtOdmJHOXlMbGRJU1ZSRkxGeHVJQ0FnSUNBZ0lDQmZiMlptYzJWME9pQmpZeTUyTWlneUxDQXlLU3hjYmlBZ0lDQWdJQ0FnWDJKc2RYSTZJRElzWEc1Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUNFalpXNGdWR2hsSUhOb1lXUnZkeUJqYjJ4dmNseHVJQ0FnSUNBZ0lDQWdLaUFoSTNwb0lPbVl0T1c5c2VlYWhPbWluT2lKc2x4dUlDQWdJQ0FnSUNBZ0tpQkFjSEp2Y0dWeWRIa2dZMjlzYjNKY2JpQWdJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UwTnZiRzl5ZlZ4dUlDQWdJQ0FnSUNBZ0tpQkFaWGhoYlhCc1pWeHVJQ0FnSUNBZ0lDQWdLaUJzWVdKbGJGTm9ZV1J2ZHk1amIyeHZjaUE5SUdOakxrTnZiRzl5TGxsRlRFeFBWenRjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjI5c2RHbHdPaUJEUTE5RVJWWWdKaVlnSjJreE9HNDZRMDlOVUU5T1JVNVVMbk5vWVdSdmR5NWpiMnh2Y2ljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZlkyOXNiM0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWpiMnh2Y2lBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1Z3WkdGMFpWSmxibVJsY2tSaGRHRW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nSVNObGJpQlBabVp6WlhRZ1ltVjBkMlZsYmlCbWIyNTBJR0Z1WkNCemFHRmtiM2RjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhQ0Rsclpma3ZaUGt1STdwbUxUbHZiSG5tb1RsZ1kvbnA3dGNiaUFnSUNBZ0lDQWdJQ29nUUhCeWIzQmxjblI1SUc5bVpuTmxkRnh1SUNBZ0lDQWdJQ0FnS2lCQWRIbHdaU0I3Vm1Wak1uMWNiaUFnSUNBZ0lDQWdJQ29nUUdWNFlXMXdiR1ZjYmlBZ0lDQWdJQ0FnSUNvZ2JHRmlaV3hUYUdGa2IzY3ViMlptYzJWMElEMGdibVYzSUdOakxsWmxZeklvTWl3Z01pazdYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCdlptWnpaWFE2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2YjJ4MGFYQTZJRU5EWDBSRlZpQW1KaUFuYVRFNGJqcERUMDFRVDA1RlRsUXVjMmhoWkc5M0xtOW1abk5sZENjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmIyWm1jMlYwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZiMlptYzJWMElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZFhCa1lYUmxVbVZ1WkdWeVJHRjBZU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lBaEkyVnVJRUVnYm05dUxXNWxaMkYwYVhabElHWnNiMkYwSUhOd1pXTnBabmxwYm1jZ2RHaGxJR3hsZG1Wc0lHOW1JSE5vWVdSdmR5QmliSFZ5WEc0Z0lDQWdJQ0FnSUNBcUlDRWplbWdnNlppMDViMng1NXFFNXFpaDU3T0s1NmlMNWJxbVhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0JpYkhWeVhHNGdJQ0FnSUNBZ0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOVhHNGdJQ0FnSUNBZ0lDQXFJRUJsZUdGdGNHeGxYRzRnSUNBZ0lDQWdJQ0FxSUd4aFltVnNVMmhoWkc5M0xtSnNkWElnUFNBeU8xeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWW14MWNqb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHOXZiSFJwY0RvZ1EwTmZSRVZXSUNZbUlDZHBNVGh1T2tOUFRWQlBUa1ZPVkM1emFHRmtiM2N1WW14MWNpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZZbXgxY2p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMkpzZFhJZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDkxY0dSaGRHVlNaVzVrWlhKRVlYUmhLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtRnVaMlU2SUZzd0xDQXhNREkwWFN4Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2IyNUZibUZpYkdVZ0tDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOTFjR1JoZEdWU1pXNWtaWEpFWVhSaEtDazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHOXVSR2x6WVdKc1pTQW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM1Z3WkdGMFpWSmxibVJsY2tSaGRHRW9LVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdYM1Z3WkdGMFpWSmxibVJsY2tSaGRHRWdLQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdiR0ZpWld3Z1BTQjBhR2x6TG01dlpHVXVaMlYwUTI5dGNHOXVaVzUwS0dOakxreGhZbVZzS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR3hoWW1Wc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiQzVmZFhCa1lYUmxVbVZ1WkdWeVJHRjBZU2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNTlLVHRjYmx4dVkyTXVUR0ZpWld4VGFHRmtiM2NnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUV4aFltVnNVMmhoWkc5M08xeHVJbDE5Il19
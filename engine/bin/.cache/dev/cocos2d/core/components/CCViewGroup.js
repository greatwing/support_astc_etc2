(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/components/CCViewGroup.js';
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
        var ViewGroup = cc.Class({
            name: 'cc.ViewGroup',
            extends: require('./CCComponent')
        });
        cc.ViewGroup = module.exports = ViewGroup;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDVmlld0dyb3VwLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9jb21wb25lbnRzL0NDVmlld0dyb3VwLmpzIl0sIm5hbWVzIjpbIlZpZXdHcm91cCIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiZXh0ZW5kcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUF5Q0EsSUFBSUEsU0FBQUEsR0FBWUMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ3JCRSxJQUFBQSxFQUFNLGNBRGU7QUFBQSxZQUVyQkMsT0FBQUEsRUFBU0MsT0FBQUEsQ0FBUSxlQUFSQSxDQUZZO0FBQUEsU0FBVEosQ0FBaEI7UUFPQUEsRUFBQUEsQ0FBR0QsU0FBSEMsR0FBZUssTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJOLFNBQWhDQyIsImZpbGUiOiJDQ1ZpZXdHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuXG4gKiBIYW5kbGluZyB0b3VjaCBldmVudHMgaW4gYSBWaWV3R3JvdXAgdGFrZXMgc3BlY2lhbCBjYXJlLFxuICogYmVjYXVzZSBpdCdzIGNvbW1vbiBmb3IgYSBWaWV3R3JvdXAgdG8gaGF2ZSBjaGlsZHJlbiB0aGF0IGFyZSB0YXJnZXRzIGZvciBkaWZmZXJlbnQgdG91Y2ggZXZlbnRzIHRoYW4gdGhlIFZpZXdHcm91cCBpdHNlbGYuXG4gKiBUbyBtYWtlIHN1cmUgdGhhdCBlYWNoIHZpZXcgY29ycmVjdGx5IHJlY2VpdmVzIHRoZSB0b3VjaCBldmVudHMgaW50ZW5kZWQgZm9yIGl0LFxuICogVmlld0dyb3VwIHNob3VsZCByZWdpc3RlciBjYXB0dXJlIHBoYXNlIGV2ZW50IGFuZCBoYW5kbGUgdGhlIGV2ZW50IHByb3BhZ2F0aW9uIHByb3Blcmx5LlxuICogUGxlYXNlIHJlZmVyIHRvIFNjcm9sbHZpZXcgZm9yIG1vcmUgIGluZm9ybWF0aW9uLlxuICpcbiAqICEjemhcbiAqIFZpZXdHcm91cOeahOS6i+S7tuWkhOeQhuavlOi+g+eJueauiu+8jOWboOS4uiBWaWV3R3JvdXAg6YeM6Z2i55qE5a2Q6IqC54K55YWz5b+D55qE5LqL5Lu26LefIFZpZXdHcm91cCDmnKzouqvlj6/og73kuI3kuIDmoLfjgIJcbiAqIOS4uuS6huiuqeWtkOiKgueCueiDveWkn+ato+ehruWcsOWkhOeQhuS6i+S7tu+8jFZpZXdHcm91cCDpnIDopoHms6jlhowgY2FwdHVyZSDpmLbmrrXnmoTkuovku7bvvIzlubbkuJTlkIjnkIblnLDlpITnkIYgVmlld0dyb3VwIOS5i+mXtOeahOS6i+S7tuS8oOmAkuOAglxuICog6K+35Y+C6ICDIFNjcm9sbFZpZXcg55qE5a6e546w5p2l6I635Y+W5pu05aSa5L+h5oGv44CCXG4gKiBAY2xhc3MgVmlld0dyb3VwXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xudmFyIFZpZXdHcm91cCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuVmlld0dyb3VwJyxcbiAgICBleHRlbmRzOiByZXF1aXJlKCcuL0NDQ29tcG9uZW50JylcblxufSk7XG5cblxuY2MuVmlld0dyb3VwID0gbW9kdWxlLmV4cG9ydHMgPSBWaWV3R3JvdXA7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuXG4gKiBIYW5kbGluZyB0b3VjaCBldmVudHMgaW4gYSBWaWV3R3JvdXAgdGFrZXMgc3BlY2lhbCBjYXJlLFxuICogYmVjYXVzZSBpdCdzIGNvbW1vbiBmb3IgYSBWaWV3R3JvdXAgdG8gaGF2ZSBjaGlsZHJlbiB0aGF0IGFyZSB0YXJnZXRzIGZvciBkaWZmZXJlbnQgdG91Y2ggZXZlbnRzIHRoYW4gdGhlIFZpZXdHcm91cCBpdHNlbGYuXG4gKiBUbyBtYWtlIHN1cmUgdGhhdCBlYWNoIHZpZXcgY29ycmVjdGx5IHJlY2VpdmVzIHRoZSB0b3VjaCBldmVudHMgaW50ZW5kZWQgZm9yIGl0LFxuICogVmlld0dyb3VwIHNob3VsZCByZWdpc3RlciBjYXB0dXJlIHBoYXNlIGV2ZW50IGFuZCBoYW5kbGUgdGhlIGV2ZW50IHByb3BhZ2F0aW9uIHByb3Blcmx5LlxuICogUGxlYXNlIHJlZmVyIHRvIFNjcm9sbHZpZXcgZm9yIG1vcmUgIGluZm9ybWF0aW9uLlxuICpcbiAqICEjemhcbiAqIFZpZXdHcm91cOeahOS6i+S7tuWkhOeQhuavlOi+g+eJueauiu+8jOWboOS4uiBWaWV3R3JvdXAg6YeM6Z2i55qE5a2Q6IqC54K55YWz5b+D55qE5LqL5Lu26LefIFZpZXdHcm91cCDmnKzouqvlj6/og73kuI3kuIDmoLfjgIJcbiAqIOS4uuS6huiuqeWtkOiKgueCueiDveWkn+ato+ehruWcsOWkhOeQhuS6i+S7tu+8jFZpZXdHcm91cCDpnIDopoHms6jlhowgY2FwdHVyZSDpmLbmrrXnmoTkuovku7bvvIzlubbkuJTlkIjnkIblnLDlpITnkIYgVmlld0dyb3VwIOS5i+mXtOeahOS6i+S7tuS8oOmAkuOAglxuICog6K+35Y+C6ICDIFNjcm9sbFZpZXcg55qE5a6e546w5p2l6I635Y+W5pu05aSa5L+h5oGv44CCXG4gKiBAY2xhc3MgVmlld0dyb3VwXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xudmFyIFZpZXdHcm91cCA9IGNjLkNsYXNzKHtcbiAgbmFtZTogJ2NjLlZpZXdHcm91cCcsXG4gIGV4dGVuZHM6IHJlcXVpcmUoJy4vQ0NDb21wb25lbnQnKVxuXG59KTtcblxuY2MuVmlld0dyb3VwID0gbW9kdWxlLmV4cG9ydHMgPSBWaWV3R3JvdXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EVm1sbGQwZHliM1Z3TG1weklsMHNJbTVoYldWeklqcGJJbFpwWlhkSGNtOTFjQ0lzSW1Oaklpd2lRMnhoYzNNaUxDSnVZVzFsSWl3aVpYaDBaVzVrY3lJc0luSmxjWFZwY21VaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVEJDUVRzN096czdPenM3T3pzN096czdPMEZCWlVFc1NVRkJTVUVzV1VGQldVTXNSMEZCUjBNc1MwRkJTQ3hEUVVGVE8wRkJRM0pDUXl4UlFVRk5MR05CUkdVN1FVRkZja0pETEZkQlFWTkRMRkZCUVZFc1pVRkJVanM3UVVGR1dTeERRVUZVTEVOQlFXaENPenRCUVU5QlNpeEhRVUZIUkN4VFFVRklMRWRCUVdWTkxFOUJRVTlETEU5QlFWQXNSMEZCYVVKUUxGTkJRV2hESWl3aVptbHNaU0k2SWtORFZtbGxkMGR5YjNWd0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVE10TWpBeE5pQkRhSFZyYjI1bklGUmxZMmh1YjJ4dloybGxjeUJKYm1NdVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYRzVjYmlCb2RIUndjem92TDNkM2R5NWpiMk52Y3k1amIyMHZYRzVjYmlCUVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYRzRnYjJZZ2RHaHBjeUJ6YjJaMGQyRnlaU0JoYm1RZ1lYTnpiMk5wWVhSbFpDQmxibWRwYm1VZ2MyOTFjbU5sSUdOdlpHVWdLSFJvWlNCY0lsTnZablIzWVhKbFhDSXBMQ0JoSUd4cGJXbDBaV1FzWEc0Z0lIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlDQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEc0Z0lIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQWdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc0dktpcGNiaUFxSUNFalpXNWNiaUFxSUVoaGJtUnNhVzVuSUhSdmRXTm9JR1YyWlc1MGN5QnBiaUJoSUZacFpYZEhjbTkxY0NCMFlXdGxjeUJ6Y0dWamFXRnNJR05oY21Vc1hHNGdLaUJpWldOaGRYTmxJR2wwSjNNZ1kyOXRiVzl1SUdadmNpQmhJRlpwWlhkSGNtOTFjQ0IwYnlCb1lYWmxJR05vYVd4a2NtVnVJSFJvWVhRZ1lYSmxJSFJoY21kbGRITWdabTl5SUdScFptWmxjbVZ1ZENCMGIzVmphQ0JsZG1WdWRITWdkR2hoYmlCMGFHVWdWbWxsZDBkeWIzVndJR2wwYzJWc1ppNWNiaUFxSUZSdklHMWhhMlVnYzNWeVpTQjBhR0YwSUdWaFkyZ2dkbWxsZHlCamIzSnlaV04wYkhrZ2NtVmpaV2wyWlhNZ2RHaGxJSFJ2ZFdOb0lHVjJaVzUwY3lCcGJuUmxibVJsWkNCbWIzSWdhWFFzWEc0Z0tpQldhV1YzUjNKdmRYQWdjMmh2ZFd4a0lISmxaMmx6ZEdWeUlHTmhjSFIxY21VZ2NHaGhjMlVnWlhabGJuUWdZVzVrSUdoaGJtUnNaU0IwYUdVZ1pYWmxiblFnY0hKdmNHRm5ZWFJwYjI0Z2NISnZjR1Z5YkhrdVhHNGdLaUJRYkdWaGMyVWdjbVZtWlhJZ2RHOGdVMk55YjJ4c2RtbGxkeUJtYjNJZ2JXOXlaU0FnYVc1bWIzSnRZWFJwYjI0dVhHNGdLbHh1SUNvZ0lTTjZhRnh1SUNvZ1ZtbGxkMGR5YjNWdzU1cUU1THFMNUx1MjVhU0U1NUNHNXErVTZMNkQ1NG01NXE2Szc3eU01WnVnNUxpNklGWnBaWGRIY205MWNDRHBoNHpwbmFMbm1vVGxyWkRvaW9MbmdybmxoYlBsdjRQbm1vVGt1b3ZrdTdib3Q1OGdWbWxsZDBkeWIzVndJT2Fjck9pNnErV1ByK2lEdmVTNGplUzRnT2FndCtPQWdseHVJQ29nNUxpNjVMcUc2SzZwNWEyUTZJcUM1NEs1NklPOTVhU2Y1cTJqNTZHdTVaeXc1YVNFNTVDRzVMcUw1THUyNzd5TVZtbGxkMGR5YjNWd0lPbWNnT2ltZ2VhenFPV0dqQ0JqWVhCMGRYSmxJT21ZdHVhdXRlZWFoT1M2aStTN3R1KzhqT1c1dHVTNGxPV1FpT2VRaHVXY3NPV2toT2VRaGlCV2FXVjNSM0p2ZFhBZzVMbUw2WmUwNTVxRTVMcUw1THUyNUx5ZzZZQ1M0NENDWEc0Z0tpRG9yN2ZsajRMb2dJTWdVMk55YjJ4c1ZtbGxkeURubW9UbHJwN25qckRtbmFYb2pyZmxqNWJtbTdUbHBKcmt2NkhtZ2EvamdJSmNiaUFxSUVCamJHRnpjeUJXYVdWM1IzSnZkWEJjYmlBcUlFQmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRGeHVJQ292WEc1MllYSWdWbWxsZDBkeWIzVndJRDBnWTJNdVEyeGhjM01vZTF4dUlDQWdJRzVoYldVNklDZGpZeTVXYVdWM1IzSnZkWEFuTEZ4dUlDQWdJR1Y0ZEdWdVpITTZJSEpsY1hWcGNtVW9KeTR2UTBORGIyMXdiMjVsYm5RbktWeHVYRzU5S1R0Y2JseHVYRzVqWXk1V2FXVjNSM0p2ZFhBZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGWnBaWGRIY205MWNEdGNiaUpkZlE9PSJdfQ==
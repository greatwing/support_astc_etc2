(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/animation/index.js';
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
        require('./bezier');
        require('./easing');
        require('./types');
        require('./motion-path-helper');
        require('./animation-curves');
        require('./animation-clip');
        require('./animation-manager');
        require('./animation-state');
        require('./animation-animator');
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvYW5pbWF0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQXlCQUEsT0FBQUEsQ0FBUSxVQUFSQTtRQUNBQSxPQUFBQSxDQUFRLFVBQVJBO1FBQ0FBLE9BQUFBLENBQVEsU0FBUkE7UUFDQUEsT0FBQUEsQ0FBUSxzQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxvQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxrQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxxQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxtQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxzQkFBUkEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5yZXF1aXJlKCcuL2JlemllcicpO1xucmVxdWlyZSgnLi9lYXNpbmcnKTtcbnJlcXVpcmUoJy4vdHlwZXMnKTtcbnJlcXVpcmUoJy4vbW90aW9uLXBhdGgtaGVscGVyJyk7XG5yZXF1aXJlKCcuL2FuaW1hdGlvbi1jdXJ2ZXMnKTtcbnJlcXVpcmUoJy4vYW5pbWF0aW9uLWNsaXAnKTtcbnJlcXVpcmUoJy4vYW5pbWF0aW9uLW1hbmFnZXInKTtcbnJlcXVpcmUoJy4vYW5pbWF0aW9uLXN0YXRlJyk7XG5yZXF1aXJlKCcuL2FuaW1hdGlvbi1hbmltYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5yZXF1aXJlKCcuL2JlemllcicpO1xucmVxdWlyZSgnLi9lYXNpbmcnKTtcbnJlcXVpcmUoJy4vdHlwZXMnKTtcbnJlcXVpcmUoJy4vbW90aW9uLXBhdGgtaGVscGVyJyk7XG5yZXF1aXJlKCcuL2FuaW1hdGlvbi1jdXJ2ZXMnKTtcbnJlcXVpcmUoJy4vYW5pbWF0aW9uLWNsaXAnKTtcbnJlcXVpcmUoJy4vYW5pbWF0aW9uLW1hbmFnZXInKTtcbnJlcXVpcmUoJy4vYW5pbWF0aW9uLXN0YXRlJyk7XG5yZXF1aXJlKCcuL2FuaW1hdGlvbi1hbmltYXRvcicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkluSmxjWFZwY21VaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRjVRa0ZCTEZGQlFWRXNWVUZCVWp0QlFVTkJRU3hSUVVGUkxGVkJRVkk3UVVGRFFVRXNVVUZCVVN4VFFVRlNPMEZCUTBGQkxGRkJRVkVzYzBKQlFWSTdRVUZEUVVFc1VVRkJVU3h2UWtGQlVqdEJRVU5CUVN4UlFVRlJMR3RDUVVGU08wRkJRMEZCTEZGQlFWRXNjVUpCUVZJN1FVRkRRVUVzVVVGQlVTeHRRa0ZCVWp0QlFVTkJRU3hSUVVGUkxITkNRVUZTSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2JseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUIzYjNKc1pIZHBaR1VzSUhKdmVXRnNkSGt0Wm5KbFpTd2dibTl1TFdGemMybG5ibUZpYkdVc0lISmxkbTlqWVdKc1pTQmhibVFnYm05dUxXVjRZMngxYzJsMlpTQnNhV05sYm5ObFhHNGdkRzhnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5c1pXeDVJSFJ2SUdSbGRtVnNiM0FnWjJGdFpYTWdiMjRnZVc5MWNpQjBZWEpuWlhRZ2NHeGhkR1p2Y20xekxpQlpiM1VnYzJoaGJHeGNiaUJ1YjNRZ2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOW1kSGRoY21VZ1ptOXlJR1JsZG1Wc2IzQnBibWNnYjNSb1pYSWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdkR2hoZENkelhHNGdkWE5sWkNCbWIzSWdaR1YyWld4dmNHbHVaeUJuWVcxbGN5NGdXVzkxSUdGeVpTQnViM1FnWjNKaGJuUmxaQ0IwYnlCd2RXSnNhWE5vTENCa2FYTjBjbWxpZFhSbExGeHVJSE4xWW14cFkyVnVjMlVzSUdGdVpDOXZjaUJ6Wld4c0lHTnZjR2xsY3lCdlppQkRiMk52Y3lCRGNtVmhkRzl5TGx4dVhHNGdWR2hsSUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUdsdUlIUm9hWE1nVEdsalpXNXpaU0JCWjNKbFpXMWxiblFnWVhKbElHeHBZMlZ1YzJWa0xDQnViM1FnYzI5c1pDNWNiaUJZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM0Z2NtVnpaWEoyWlhNZ1lXeHNJSEpwWjJoMGN5QnViM1FnWlhod2NtVnpjMng1SUdkeVlXNTBaV1FnZEc4Z2VXOTFMbHh1WEc0Z1ZFaEZJRk5QUmxSWFFWSkZJRWxUSUZCU1QxWkpSRVZFSUZ3aVFWTWdTVk5jSWl3Z1YwbFVTRTlWVkNCWFFWSlNRVTVVV1NCUFJpQkJUbGtnUzBsT1JDd2dSVmhRVWtWVFV5QlBVbHh1SUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBZZ1RVVlNRMGhCVGxSQlFrbE1TVlJaTEZ4dUlFWkpWRTVGVTFNZ1JrOVNJRUVnVUVGU1ZFbERWVXhCVWlCUVZWSlFUMU5GSUVGT1JDQk9UMDVKVGtaU1NVNUhSVTFGVGxRdUlFbE9JRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSVnh1SUVGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjYmlCTVNVRkNTVXhKVkZrc0lGZElSVlJJUlZJZ1NVNGdRVTRnUVVOVVNVOU9JRTlHSUVOUFRsUlNRVU5VTENCVVQxSlVJRTlTSUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MRnh1SUU5VlZDQlBSaUJQVWlCSlRpQkRUMDVPUlVOVVNVOU9JRmRKVkVnZ1ZFaEZJRk5QUmxSWFFWSkZJRTlTSUZSSVJTQlZVMFVnVDFJZ1QxUklSVklnUkVWQlRFbE9SMU1nU1U1Y2JpQlVTRVVnVTA5R1ZGZEJVa1V1WEc0Z0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaTljYmx4dWNtVnhkV2x5WlNnbkxpOWlaWHBwWlhJbktUdGNibkpsY1hWcGNtVW9KeTR2WldGemFXNW5KeWs3WEc1eVpYRjFhWEpsS0NjdUwzUjVjR1Z6SnlrN1hHNXlaWEYxYVhKbEtDY3VMMjF2ZEdsdmJpMXdZWFJvTFdobGJIQmxjaWNwTzF4dWNtVnhkV2x5WlNnbkxpOWhibWx0WVhScGIyNHRZM1Z5ZG1Wekp5azdYRzV5WlhGMWFYSmxLQ2N1TDJGdWFXMWhkR2x2YmkxamJHbHdKeWs3WEc1eVpYRjFhWEpsS0NjdUwyRnVhVzFoZEdsdmJpMXRZVzVoWjJWeUp5azdYRzV5WlhGMWFYSmxLQ2N1TDJGdWFXMWhkR2x2YmkxemRHRjBaU2NwTzF4dWNtVnhkV2x5WlNnbkxpOWhibWx0WVhScGIyNHRZVzVwYldGMGIzSW5LVHRjYmlKZGZRPT0iXX0=
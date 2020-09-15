(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/polyfill/object.js';
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
        if (!Object.assign) {
            Object.assign = function (target, source) {
                return cc.js.mixin(target, source);
            };
        }
        if (!Object.getOwnPropertyDescriptors) {
            Object.getOwnPropertyDescriptors = function (obj) {
                var descriptors = {};
                var ownKeys = Object.getOwnPropertyNames(obj);
                if (Object.getOwnPropertySymbols) {
                    ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(obj));
                }
                for (var i = 0; i < ownKeys.length; ++i) {
                    var key = ownKeys[i];
                    descriptors[key] = Object.getOwnPropertyDescriptor(obj, key);
                }
                return descriptors;
            };
        }
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamVjdC5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9wb2x5ZmlsbC9vYmplY3QuanMiXSwibmFtZXMiOlsibWl4aW4iLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJjYyIsImpzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsIm9iaiIsImRlc2NyaXB0b3JzIiwib3duS2V5cyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJpIiwibGVuZ3RoIiwia2V5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIl0sIm1hcHBpbmdzIjoiO0lBQ0EsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7SUFDb0IsSUFBQSxRQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQUE7SUFDQSxJQUFBLFVBQUEsR0FBQSwrQkFBQTtJQUNMLElBQU1BLFNBQUFBLEdBQWNDLE9BQUFBLEdBQTNCLFVBQUEsT0FBQSxFQUFBO0FBQUEsUUFESixPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsQ0FDSTtBQUFBLEtBQTJCQSxHQUVsQyxVQUFBLE9BQUEsRUFBQTtBQUFBLDhEQUFBO0FBQUEsS0FGYztJQUtmLFNBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUEsUUFDQSxJQUFBLENBQUEsT0FBQSxFQUFBO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUEsU0FEQTtBQUFBO1FBUEEsSUFBSSxDQUFDQyxNQUFBQSxDQUFPQyxNQUFaLEVBQW9CO0FBQUEsWUFDaEJELE1BQUFBLENBQU9DLE1BQVBELEdBQWdCLFVBQVVFLE1BQVYsRUFBa0JILE1BQWxCLEVBQTBCO0FBQUEsZ0JBQ3RDLE9BQU9JLEVBQUFBLENBQUdDLEVBQUhELENBQU1MLEtBQU5LLENBQVlELE1BQVpDLEVBQW9CSixNQUFwQkksQ0FBUCxDQURzQztBQUFBLGFBQTFDSCxDQURnQjtBQUFBO1FBVXBCLElBQUksQ0FBQ0EsTUFBQUEsQ0FBT0sseUJBQVosRUFBdUM7QUFBQSxZQUNuQ0wsTUFBQUEsQ0FBT0sseUJBQVBMLEdBQW1DLFVBQVVNLEdBQVYsRUFBZTtBQUFBLGdCQUM5QyxJQUFJQyxXQUFBQSxHQUFjLEVBQWxCLENBRDhDO0FBQUEsZ0JBRTlDLElBQUlDLE9BQUFBLEdBQVVSLE1BQUFBLENBQU9TLG1CQUFQVCxDQUEyQk0sR0FBM0JOLENBQWQsQ0FGOEM7QUFBQSxnQkFHOUMsSUFBSUEsTUFBQUEsQ0FBT1UscUJBQVgsRUFBa0M7QUFBQSxvQkFDOUJGLE9BQUFBLEdBQVVBLE9BQUFBLENBQVFHLE1BQVJILENBQWVSLE1BQUFBLENBQU9VLHFCQUFQVixDQUE2Qk0sR0FBN0JOLENBQWZRLENBQVZBLENBRDhCO0FBQUEsaUJBSFk7QUFBQSxnQkFNOUMsS0FBSSxJQUFJSSxDQUFBQSxHQUFJLENBQVIsQ0FBSixDQUFlQSxDQUFBQSxHQUFJSixPQUFBQSxDQUFRSyxNQUEzQixFQUFtQyxFQUFFRCxDQUFyQyxFQUF1QztBQUFBLG9CQUNuQyxJQUFJRSxHQUFBQSxHQUFNTixPQUFBQSxDQUFRSSxDQUFSSixDQUFWLENBRG1DO0FBQUEsb0JBRW5DRCxXQUFBQSxDQUFZTyxHQUFaUCxJQUFtQlAsTUFBQUEsQ0FBT2Usd0JBQVBmLENBQWdDTSxHQUFoQ04sRUFBcUNjLEdBQXJDZCxDQUFuQk8sQ0FGbUM7QUFBQSxpQkFOTztBQUFBLGdCQVU5QyxPQUFPQSxXQUFQLENBVjhDO0FBQUEsYUFBbERQLENBRG1DO0FBQUEsU0FIdkM7QUFBQTtJQUdZSyxJQUFBQSxPQUFBQSxFQUFBQTtBQUFBQSxRQUNEQSxRQUFBQSxDQUFBQSxRQUFBQSxDQUE0QixPQUE1QkEsRUFBc0NDLFNBQXRDRCxFQUEyQyxRQUEzQ0EsRUFEQ0E7QUFBQUEsS0FBQUEsTUFHVUw7QUFBQUEsUUFDSFUsaUJBQUFBLENBQXVCLGtCQUF2QkEsQ0FBdUIsVUFBdkJBLEVBQXVCLFlBQUE7QUFBQSxZQUFFLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBQUY7QUFBQSxTQUF2QkEsRUFER1Y7QUFBQUEiLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBmb3IgSUUxMVxuaWYgKCFPYmplY3QuYXNzaWduKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gY2MuanMubWl4aW4odGFyZ2V0LCBzb3VyY2UpO1xuICAgIH1cbn1cblxuLy8gZm9yIEJhaWR1IGJyb3dzZXJcbi8vIEltcGxlbWVudGF0aW9uIHJlZmVyZW5jZSB0bzogXG4vLyBodHRwOi8vMmFsaXR5LmNvbS8yMDE2LzAyL29iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzLmh0bWxcbi8vIGh0dHA6Ly9kb2NzLnczY3ViLmNvbS9qYXZhc2NyaXB0L2dsb2JhbF9vYmplY3RzL3JlZmxlY3Qvb3dua2V5cy9cbmlmICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3JzID0ge307XG4gICAgICAgIGxldCBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgLy8gZm9yIElFIDExXG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3duS2V5cy5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBsZXQga2V5ID0gb3duS2V5c1tpXTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzW2tleV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gICAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBmb3IgSUUxMVxuaWYgKCFPYmplY3QuYXNzaWduKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gY2MuanMubWl4aW4odGFyZ2V0LCBzb3VyY2UpO1xuICAgIH07XG59XG5cbi8vIGZvciBCYWlkdSBicm93c2VyXG4vLyBJbXBsZW1lbnRhdGlvbiByZWZlcmVuY2UgdG86IFxuLy8gaHR0cDovLzJhbGl0eS5jb20vMjAxNi8wMi9vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9ycy5odG1sXG4vLyBodHRwOi8vZG9jcy53M2N1Yi5jb20vamF2YXNjcmlwdC9nbG9iYWxfb2JqZWN0cy9yZWZsZWN0L293bmtleXMvXG5pZiAoIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICAvLyBmb3IgSUUgMTFcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3duS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNbaV07XG4gICAgICAgICAgICBkZXNjcmlwdG9yc1trZXldID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTlpYW1WamRDNXFjeUpkTENKdVlXMWxjeUk2V3lKUFltcGxZM1FpTENKaGMzTnBaMjRpTENKMFlYSm5aWFFpTENKemIzVnlZMlVpTENKall5SXNJbXB6SWl3aWJXbDRhVzRpTENKblpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0p6SWl3aWIySnFJaXdpWkdWelkzSnBjSFJ2Y25NaUxDSnZkMjVMWlhseklpd2laMlYwVDNkdVVISnZjR1Z5ZEhsT1lXMWxjeUlzSW1kbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N5SXNJbU52Ym1OaGRDSXNJbWtpTENKc1pXNW5kR2dpTENKclpYa2lMQ0puWlhSUGQyNVFjbTl3WlhKMGVVUmxjMk55YVhCMGIzSWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEU3UVVGRFFTeEpRVUZKTEVOQlFVTkJMRTlCUVU5RExFMUJRVm9zUlVGQmIwSTdRVUZEYUVKRUxGZEJRVTlETEUxQlFWQXNSMEZCWjBJc1ZVRkJWVU1zVFVGQlZpeEZRVUZyUWtNc1RVRkJiRUlzUlVGQk1FSTdRVUZEZEVNc1pVRkJUME1zUjBGQlIwTXNSVUZCU0N4RFFVRk5ReXhMUVVGT0xFTkJRVmxLTEUxQlFWb3NSVUZCYjBKRExFMUJRWEJDTEVOQlFWQTdRVUZEU0N4TFFVWkVPMEZCUjBnN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpMRU5CUVVOSUxFOUJRVTlQTEhsQ1FVRmFMRVZCUVhWRE8wRkJRMjVEVUN4WFFVRlBUeXg1UWtGQlVDeEhRVUZ0UXl4VlFVRlZReXhIUVVGV0xFVkJRV1U3UVVGRE9VTXNXVUZCU1VNc1kwRkJZeXhGUVVGc1FqdEJRVU5CTEZsQlFVbERMRlZCUVZWV0xFOUJRVTlYTEcxQ1FVRlFMRU5CUVRKQ1NDeEhRVUV6UWl4RFFVRmtPMEZCUTBFc1dVRkJTVklzVDBGQlQxa3NjVUpCUVZnc1JVRkJhME03UVVGQlJUdEJRVU5vUTBZc2MwSkJRVlZCTEZGQlFWRkhMRTFCUVZJc1EwRkJaV0lzVDBGQlQxa3NjVUpCUVZBc1EwRkJOa0pLTEVkQlFUZENMRU5CUVdZc1EwRkJWanRCUVVOSU8wRkJRMFFzWVVGQlNTeEpRVUZKVFN4SlFVRkpMRU5CUVZvc1JVRkJaVUVzU1VGQlNVb3NVVUZCVVVzc1RVRkJNMElzUlVGQmJVTXNSVUZCUlVRc1EwRkJja01zUlVGQmRVTTdRVUZEYmtNc1owSkJRVWxGTEUxQlFVMU9MRkZCUVZGSkxFTkJRVklzUTBGQlZqdEJRVU5CVEN4M1FrRkJXVThzUjBGQldpeEpRVUZ0UW1oQ0xFOUJRVTlwUWl4M1FrRkJVQ3hEUVVGblExUXNSMEZCYUVNc1JVRkJjVU5STEVkQlFYSkRMRU5CUVc1Q08wRkJRMGc3UVVGRFJDeGxRVUZQVUN4WFFVRlFPMEZCUTBnc1MwRllSRHRCUVZsSUlpd2labWxzWlNJNkltOWlhbVZqZEM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbHh1THk4Z1ptOXlJRWxGTVRGY2JtbG1JQ2doVDJKcVpXTjBMbUZ6YzJsbmJpa2dlMXh1SUNBZ0lFOWlhbVZqZEM1aGMzTnBaMjRnUFNCbWRXNWpkR2x2YmlBb2RHRnlaMlYwTENCemIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOakxtcHpMbTFwZUdsdUtIUmhjbWRsZEN3Z2MyOTFjbU5sS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaTh2SUdadmNpQkNZV2xrZFNCaWNtOTNjMlZ5WEc0dkx5QkpiWEJzWlcxbGJuUmhkR2x2YmlCeVpXWmxjbVZ1WTJVZ2RHODZJRnh1THk4Z2FIUjBjRG92THpKaGJHbDBlUzVqYjIwdk1qQXhOaTh3TWk5dlltcGxZM1F0WjJWMGIzZHVjSEp2Y0dWeWRIbGtaWE5qY21sd2RHOXljeTVvZEcxc1hHNHZMeUJvZEhSd09pOHZaRzlqY3k1M00yTjFZaTVqYjIwdmFtRjJZWE5qY21sd2RDOW5iRzlpWVd4ZmIySnFaV04wY3k5eVpXWnNaV04wTDI5M2JtdGxlWE12WEc1cFppQW9JVTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVVSbGMyTnlhWEIwYjNKektTQjdYRzRnSUNBZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjbk1nUFNCbWRXNWpkR2x2YmlBb2IySnFLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQmtaWE5qY21sd2RHOXljeUE5SUh0OU8xeHVJQ0FnSUNBZ0lDQnNaWFFnYjNkdVMyVjVjeUE5SUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6S0c5aWFpazdYRzRnSUNBZ0lDQWdJR2xtSUNoUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbFRlVzFpYjJ4ektTQjdJQzh2SUdadmNpQkpSU0F4TVZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM2R1UzJWNWN5QTlJRzkzYmt0bGVYTXVZMjl1WTJGMEtFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITW9iMkpxS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdabTl5S0d4bGRDQnBJRDBnTURzZ2FTQThJRzkzYmt0bGVYTXViR1Z1WjNSb095QXJLMmtwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUd0bGVTQTlJRzkzYmt0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaWE5qY21sd2RHOXljMXRyWlhsZElEMGdUMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1UkdWelkzSnBjSFJ2Y2lodlltb3NJR3RsZVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUmxjMk55YVhCMGIzSnpPMXh1SUNBZ0lIMWNibjBpWFgwPSJdfQ==
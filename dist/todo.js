System.register([], function (_export) {
  var _createClass, _classCallCheck, NgInstance, TestModule;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NgInstance = function NgInstance(name, type, impl) {
        _classCallCheck(this, NgInstance);

        this.name = name;
        this.type = type;
        this.impl = impl;
      };

      window.angular = {};
      angular.forEach = function (obj, iterator) {
        return obj.forEach(iterator);
      };

      angular.instances = [];
      angular.module = function (name, deps) {
        return window.angular;
      };

      angular.controller = function (ctrlName, min) {
        angular.instances.push(new NgInstance(ctrlName, "controller", min[1]));
      };

      TestModule = _export("TestModule", (function () {
        function TestModule() {
          _classCallCheck(this, TestModule);
        }

        _createClass(TestModule, {
          activate: {
            value: function activate() {
              var _this = this;

              return System["import"]("../angular/todo").then(function () {
                // run Angular controller instance
                angular.instances[0].impl(_this);
              });
            }
          }
        });

        return TestModule;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBTSxVQUFVLEVBdUJILFVBQVU7Ozs7Ozs7Ozs7O0FBdkJqQixnQkFBVSxHQUNILFNBRFAsVUFBVSxDQUNGLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOzhCQUQxQixVQUFVOztBQUVaLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQ2xCOztBQUdILFlBQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGFBQU8sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFLO0FBQ25DLGVBQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUM5QixDQUFDOztBQUVGLGFBQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGFBQU8sQ0FBQyxNQUFNLEdBQUcsVUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFLO0FBQy9CLGVBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztPQUN2QixDQUFDOztBQUVGLGFBQU8sQ0FBQyxVQUFVLEdBQUcsVUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFLO0FBQ3RDLGVBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUN4RSxDQUFDOztBQUdXLGdCQUFVO0FBQ1YsaUJBREEsVUFBVSxHQUNQO2dDQURILFVBQVU7U0FFcEI7O3FCQUZVLFVBQVU7QUFJckIsa0JBQVE7bUJBQUEsb0JBQUc7OztBQUNULHFCQUFPLE1BQU0sVUFBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFFLFlBQU07O0FBRWxELHVCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTSxDQUFDO2VBQ2pDLENBQUMsQ0FBQzthQUNKOzs7O2VBVFUsVUFBVSIsImZpbGUiOiJ0b2RvLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
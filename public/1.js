(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormTask.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormTask.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FormTask',
  props: {
    newTask: {
      require: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      task: {
        id: null,
        title: "",
        content: "",
        adate: ""
      },
      marginLeft: '10%',
      isImportant: "!important",
      editTask: false,
      blackTheme: false
    };
  },
  created: function created() {
    if (this.$route.params.id) {
      this.show(this.$route.params.id);
    }
  },
  computed: {
    computedTask: {
      get: function get() {
        return this.task;
      },
      set: function set(params) {
        this.task = {
          title: params.title,
          content: params.content,
          adate: params.adate
        };
      }
    }
  },
  methods: {
    textCompleted: function textCompleted(isCompleted) {
      return isCompleted == 1 ? "Dévalider" : "Valider";
    },
    show: function show(id) {
      var _this = this;

      axios.get('/task/' + id).then(function (response) {
        _this.task = response.data;
      })["catch"](function (error) {
        _this.errors.push(error);

        console.error(error);
      });
    },
    edit: function edit() {
      this.editTask = true;
    },
    store: function store() {
      var _this2 = this;

      var task = this.computedTask;
      axios.post('/task/new', task).then(function (response) {
        window.location.href = '#/';
      })["catch"](function (error) {
        _this2.errors.push(error);

        console.error(error);
      });
    },
    update: function update() {
      var _this3 = this;

      var task = this.computedTask;
      axios.patch('/task/' + task.id, task).then(function (response) {
        _this3.editTask = false;
      })["catch"](function (error) {
        _this3.errors.push(error);

        console.error(error);
      });
    },
    destroy: function destroy() {
      var _this4 = this;

      if (this.task.id !== null) axios["delete"]('/task/' + this.task.id).then(function (response) {
        window.location.href = '#/';
      })["catch"](function (error) {
        _this4.errors.push(error);

        console.error(error);
      });
    },
    cancel: function cancel() {
      window.location.href = '#/';
    },
    completed: function completed() {
      var _this5 = this;

      var checked = this.computedTask.completed;

      if (checked == 1) {
        this.computedTask.completed = 0;
      }

      if (checked == 0) {
        this.computedTask.completed = 1;
      }

      axios.patch('/task/' + this.computedTask.id, this.computedTask).then(function (response) {})["catch"](function (error) {
        _this5.errors.push(error);

        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormTask.vue?vue&type=template&id=e13f2558&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormTask.vue?vue&type=template&id=e13f2558& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.editTask && !_vm.newTask
      ? _c("div", { staticClass: "container" }, [
          _c("h1", { class: [{ inverted: _vm.blackTheme }, "header"] }, [
            _vm._v("\n      " + _vm._s(_vm.task.title) + "\n    ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { class: ["raised", { inverted: _vm.blackTheme }, "segment"] },
            [
              _c("p", [_vm._v(_vm._s(_vm.task.content))]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.task.adate))])
            ]
          ),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "waves-effect waves-light btn green accent-4",
                on: {
                  click: function($event) {
                    return _vm.edit()
                  }
                }
              },
              [_vm._v("Edit")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "waves-effect waves-light btn blue",
                on: {
                  click: function($event) {
                    return _vm.cancel()
                  }
                }
              },
              [_vm._v("Cancel")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "waves-effect waves-light btn red",
                on: {
                  click: function($event) {
                    return _vm.destroy()
                  }
                }
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                class: [
                  "waves-effect",
                  "waves-light",
                  "btn",
                  "right",
                  { red: _vm.task.completed == 0 },
                  { "green accent-4": _vm.task.completed == 1 }
                ],
                on: {
                  click: function($event) {
                    return _vm.completed()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.textCompleted(_vm.task.completed)))]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.editTask || _vm.newTask
      ? _c("div", { staticClass: "ui container" }, [
          _c("div", { class: ["ui", { inverted: _vm.blackTheme }, "form"] }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "input-field col s12" }, [
                _c("label", { attrs: { for: "title" } }, [_vm._v("Titre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.task.title,
                      expression: "task.title",
                      modifiers: { trim: true }
                    }
                  ],
                  attrs: { type: "text", id: "title" },
                  domProps: { value: _vm.task.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.task, "title", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "input-field col s12" }, [
                _c("label", { attrs: { for: "content" } }, [_vm._v("Contenu")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.task.content,
                      expression: "task.content",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "materialize-textarea",
                  attrs: { id: "content" },
                  domProps: { value: _vm.task.content },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.task, "content", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "input-field col s12" }, [
                _c("label", { attrs: { for: "dateTime" } }, [
                  _vm._v("Date limite")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.task.adate,
                      expression: "task.adate",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "datepicker",
                  attrs: { id: "dateTime", type: "text" },
                  domProps: { value: _vm.task.adate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.task, "adate", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c(
                "button",
                {
                  staticClass: "btn waves-effect waves-light blue",
                  on: {
                    click: function($event) {
                      return _vm.cancel()
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _vm.newTask
                ? _c(
                    "button",
                    {
                      staticClass:
                        "btn waves-effect waves-light green accent-4",
                      on: {
                        click: function($event) {
                          return _vm.store()
                        }
                      }
                    },
                    [_vm._v("Créer")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.editTask
                ? _c(
                    "button",
                    {
                      staticClass:
                        "btn waves-effect waves-light green accent-4",
                      on: {
                        click: function($event) {
                          return _vm.update()
                        }
                      }
                    },
                    [_vm._v("Enregister")]
                  )
                : _vm._e()
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FormTask.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/FormTask.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTask_vue_vue_type_template_id_e13f2558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTask.vue?vue&type=template&id=e13f2558& */ "./resources/js/components/FormTask.vue?vue&type=template&id=e13f2558&");
/* harmony import */ var _FormTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTask.vue?vue&type=script&lang=js& */ "./resources/js/components/FormTask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTask_vue_vue_type_template_id_e13f2558___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTask_vue_vue_type_template_id_e13f2558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormTask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormTask.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FormTask.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormTask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormTask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormTask.vue?vue&type=template&id=e13f2558&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FormTask.vue?vue&type=template&id=e13f2558& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTask_vue_vue_type_template_id_e13f2558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormTask.vue?vue&type=template&id=e13f2558& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormTask.vue?vue&type=template&id=e13f2558&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTask_vue_vue_type_template_id_e13f2558___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTask_vue_vue_type_template_id_e13f2558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
window.SIDEBAR_ITEMS = {"constant":[["CONFIG_FILE","Build configuration provided by `PYO3_CONFIG_FILE`. May be empty if env var not set."],["HOST_CONFIG","Build configuration discovered by `pyo3-build-config` build script. Not aware of cross-compilation settings."]],"enum":[["BuildFlag",""],["PythonImplementation",""]],"fn":[["_add_extension_module_link_args",""],["add_extension_module_link_args","Adds linker arguments (for macOS) suitable for PyO3’s `extension-module` feature."],["cross_compiling","Detect whether we are cross compiling and return an assembled CrossCompileConfig if so."],["cross_compiling_from_to","Detect whether we are cross compiling and return an assembled CrossCompileConfig if so."],["find_all_sysconfigdata","Finds `_sysconfigdata*.py` files for detected Python interpreters."],["get","Loads the configuration determined from the build environment."],["parse_sysconfigdata","Parse sysconfigdata file"],["print_feature_cfgs","Use certain features if we detect the compiler being used supports them."],["resolve_cross_compile_config_path","Returns the path where PyO3’s build.rs writes its cross compile configuration."],["use_pyo3_cfgs","Adds all the `#[cfg]` flags to the current compilation."]],"macro":[["bail","A simple macro for returning an error. Resembles anyhow::bail."],["ensure","A simple macro for checking a condition. Resembles anyhow::ensure."],["warn","Show warning. If needed, please extend this macro to support arguments."]],"mod":[["errors",""],["impl_","Main implementation module included in both the `pyo3-build-config` library crate and its build script."],["pyo3_build_script_impl","Private exports used in PyO3’s build.rs"]],"struct":[["BuildFlags","A list of python interpreter compile-time preprocessor defines that we will pick up and pass to rustc via `--cfg=py_sys_config={varname}`; this allows using them conditional cfg attributes in the .rs files, so"],["CrossCompileConfig","Configuration needed by PyO3 to cross-compile for a target platform."],["InterpreterConfig","Configuration needed by PyO3 to build for the correct Python implementation."],["PythonVersion",""],["Triple","A target “triple”. Historically such things had three fields, though they’ve added additional fields over time."]]};
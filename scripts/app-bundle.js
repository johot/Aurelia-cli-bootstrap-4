define('app',["require", "exports", "text!config.json"], function (require, exports, config) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            console.log(config);
            var text = config;
            var parsedObject = JSON.parse(config);
            console.log("zzz");
            console.log(config);
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!config.json',[],function () { return '{\r\n    "xxx": "I am alive!"\r\n}';});

define('text!style.css', ['module'], function(module) { module.exports = ".red {\r\n    background-color: red;\r\n    color:white;\r\n}\r\n\r\n.border {\r\n    border-style: groove;\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"style.css\"></require><style>.wrapper{display:grid;grid-template-columns:50% 1fr 1fr;grid-template-rows:1fr 3fr 1fr 1fr}.item{grid-column:1/3;grid-row:1/3}</style><div class=\"wrapper\"><div class=\"letter border item\">A</div><div class=\"letter border\">B</div><div class=\"letter border\">C</div><div class=\"letter border\">D</div><div class=\"letter border mt-5 item\">E</div><div class=\"letter border\">F</div><div class=\"letter border\">G</div><div class=\"letter border\">H</div></div></template>"; });
define('text!app2.html', ['module'], function(module) { module.exports = ""; });
define('text!app_boot.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"style.css\"></require><nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\"><button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button> <a class=\"navbar-brand\" href=\"#\">Navbar</a><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Link</a></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Disabled</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\"> <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></form></div></nav><div class=\"container-fluid\"><div class=\"row\"><div class=\"col border\">Col<div class=\"row flex-row justify-content-between\"><div class=\"alert alert-danger\" role=\"alert\"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div><div class=\"border\">Kolumn</div><div>Kolumn 3</div></div></div><div class=\"col border\">Col<div class=\"row flex-row justify-content-between\"><div class=\"border\">Kolumn</div><div>Kolumn 3</div></div></div><div class=\"col border\">Col<div class=\"row flex-row justify-content-between\"><div class=\"border\">Kolumn</div><div>Kolumn 3</div></div></div></div></div></template>"; });
define('text!app_gr.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"style.css\"></require><style></style><div class=\"wrapper\"><div class=\"letter border\">A</div><div class=\"letter border\">B</div><div class=\"letter border\">C</div><div class=\"letter border\">D</div><div class=\"letter border item red\">E</div><div class=\"letter border\">F</div><div class=\"letter border\">G</div><div class=\"letter border\">H</div></div></template>"; });
define('text!app_old.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"style.css\"></require><div class=\"container-fluid border\"><ul class=\"list-group\"><li class=\"list-group-item flex-column align-items-start\"><div class=\"p-2 w-25 red\"><h4>Foto</h4></div><div>Beskrivning</div><div>Adress</div></li><li class=\"list-group-item\">Dapibus ac facilisis in</li><li class=\"list-group-item\">Morbi leo risus</li><li class=\"list-group-item\">Porta ac consectetur ac</li><li class=\"list-group-item\">Vestibulum at eros</li></ul></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
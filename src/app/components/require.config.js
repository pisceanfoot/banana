// /**
//  * Bootstrap require with the needed config, then load the app.js module.
//  */

require.config({
  baseUrl: 'app',
  // urlArgs: 'r=@REV@',
  paths: {
    config:                   '../config',
    settings:                 'components/settings',
    kbn:                      'components/kbn',

    css:                      '../vendor/require/css',
    text:                     '../bower_components/requirejs-text/text',
    moment:                   '../bower_components/moment/moment',
    filesaver:                '../bower_components/FileSaver/FileSaver',

    angular:                  '../bower_components/angular/angular',
    'angular-route':          '../bower_components/angular-route/angular-route',
    'angular-dragdrop':       '../bower_components/angular-dragdrop/src/angular-dragdrop',
    'angular-strap':          '../bower_components/angular-strap/dist/angular-strap',
    'angular-strap-tpl':      '../bower_components/angular-strap/dist/angular-strap.tpl.min',
    'angular-animate':        '../bower_components/angular-animate/angular-animate',
    'angular-sanitize':       '../bower_components/angular-sanitize/angular-sanitize',
    timepicker:               '../bower_components/bootstrap-timepicker/js/bootstrap-timepicker',
    datepicker:               '../bower_components/bootstrap-datepicker/js/bootstrap-datepicker',

    underscore:               'components/underscore.extended',
    'underscore-src':         '../bower_components/underscore/underscore',
    bootstrap:                '../bower_components/bootstrap/dist/js/bootstrap',

    jquery:                   '../bower_components/jquery/dist/jquery',
    'jquery-ui':              '../bower_components/jquery-ui/jquery-ui',

    'extend-jquery':          'components/extend-jquery',

    'jquery.flot':            '../bower_components/flot/jquery.flot',
    'jquery.flot.pie':        '../bower_components/flot/jquery.flot.pie',
    'jquery.flot.selection':  '../bower_components/flot/jquery.flot.selection',
    'jquery.flot.stack':      '../bower_components/flot/jquery.flot.stack',
    'jquery.flot.stackpercent':'../vendor/jquery/jquery.flot.stackpercent',
    'jquery.flot.time':       '../bower_components/flot/jquery.flot.time',

    modernizr:                '../bower_components/modernizr/modernizr',
    elasticjs:                '../vendor/elasticjs/elastic-angular-client',
    solrjs:                   '../vendor/solrjs/solr-angular-client',
    d3:                       '../bower_components/d3/d3',
  },
  shim: {
    underscore: {
      exports: '_'
    },

    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },

    bootstrap: {
      deps: ['jquery']
    },

    modernizr: {
      exports: 'Modernizr'
    },

    jquery: {
      exports: 'jQuery'
    },

    // simple dependency declaration
    'jquery-ui':            ['jquery'],
    'jquery.flot':          ['jquery'],
    'jquery.flot.pie':      ['jquery', 'jquery.flot'],
    'jquery.flot.selection':['jquery', 'jquery.flot'],
    'jquery.flot.stack':    ['jquery', 'jquery.flot'],
    'jquery.flot.stackpercent':['jquery', 'jquery.flot'],
    'jquery.flot.time':     ['jquery', 'jquery.flot'],

    'angular-sanitize':     ['angular'],
    'angular-animate':      ['angular'],
    'angular-cookies':      ['angular'],
    'angular-dragdrop':     ['jquery','jquery-ui','angular'],
    'angular-loader':       ['angular'],
    'angular-mocks':        ['angular'],
    'angular-resource':     ['angular'],
    'angular-route':        ['angular'],
    'angular-touch':        ['angular'],

    'angular-strap':        ['angular', 'angular-animate', 'bootstrap', 'timepicker', 'datepicker'],
    'angular-strap-tpl':    ['angular', 'angular-strap'],

    timepicker:             ['jquery', 'bootstrap'],
    datepicker:             ['jquery', 'bootstrap'],

    elasticjs:              ['angular', '../vendor/elasticjs/elastic'],
    solrjs:                 ['angular', '../vendor/solrjs/solr']
  }
});

// ======================================= OLD ONE ===================================


// require.config({
//   baseUrl: 'app',
//   // urlArgs: 'r=@REV@',
//   paths: {
//     config:                   '../config',
//     settings:                 'components/settings',
//     kbn:                      'components/kbn',

//     css:                      '../vendor/require/css',
//     text:                     '../vendor/require/text',
//     moment:                   '../vendor/moment',
//     filesaver:                '../vendor/filesaver',

//     angular:                  '../vendor/angular/angular',
//     'angular-dragdrop':       '../vendor/angular/angular-dragdrop',
//     'angular-strap':          '../vendor/angular/angular-strap',
//     'angular-sanitize':       '../vendor/angular/angular-sanitize',
//     timepicker:               '../vendor/angular/timepicker',
//     datepicker:               '../vendor/angular/datepicker',

//     underscore:               'components/underscore.extended',
//     'underscore-src':         '../vendor/underscore',
//     bootstrap:                '../vendor/bootstrap/bootstrap',

//     jquery:                   '../vendor/jquery/jquery-1.8.0',
//     'jquery-ui':              '../vendor/jquery/jquery-ui-1.10.3',

//     'extend-jquery':          'components/extend-jquery',

//     'jquery.flot':            '../vendor/jquery/jquery.flot',
//     'jquery.flot.pie':        '../vendor/jquery/jquery.flot.pie',
//     'jquery.flot.selection':  '../vendor/jquery/jquery.flot.selection',
//     'jquery.flot.stack':      '../vendor/jquery/jquery.flot.stack',
//     'jquery.flot.stackpercent':'../vendor/jquery/jquery.flot.stackpercent',
//     'jquery.flot.time':       '../vendor/jquery/jquery.flot.time',

//     modernizr:                '../vendor/modernizr-2.6.1',
//     elasticjs:                '../vendor/elasticjs/elastic-angular-client',
//     solrjs:                   '../vendor/solrjs/solr-angular-client',
//     d3:                       '../vendor/d3',
//   },
//   shim: {
//     underscore: {
//       exports: '_'
//     },

//     angular: {
//       deps: ['jquery'],
//       exports: 'angular'
//     },

//     bootstrap: {
//       deps: ['jquery']
//     },

//     modernizr: {
//       exports: 'Modernizr'
//     },

//     jquery: {
//       exports: 'jQuery'
//     },

//     // simple dependency declaration
//     'jquery-ui':            ['jquery'],
//     'jquery.flot':          ['jquery'],
//     'jquery.flot.pie':      ['jquery', 'jquery.flot'],
//     'jquery.flot.selection':['jquery', 'jquery.flot'],
//     'jquery.flot.stack':    ['jquery', 'jquery.flot'],
//     'jquery.flot.stackpercent':['jquery', 'jquery.flot'],
//     'jquery.flot.time':     ['jquery', 'jquery.flot'],

//     'angular-sanitize':     ['angular'],
//     'angular-cookies':      ['angular'],
//     'angular-dragdrop':     ['jquery','jquery-ui','angular'],
//     'angular-loader':       ['angular'],
//     'angular-mocks':        ['angular'],
//     'angular-resource':     ['angular'],
//     'angular-route':        ['angular'],
//     'angular-touch':        ['angular'],

//     'angular-strap':        ['angular', 'bootstrap','timepicker', 'datepicker'],

//     timepicker:             ['jquery', 'bootstrap'],
//     datepicker:             ['jquery', 'bootstrap'],

//     elasticjs:              ['angular', '../vendor/elasticjs/elastic'],
//     solrjs:                 ['angular', '../vendor/solrjs/solr']
//   }
// });
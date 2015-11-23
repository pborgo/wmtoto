module wmtoto.core {
    'use strict';

    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import Moment = moment.Moment;

    export interface ICoreConfig {
        appErrorPrefix: string;
        appTitle: string;
        momentLocale: string;
        odataPath: string;
    }

    export class CoreConfig implements ICoreConfig {
        private _appErrorPrefix = '[AngularTs Error]';
        get appErrorPrefix(): string { return this._appErrorPrefix; }

        private _appTitle = 'AngularTs';
        get appTitle(): string { return this._appTitle; }

        private _momentLocale = 'de';
        get momentLocale(): string { return this._momentLocale; }

        private _odataPath = 'https://localhost:44304/api/';
        get odataPath(): string { return this._odataPath; }
    };

    angular.module('app.core')
        .constant('moment', moment)
        .constant('config', new CoreConfig())
        .config(configureUiRouter)
        .run(configureMoment);

    configureUiRouter.$inject = ['$urlRouterProvider'];
    function configureUiRouter($urlRouterProvider: IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/products");
    };

    configureMoment.$inject = ['config', 'moment'];
    function configureMoment(config: ICoreConfig, moment: Moment) {
        moment.locale(config.momentLocale);
    };
}
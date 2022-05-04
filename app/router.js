import EmberRouter from '@ember/routing/router';
import config from 'repro-glint-gts-error-parse-node/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});

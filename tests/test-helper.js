import Application from 'repro-glint-gts-error-parse-node/app';
import config from 'repro-glint-gts-error-parse-node/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

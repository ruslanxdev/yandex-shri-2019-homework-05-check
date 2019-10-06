'use strict';

const _ = require('lodash');

var m1 = _.map([], fn); // здесь должно сработать
_ = {map: () => []};
var m2 = _.map([], fn); // здесь НЕ должно сработать

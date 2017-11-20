'use strict';

const Master = require('./lib/master');

/**
 * cluster start flow:
 *
 * [startCluster] -> master -> agent_worker -> new [Agent]       -> agentWorkerLoader
 *                         `-> app_worker   -> new [Application] -> appWorkerLoader
 *
 */

/**
 * start egg app
 * @method Egg#startCluster
 * @param {Object} options {@link Master}
 * @param {Function} callback start success callback
 */
// 启动 master 进程
exports.startCluster = function(options, callback) {
  // 启动成功后执行 callback
  new Master(options).ready(callback);
};

if (System._nodeRequire)
  module.exports = System._nodeRequire('repl');
else
  throw "Node repl module not supported in browsers.";
// store the code for the worker module as a function that takes the shared module exports as an argument
const __dcg_worker_module__ = (__dcg_shared_module_exports__) => {
  var n = {};
  __dcg_shared_module_exports__["qe"].log = function (e) {
    self.postMessage({ log: JSON.stringify(e) });
  };
  var o = self;
  o.window = o;
  o.onmessage = function (e) {
    let s = e.data && e.data.connectionId;
    if (s) {
      if (e.data.originalMessage.type === "destroy") delete n[s];
      else {
        let a = n[s];
        a || (a = new __dcg_shared_module_exports__["re"]((r, g) => {
          o.postMessage({
            connectionId: s,
            originalMessage: { type: r, payload: g },
          });
        }),
          n[s] = a), a.processChangeSet(e.data.originalMessage);
      }
    }
  };
  o.loadMessageQueue && (o.loadMessageQueue.forEach((e) => {
    o.onmessage(e);
  }),
    delete o.loadMessageQueue);
};
// execute the shared module store its exports
const __dcg_worker_shared_module_exports__ = `${__dcg_shared_module_source__};`;
// call the worker module, passing in the shared module exports
__dcg_worker_module__(__dcg_worker_shared_module_exports__);

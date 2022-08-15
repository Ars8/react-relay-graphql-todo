/**
 * @generated SignedSource<<7db987fd027ab61307ef1e951a2882c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteTodoPayload",
    "kind": "LinkedField",
    "name": "deleteTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedTodoId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodo_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTodo_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9fd2bbc33a7c027cca5b4d754567a837",
    "id": null,
    "metadata": {},
    "name": "DeleteTodo_Mutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodo_Mutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    deletedTodoId\n  }\n}\n"
  }
};
})();

node.hash = "bc834510b341fc8bb49967208a7027d2";

module.exports = node;

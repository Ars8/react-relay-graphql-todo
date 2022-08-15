/**
 * @generated SignedSource<<7193103a9ddf59891e8a7842b5ecd85e>>
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
    "concreteType": "ToggleTodoPayload",
    "kind": "LinkedField",
    "name": "toggleTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
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
    "name": "ToggleTodo_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToggleTodo_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "deef377ad1e5bd7ccbeefa83111a9758",
    "id": null,
    "metadata": {},
    "name": "ToggleTodo_Mutation",
    "operationKind": "mutation",
    "text": "mutation ToggleTodo_Mutation(\n  $input: ToggleTodoInput!\n) {\n  toggleTodo(input: $input) {\n    todo {\n      id\n      completed\n    }\n  }\n}\n"
  }
};
})();

node.hash = "194d8a26d044778ad0bf9364748a796d";

module.exports = node;

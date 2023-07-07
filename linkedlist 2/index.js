// Linked Lists - Push & BuildOneTwoThree

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
// The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

// The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null


// describe("tests for inserting a node before another node.", function() {
//     it("", function() {
//       Test.assertEquals(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
//       Test.assertEquals(push(null, 1).next, null, "Should be able to create a new linked list with push().");
//       Test.assertEquals(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
//       Test.assertEquals(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");
//     });
//   });
  
//   describe("tests for building a linked list.", function() {
//     it("", function() {
//       Test.assertEquals(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
//       Test.assertEquals(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
//       Test.assertEquals(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
//       Test.assertEquals(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");
//     });
//   });

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    const newNode = new Node(data);
    
    newNode.next = head;
    head = newNode;
    
    return head;
  }
  
  function buildOneTwoThree() {
    let head = null;
    head = push(head, 3);
    head = push(head, 2);
    head = push(head, 1);
    return head;
  }
  
  const linkedList = buildOneTwoThree();
console.log(linkedList); 
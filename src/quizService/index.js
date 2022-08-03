const qBank = [
  {
    question:
      " The operating system maintains a __ table that keeps track of how many frames have been allocated, how many are there, and how many are available?",
    answers: ["memory ","mapping"," page","frame"],
    correct: "frame",
    questionId: "099099"
  },
  {
    question:" What is an operating system?",
    answers: ["interface between the hardware and application programs", "collection of programs that manages hardware resources", "collection of programs that manages hardware resources", "all of the mentioned"],
    correct: "all of the mentioned",
    questionId: "183452"
  },
  {
    question: "The values appearing in given attributes of any tuple in the referencing relation must likewise occur in specified attributes of at least one tuple in the referenced relation, according to _______ integrity constraint?",
    answers: ["Referential", "Primary", "Referencing", "Referencing"],
    correct: "Referential",
    questionId: "267908"
  },
  {
    question: "Which of the following is known as a set of entities of the same type that share same properties, or attributes?",
    answers: ["Relation set","Tuples","Entity set","Entity Relation model"],
    correct:"Entity set",
    questionId: "333247"
  },
  {
    question: "when does the arraylndexoutofbondusexception occur?",
    answers:["compile-time","run-time","not ab error","not an exception at all"],
    correct:"run-time",
    questionId: "496293"
  },
  {
    question: "which of the following is false about a circular linked list?",
    answers: ["Every node has a successor","Time complexity of inserting a new node at the head of the list is O(1)"," Time complexity for deleting the last node is O(n)","We can traverse the whole circular linked list by starting from any point "],                                                                                                   
    correct:"time complexity of inserting a new node ar the head of the list is O(1)",
    questionId: "588909"
  },
  {
    question: "What is the time complexity of enqueue operation?",
    answers:["O(logn)","O(nlogn)"," O(n)"," O(1)"],                                                                                                                                                                                                       
    correct:"O(1)",
    questionId: "648452"
  },
  {
    question: "What is meant by a polymorphism in C++?",
    answers:["class having only single form", "class having four forms", "class having many forms"," class having two forms"],
    correct:"class having many forms",
    questionId: "786649"
  },
  {
    question: "Which keyword is used to define the macros in c ++?",
    answers:["#macro", "#define"," macro"," define"],
    correct:"#define",
    questionId: "839754"
  },
  {
    question:
      "Which one of the following is an application of Stack Data Structure?",
    answers: [
      "Managing function calls",
      "The stock span problem",
      "Arithmetic expression evaluation",
      "All of the above"
    ],
    correct:"All of the above",
    questionId: "98390"
  },
  {
    question: "Which one of the following is an application of Queue Data Structure?",
    answers: ["When a resource is shared among multiple consumers.", "	When data is transferred asynchronously between two processes", "Load Balancing", "All of the above"],
    correct:"All of the above",
    questionId: "1071006"
  },
  {
    question: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    answers: ["Insertion Sort", "Quick Sort", "Heap Sort", "Merge Sort"],
    correct: "Merge Sort",
    questionId: "1174154"
  },
  {
    question: "Suppose a circular queue of capacity (n – 1) elements is implemented with an array of n elements. Assume that the insertion and deletion operation are carried out using REAR and FRONT as array index variables, respectively. Initially, REAR = FRONT = 0. The conditions to detect queue full and queue empty are",
    answers: ["Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT", "Full: (REAR+1) mod n == FRONT, empty: (FRONT+1) mod n == REAR", "	Full: REAR == FRONT, empty: (REAR+1) mod n == FRONT", "Full: (FRONT+1) mod n == REAR, empty: REAR == FRONT"],
    correct: "Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT",
    questionId: "1226535"
  },
  {
    question: "A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?",
    answers: ["An array of 50 numbers", "An array of 100 numbers", "An array of 500 numbers", "A dynamically allocated array of 550 numbers"],
    correct: "An array of 50 numbers",
    questionId: "1310938"
  },
  {
    question: "Suppose the numbers 7, 5, 1, 8, 3, 6, 0, 9, 4, 2 are inserted in that order into an initially empty binary search tree. The binary search tree uses the usual ordering on natural numbers. What is the in-order traversal sequence of the resultant tree?",
    answers: ["7 5 1 0 3 2 4 6 8 9", "0 2 4 3 1 6 5 9 8 7", "0 1 2 3 4 5 6 7 8 9", "9 8 6 4 2 3 0 1 5 7"],
    correct: "0 1 2 3 4 5 6 7 8 9",
    questionId: "1436873"
  },
  {
    question: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is ",
    answers: ["log 2 n", "n/2", "log 2 n – 1", "n"],
    correct: "n",
    questionId: "1515110"
  },
  {
    question: "What is the worst case possible height of AVL tree?",
    answers: ["2Logn \n Assume base of log is 2", "1.44log n\nAssume base of log is 2", "Depends upon implementation", "Theta(n)"],
    correct: "1.44log n\nAssume base of log is 2",
    questionId: "1642728"
  },
  {
    question:
      "Which of the following is FALSE about B/B+ tree",
    answers: ["B/B+ trees grow upward while Binary Search Trees grow downward.", "Time complexity of search operation in B/B+ tree is better than Red Black Trees in general.", "Number of child pointers in a B/B+ tree node is always equals to number of keys in it plus one", "	A B/B+ tree is defined by a term minimum degree. And minimum degree depends on hard disk block size, key and address sizes"],
    correct: "Time complexity of search operation in B/B+ tree is better than Red Black Trees in general.",
    questionId: "1747256"
  },
  {
    question:
      "The order of an internal node in a B+ tree index is the maximum number of children it can have. Suppose that a child pointer takes 6 bytes, the search field value takes 14 bytes, and the block size is 512 bytes. What is the order of the internal node?",
    answers: ["24", "25", "26", "27"],
    correct: "26",
    questionId: "1822532"
  },
  {
    question: "Consider a complete binary tree where the left and the right subtrees of the root are max-heaps. The lower bound for the number of operations to convert the tree to a heap is",
    answers: [
      "Ω(logn)",
      "Ω(n)",
      "Ω(nlogn)",
      "Ω(n2)"
    ],
    correct: "Ω(logn)",
    questionId: "195075"
  },
  {
    question: 'Given a hash table T with 25 slots that stores 2000 elements, the load factor α for T is',
    answers: ["80", "0.0125", "8000", "1.25"],
    correct: "80",
    questionId: "2019778"
  },
  {
    question: "Let P be a singly linked list. Let Q be the pointer to an intermediate node x in the list. What is the worst-case time complexity of the best known algorithm to delete the node Q from the list?",
    answers: ["O(n)", "O(log2 n)", "O(logn)", "O(1)"],
    correct: "O(1)",
    questionId: "2134343"
  },
  {
    question: "Let G be a weighted undirected graph and e be an edge with maximum weight in G. Suppose there is a minimum weight spanning tree in G containing the edge e. Which of the following statements is always TRUE?  ",
    answers: [
      "There exists a cutset in G having all edges of maximum weight.",
      "	There exists a cycle in G having all edges of maximum weight",
      "Edge e cannot be contained in a cycle.",
      "All edges in G have the same weight"
    ],
    correct: "There exists a cutset in G having all edges of maximum weight.",
    questionId: "2210799"
  },
  {
    question:
      "B+ Trees are considered BALANCED because",
    answers: ["the lengths of the paths from the root to all leaf nodes are all equal.", "	the lengths of the paths from the root to all leaf nodes differ from each other by at most 1.", "the number of children of any two non-leaf sibling nodes differ by at most 1.", "the number of records in any two leaf nodes differ by at most 1."],
    correct: "the lengths of the paths from the root to all leaf nodes are all equal.",
    questionId: "2379831"
  },
  {
    question: "When searching for the key value 60 in a binary search tree, nodes containing the key values 10, 20, 40, 50, 70 80, 90 are traversed, not necessarily in the order given. How many different orders are possible in which these key values can occur on the search path from the root to the node containing the value 60?",
    answers: ["35", "64", "128", "5040"],
    correct: "35",
    questionId: "2426418"
  },
  {
    question: "Which of following does not have a body",
    answers: ["Interface", "Class", "Abstract Method", "none of above"],
    correct: "Abstract Method",
    questionId: "2510086"
  },
  {
    question: "Which of the following is TRUE?",
    answers: [
      "The cost of searching an AVL tree is θ (log n) but that of a binary search tree is O(n)",
      "	The cost of searching an AVL tree is θ (log n) but that of a complete binary tree is θ (n log n)",
      "The cost of searching a binary search tree is O (log n ) but that of an AVL tree is θ(n)",
      "The cost of searching an AVL tree is θ (n log n) but that of a binary search tree is O(n)"
    ],
    correct: "The cost of searching an AVL tree is θ (log n) but that of a binary search tree is O(n)",
    questionId: "2685745"
  },
  {
    question:
      "The cost of searching an AVL tree is θ (log n) but that of a binary search tree is O(n)",
    answers: ["Worst case complexity of search operations is less", "	Space used is less", "Deletion is easier", "None of the above"],
    correct: "Deletion is easier",
    questionId: "2796884"
  },
  {
    question: "In oops public, private & protected are",
    answers: ["Classes","Access Modifiers","Interfaces","Method signature"],
    correct: "Access Modifiers",
    questionId: "2838900"
  },
  {
    question: 'The postorder traversal of a binary tree is 8, 9, 6, 7, 4, 5, 2, 3, 1. The inorder traversal of the same tree is 8, 6, 9, 4, 7, 2, 5, 1, 3. The height of a tree is the length of the longest path from the root to any leaf. The height of the binary tree above is ________ .',
    answers: ["2", "3", "4", "5"],
    correct: "4",
    questionId: "298060"
  },
  {
    question: "The minimum number of stacks needed to implement a queue is",
    answers: ["4", "2", "1", "3"],
    correct: "2",
    questionId: "3096579"
  },
  {
    question: "A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are",
    answers: [
      "5",
      "4",
      "1",
      "2"
    ],
    correct: "5",
    questionId: "3182461"
  },
  {
    question: "Consider the following conditions: (a)The solution must be feasible, i.e. it must satisfy all the supply and demand constraints. (b)The number of positive allocations must be equal to m1n21, where m is the number of rows and n is the number of columns. (c)All the positive allocations must be in independent positions. The initial solution of a transportation problem is said to be non-degenerate basic feasible solution if it satisfies: Codes:",
    answers: [
      "(a) and (b) only",
      "(a) and (c) only",
      "(b) and (c) only",
      "(a), (b) and (c)"
    ],
    correct: "(a), (b) and (c)",
    questionId: "3239112"
  },
  {
    question: "The average depth of a binary search tree is:",
    answers: ["O(n0.5)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(log n)",
    questionId: "3318503"
  },
  {
    question:
      "The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16. What is the height of the binary search tree (the height is the maximum distance of a leaf node from the root)?",
    answers: ["2", "3", "5", "4"],
    correct: "3",
    questionId: "3410327"
  },
  {
    question: "The five items: A, B, C, D, and E are pushed in a stack, one after other starting from A. The stack is popped four items and each element is inserted in a queue. The two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is",
    answers: ["A", "B", "C", "D"],
    correct: "D",
    questionId: "3542596"
  },
  {
    question: "A full binary tree with n leaves contains:",
    answers: ["n nodes", "log2 n nodes", "2n-1 nodes", "2n nodes"],
    correct: "2n-1 nodes",
    questionId: "3667517"
  },
  {
    question: "Which of the following correctly declares an array?",
    answers: [
      "int Coding_Camp[20];",
      "int Coding_Camp;",
      "Coding_Camp{20};",
      "array Coding_Camp{20};"
    ],
    correct: "int Coding_Camp[20];",
    questionId: "3791672"
  },
  {
    question: "Stack A has the entries a, b, c (with a on top). Stack B is empty. An entry popped out of stack A can be printed immediately or pushed to stack B. An entry popped out of the stack B can be only be printed. In this arrangement, which of the following permutations of a, b, c are not possible?",
    answers: ["b a c", "b c a", "c a b", "a b c"],
    correct: "c a b",
    questionId: "3893585"
  },
  {
    question: "The five items: A, B, C, D, and E are pushed in a stack, one after other starting from A. The stack is popped four items and each element is inserted in a queue. The two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is",
    answers: ["A", "B","C","D"],
    correct: "D",
    questionId: "3913430"
  },
  {
    question: "In a file which contains 1 million records and the order of the tree is 100, then what is the maximum number of nodes to be accessed if B+ tree index is used?",
    answers: ["5", "4", "3", "10"],
    correct: "4",
    questionId: "4049121"
  },
  {
    question:
      "Consider a hash table of size seven, with starting index zero, and a hash function (7x+3) mod 4. Assuming the hash table is initially empty, which of the following is the contents of the table when the sequence 1, 3, 8, 10 is inserted into the table using closed hashing ? Here “__” denotes an empty location in the table.",
    answers: ["3, 10, 1, 8, __ , __ , __", "1, 3, 8, 10, __ , __ , __", "1, __ , 3, __ , 8, __ , 10", "	3, 10, __ , __ , 8, __ , __"],
    correct: "3, 10, 1, 8, __ , __ , __",
    questionId: "4150746"
  },
  {
    question:
      "Trie is also known as _____",
    answers: ["Treap", "Binomial Tree", "	2-3 Tree", "Digital Tree"],
    correct: "Digital Tree",
    questionId: "4235063"
  },
  {
    question: "What is the worst case efficiency for a path compression algorithm?",
    answers: ["O(M log N)", "O(N log N)", "O(log N)", "O(N)"],
    correct: "O(M log N)",
    questionId: "4321002"
  },
  {
    question: "What is the worst case time complexity of inserting n^2 elements into an AVL-tree with n elements initially ?",
    answers: [
      "	Θ(n^4)",
      "Θ(n^2)",
      "Θ(n^2 log n)",
      "Θ(n^3)"
    ],
    correct: "Θ(n^2 log n)",
    questionId: "4442286"
  },
  {
    question: "What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order ?",
    answers: [
      "Θ(n)",
      "Θ(n log n)",
      "Θ(n2)",
      "Θ(1)"
    ],
    correct: "Θ(n2)",
    questionId: "4564430"
  },
  {
    question: "What is the worst-case number of arithmetic operations performed by recursive binary search on a sorted array of size n?",
    answers: ["	Θ(√n)", "Θ(log2(n))", "Θ(n2)", "Θ(n)"],
    correct: "Θ(log2(n))",
    questionId: "4630606"
  },
  {
    question:
      "How is the 3rd element in an array accessed based on pointer notation?",
    answers: ["*a + 3", "*(a + 3)", "*(*a + 3)", "&(a + 3)"],
    correct: "*(a + 3)",
    questionId: "4795960"
  },
  {
    question: "When is the object created with a new keyword?",
    answers: ["At run time", "At compile time", "Depends on the code", "None"],
    correct: "At run time",
    questionId: "4811162"
  },
  {
    question: "What is an object in c++?",
    answers: ["It is a function of class", "It is an instance of the class", "It is the datatype of the class", "It is part of the syntax of class"],
    correct: "It is an instance of the class",
    questionId: "4982981"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

